# K Athmapriyan — Portfolio

A responsive, multi-page portfolio built with plain HTML, CSS and JavaScript. It has no build step or runtime dependencies, so it can be deployed directly to Vercel.

## Run locally

From this folder, start any static file server. For example, with Python:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`. For direct refreshes on nested routes, use Vercel or a local server configured to fall back to `index.html`.

## Deploy to Vercel

1. Put this folder in a Git repository, or import the repository containing it into Vercel.
2. Set the project root to this folder (`outputs/portfolio-webapp` if using the parent workspace repository).
3. Select **Other** as the framework preset. Leave the build command and output directory empty; the static site is served from this folder.
4. Deploy. `vercel.json` routes page paths to the portfolio shell, while static assets are served directly.

The résumé is available at `/assets/K_Athmapriyan_Resume.pdf`. Update the contact details, content, colors, or project information in `app.js` and `styles.css` as needed. The site intentionally includes no social profile links because none were supplied.
