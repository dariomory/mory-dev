---
title: 'How I Mapped Spotify''s Undocumented Endpoints'
description: 'An exploration of Spotify''s internal API architecture - capturing traffic, reverse engineering Protocol Buffer schemas, and the cat-and-mouse reality of undocumented endpoints.'
image: '/how-i-mapped-spotifys-undocumented-endpoints-thumbnail.webp'
pubDate: 2026-04-25
tags:
  - 'Software Engineering'
  - 'API'
  - 'Reverse Engineering'
  - 'Cybersecurity'
syndication:
  - platform: 'Medium'
    url: https://medium.com/@dariomory/how-i-mapped-spotifys-undocumented-endpoints-8ca89656ae9a
---

There’s a particular thrill in understanding how something works beneath its polished surface. Back in 2018, I set out to explore Spotify’s internal API structure, I wasn’t planning to build an alternative client or circumvent their terms of service. I wanted to understand how a modern streaming platform handles the complexity of serving millions of tracks to millions of users in real time.

What I discovered was a fascinating architecture, a constant evolution of endpoints, and the familiar cat-and-mouse. Endpoints deprecated without warning, auth flows quietly rotated, fingerprinting mechanisms that flag anything that doesn’t smell like an official client.

Navigating undocumented endpoints.

## Why Bother with Undocumented APIs?

Spotify provides an official API. It’s well-documented, rate-limited appropriately, and covers most reasonable use cases. So why look beyond it?

The official API intentionally restricts certain functionality. Real-time playback state with sub-second precision, queue manipulation at a granular level, the actual audio stream negotiations — these live in a different layer entirely. Understanding this layer reveals architectural decisions that the official documentation never mentions.

For me, this was an exercise in technical curiosity. The patterns Spotify uses — their authentication flows, their protocol buffer schemas, their approach to client fingerprinting. Studying them teaches you about building resilient systems.

## Tapping the Line

The first practical step is capturing traffic between the official Spotify client and their servers. This requires a proxy setup that can handle TLS interception.

```

from mitmproxy import http

import json

class SpotifyCapture :

def __init__ ( self ):

self .endpoints = set()

def request ( self ,  flow:  http. HTTPFlow ) ->  None :

if  “spotify”  in  flow.request. host:

endpoint = f”{flow.request.method} {flow.request.path}”

self .endpoints.add(endpoint)

# Log with timestamp for sequence analysis

print(f”[{flow.request.timestamp_start}] {endpoint}”)

# Capture request body for POST/PUT

if  flow.request. content:

try:

body = json.loads(flow.request.content)

print(f”  Body : {json.dumps(body, indent= 2 )[ : 500 ]}”)

except:

print(f”  Binary payload:  {len(flow.request.content)} bytes”)

addons = [ SpotifyCapture ()]

```

The binary payload detection matters more than you’d expect. Spotify uses Protocol Buffers extensively for their internal communication, and those payloads look like garbage until you decode them properly.

Getting the desktop client to trust your proxy certificate is straightforward on most systems, but mobile clients require additional steps — often involving rooted devices or specific instrumentation frameworks.

## Gray Hat Confessions

Here’s the uncomfortable truth about mapping any company’s undocumented endpoints: you’re playing a game where the other side holds all the cards and can change the rules whenever they want.

During my exploration, I witnessed endpoint structures shift. Paths that worked one week returned 404s the next. Authentication tokens that previously granted access to certain data suddenly required additional scopes. This isn’t Spotify being hostile — it’s normal software evolution. Internal APIs change because the internal systems they serve change.

Internal systems that never stop shifting.

This creates a fundamental asymmetry. Any documentation you create has a shelf life measured in weeks or months, not years. Any tooling you build requires constant maintenance. The investment calculation changes dramatically when you factor in this ongoing cost.

## Get Dario Mory’s stories in your inbox

Remember me for faster sign in

I adopted a pattern-based approach rather than endpoint-specific mapping

```

ENDPOINT_PATTERNS = {

‘entity_lookup’: r’/v1/[a-z]+/[a-zA-Z0– 9 ]{ 22 }’,

‘collection_fetch’: r’/v1/me/[a-z]+’,

‘playback_control’: r’/v1/me/player/[a-z]+’,

}

def categorize_endpoint ( path:  str ) ->  str :

for  category, pattern  in  ENDPOINT_PATTERNS.items():

if  re. match (pattern, path):

return  category

return 'unknown'

```

This abstraction proved more durable. Even when specific endpoints changed, the patterns remained stable.

## Protocol Buffers and Schema Discovery

The most interesting technical challenge was reverse engineering the Protocol Buffer schemas Spotify uses for certain internal communications. Unlike JSON, you can’t just read protobuf data — you need the schema to decode it.

The approach involves a combination of techniques

```

from  google.protobuf  import  descriptor_pb2

from  google.protobuf.internal.decoder  import  _DecodeVarint32

def analyze_protobuf ( data:  bytes ):

"""Attempt to extract field structure from unknown protobuf"""

pos =  0

fields = []

while  pos <  len (data):

try :

# Read field tag

tag, new_pos = _DecodeVarint32(data, pos)

field_number = tag >>  3

wire_type = tag &  0x7

fields.append({

'field' : field_number,

'wire_type' : wire_type,

'position' : pos

})

pos = new_pos

# Skip field value based on wire type

pos = skip_field(data, pos, wire_type)

except :

break

return  fields

```

By analyzing enough messages, you can reconstruct partial schemas. Field numbers remain consistent even when implementations change, which gives you something stable to work with.

## What I Actually Learned

The technical details matter less than the architectural insights. Exploring Spotify’s systems taught me a lot about building large-scale applications.

Versioning happens at multiple levels – API paths, payload schemas, and authentication mechanisms all evolve independently, allowing different parts of the system to change at different rates without breaking everything simultaneously.

Client fingerprinting is equally pervasive. Beyond authentication tokens, the platform tracks request timing, endpoint access sequences, and payload characteristics to identify non-standard clients – this is standard practice for any platform concerned about misuse, not something unique to Spotify.

## The Ethical Boundaries

Understanding how a system works doesn’t mean you should exploit that understanding. Spotify’s terms of service prohibit certain uses of their platform. The undocumented endpoints exist for their internal use, not as a public API.

The code examples in this article are illustrative patterns, not production-ready implementations for accessing their services.

There’s value in understanding systems deeply. There’s also value in respecting the boundaries that platform operators establish. These aren’t mutually exclusive positions.

Reverse engineering is less hacking, more careful curiosity.

## Takeaways

This game never ends in a stable equilibrium. You’re always one update away from your understanding becoming obsolete. That’s not a reason to avoid exploration- it’s a reason to set appropriate expectations about what you’re getting into.

Understanding how Spotify’s systems work made me a better engineer. Not because I can now build competing products, but because I’ve seen how a team of talented engineers solved hard problems at scale. Sometimes the best education comes from reading systems, not just documentation.
