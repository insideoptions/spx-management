# SPX MGMT deployment and SEO

This is the Next.js project deployed by AWS Amplify app `d370sik724g4hm` in `us-east-1`, from `insideoptions/spx-management`, branch `main`. The separate `spxmgmt` repository is the old React website.

## Included changes

- Server-rendered pages for `/`, `/strategy`, `/about`, `/media`, `/contact`, and `/legal`.
- Page-specific canonical, Open Graph, Twitter, and structured-data URLs on `https://spxmgmt.com`.
- Generated sitemap and robots files; no fragment URLs or invented modification dates.
- A working social preview image at `/opengraph-image`.
- Permanent Next.js host redirects for the production Amplify address and `www.spxmgmt.com`, preserving paths and query strings. Local previews are unaffected.
- Dark responsive redesign with the live site's WSJ-section image (`public/wsj3.png`) and FinTech TV interview. The original Zapier contact payload and integration are preserved.

## Publishing

Review the preview before publishing. No deployment or production settings have been changed by this work.

1. Build with `npm run build`. Deploy through the existing Amplify main branch once reviewed.
2. Replace the legacy Amplify SPA `404-200 /index.html` fallback with `deployment/amplify-redirects.json`. This uses domain-only rules, as required by Amplify. Next.js owns page routing and real 404 responses. These edge redirects reinforce the application redirects.
3. Confirm `https://spxmgmt.com` returns 200 with the correct canonical, and the AWS and www hosts redirect to it without loops. Verify `/about` and a URL containing a query string as well.
4. Submit `https://spxmgmt.com/sitemap.xml` in the domain's Google Search Console property. Also submit the same sitemap in Bing Webmaster Tools. Request indexing of the homepage and updated key pages. Search results change after Google recrawls; the code cannot force an immediate replacement.

The Amplify domain association was `AVAILABLE` when checked. Its apex subdomain reported `verified: false` while www reported true, although the live apex URL loaded. Check DNS verification in Amplify if that flag persists; do not replace working DNS records blindly.

Do not block the old Amplify domain in robots.txt: crawlers need to see its permanent redirect. Keep redirects active long-term. Search engines choose their canonical URLs; consistent signals cannot guarantee immediate removal of historical AWS URLs.

## Source references

- https://spxmgmt.com/ — business content, founder biography, contact details, WSJ and FinTech coverage
- https://docs.aws.amazon.com/amplify/latest/userguide/redirect-rewrite-examples.html — domain-only redirect syntax
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls — canonical and redirect signals
