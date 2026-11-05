# La Sainte-Flanelle — public app website

Static French Canadian and English pages for the native iPhone app. No build tools, analytics, contact form or secrets. The app is in preparation; no App Store download link is displayed.

Preview with `python3 -m http.server 8080`, then open `/fr/` or `/en/`. Root defaults to French. All links are relative so the project base path `/lasainteflanelle.web/` works on GitHub Pages.

In repository Settings → Pages, choose **GitHub Actions**. Pushing main publishes using `.github/workflows/pages.yml`. Do not add a CNAME or change lasainteflanelle.ca DNS.

Screenshots are from the native development build, not mockups. Policies describe the separate Appwrite community and current disabled live-data/background-alert status. Update them when those services are enabled.
