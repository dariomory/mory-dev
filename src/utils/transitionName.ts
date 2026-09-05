/* Pairs a listing card's logo with the same logo on its detail page, so the
   browser can morph one into the other. Both sides must derive the identical
   ident, hence one helper — and trailing slashes differ between call sites. */
export const logoTransitionName = (url: string) =>
    `logo-${url.replace(/^\/+|\/+$/g, '').replace(/[^a-zA-Z0-9]+/g, '-')}`;
