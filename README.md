# ForkPlan website

A public, responsive marketing site for ForkPlan, built with Vite, React, React Router, and Tailwind CSS. The home, help, and privacy pages do not require authentication.

## Get started

Use Node.js 22.12 or later:

```sh
npm install
npm run dev
```

Open the URL printed by Vite (normally http://localhost:3000). Run `npm run build` to generate `dist/`, and `npm run preview` to preview the production build.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds on pushes to `main` and publishes `dist/` to the `gh-pages` branch. In repository Settings → Pages, select **Deploy from a branch**, then choose `gh-pages` and `/ (root)` after the first deployment. Ensure Actions has permission to write repository contents.

The workflow sets the Vite base path to `/<repository-name>/`, suitable for a GitHub Pages project site. For a user/organization site (`<owner>.github.io`) or a custom domain hosted at the root, change `VITE_BASE_PATH` in the workflow to `/`. Routes use URL hashes so that shared links and refreshes work without server-side rewrites.

To deploy manually, build with the correct base path and run:

```sh
VITE_BASE_PATH=/forkplan-web/ npm run build
npm run deploy
```

Replace `forkplan-web` with the actual repository name, or use `/` for a root-hosted site. Manual deployment requires Git push access. For Vercel or Netlify, use `npm run build`, publish `dist`, and leave the base path at `/` unless hosting under a subpath.

## Before publishing

This is a scaffold, not a finished legal policy or a representation of verified app features. Replace the placeholder support address and App Store URL in `src/utils/constants.js`; complete and review the privacy policy in `src/pages/PrivacyPolicy.jsx` against the real app and applicable laws; and update the example help content and feature descriptions. Replace the screenshot placeholders and the SVG brand/social assets in `public/` with approved artwork. Some social platforms require a publicly hosted absolute PNG or JPEG Open Graph image URL; update the `og:image` tag in `index.html` accordingly.

See [setup details](docs/SETUP.md) for customization and deployment notes.

## Contributing

Create a branch, make focused changes, and run `npm run build` before opening a pull request. Keep pages accessible and verify layouts on mobile and desktop. Do not commit credentials or environment files.

## License

No license has been granted. All rights reserved; contact the repository owner for permission to use this code.
