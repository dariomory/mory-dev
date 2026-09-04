---
layout: ../../layouts/MarkdownAppLayout.astro
title: 'NomadWiFi'
seoTitle: 'NomadWiFi — Wi-Fi roaming and 5 GHz optimizer for Windows'
description: 'Fixes sticky access points on Windows. Scores every AP in range, switches in about a second when the link drops, and pauses your VPN around the roam.'
tagline: 'Your laptop is stuck on the worst access point in the building.'
order: 6
status: 'Shipped — v1.2.0'
image: { url: '/apps/nomadwifi.png', alt: 'NomadWiFi logo' }
appImage1: { url: '/apps/nomadwifi-1.webp', alt: 'NomadWiFi desktop app' }
appImage2: { url: '/apps/nomadwifi-2.webp', alt: 'NomadWiFi command-line scan output' }
website: https://nomadwifi.mory.dev
pricing: 'Free · MIT'
platform: 'Windows 10 and 11'
stack: 'Go 1.24, WPF (.NET Framework 4.8), Windows Native Wifi API'
appCategory: 'UtilitiesApplication'
operatingSystem: 'Windows'
version: '1.2.0'
license: 'https://opensource.org/licenses/MIT'
price: 0
priceCurrency: 'USD'
---

Hotel and cafe Wi-Fi is rarely one network — it is a dozen access points, and Windows will
happily stay bonded to the first one it met while reporting 99% link quality. NomadWiFi measures
every radio in range and moves you to the one that is actually good.

It ranks access points honestly, scoring measured signal, band, 802.11 standard and BSS-Load
airtime congestion rather than trusting the driver's opinion of the incumbent. It subscribes to
the wireless service's notifications instead of polling, so a dropped link is noticed in around
100 ms — and a roam that fails to carry traffic is rolled back.

It also recognises SSID families like Lobby, Floor2 or anything ending in 5G, pre-writes and
verifies per-user profiles for a venue, and deletes guesses that fail twice. Captive portals are
detected and never mistaken for a bad access point. VPNs get the off-and-on-again dance
automated around the switch: hold the tunnel, roam, verify, resume, flush DNS.

Every command-line operation takes a JSON flag, and there is a desktop app covering the same
ground. No admin rights, no driver patches, no service install.

Built for people who work from hotels, cafes and coworking spaces.
