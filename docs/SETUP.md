# Setup and customization

1. Install Node.js 22.12 or later, run `npm install`, and start the site with `npm run dev`.
2. Set the monitored support email and published App Store URL in `src/utils/constants.js`. Until a URL is provided, the site shows a coming-soon label instead of a download link.
3. Replace the example FAQ answers and feature copy with accurate instructions for the released app.
4. Complete `src/pages/PrivacyPolicy.jsx`, including the last-updated date, data practices, deletion instructions, and contact details. Obtain appropriate legal review before publishing or submitting the app.
5. Replace the four screenshot placeholders in `src/pages/Home.jsx` with approved app screenshots and meaningful alt text. Replace the placeholder logo, favicon, and social image in `public/` with approved assets. Update references in `index.html` and the header if file names change.
6. Update the title, description, and Open Graph metadata in `index.html`. Use an absolute, publicly accessible PNG or JPEG URL for `og:image` when sharing on platforms that do not support SVG or relative URLs.
7. Run `npm run build` and `npm run preview` to check the production site.

For GitHub Pages, follow the README deployment instructions. `VITE_BASE_PATH` must include leading and trailing slashes (for example, `/forkplan-web/`); use `/` for a root domain. The hash-based routes support direct links without a 404 rewrite. The workflow publishes to `gh-pages`; configure GitHub Pages to serve that branch.
