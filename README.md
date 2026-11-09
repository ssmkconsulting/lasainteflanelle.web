# La Sainte-Flanelle — Habs scoreboard website

Bilingual French Canadian and English website for the native iPhone scoreboard. The root page serves French; `/fr/` and `/en/` include the landing page, privacy, terms and account-deletion help. The previous community-guideline URLs remain available to explain the app’s new focus.

The design follows the sibling `lasainteflanelle.app` broadcast redesign: dark arena, chrome wordmark, red/cyan accents, native app screenshots and small, medium and large widgets. Content reflects TestFlight build 14, the deployed November 7 alert/feed services and the November 9 app changes. Social posting, profiles and meetups are no longer advertised as app features.

## Preview

Run `python3 -m http.server 8080`, then open `http://localhost:8080/`. No build or installation is needed. `assets/site.js` progressively enhances the pregame/live/final/puck-menu screen explorer and foldaway website navigation; descriptions remain readable without JavaScript. FAQ disclosure controls work natively. Reduced-motion preferences are respected.

All links and assets use relative paths, including the root French page, so GitHub Pages’ `/lasainteflanelle.web/` project base path works.

## Content and assets

- Scores, schedule, statistics, automatic Game Night, independent sound previews, 0–120 second foreground celebration delay, reminders, widgets and Live Activities are the main features. Away teams appear first.
- The current SF shield icon and native puck-menu captures replace the older app artwork. Intermission includes an ice-resurfacer animation in the app. Website navigation uses an accessible SF puck-inspired tray with Escape and outside-click dismissal.
- The app is in TestFlight testing; no public App Store or open beta invitation link is available.
- Background goal/final alerts are supported after Apple sign-in, notification permission and successful registration. Delivery remains dependent on the source, network and Apple. Widget refresh timing is controlled by iOS; no continuous-refresh promise is made.
- Native development screenshots use explicitly labeled sample data. The French landing page identifies its app screenshots as English-language captures. Widgets are shown in the page’s language.
- Optimized WebP assets come from the app repository’s `docs/screenshots/build14/`, `docs/screenshots/approved-pregame/`, `docs/screenshots/build12/`, shared `BroadcastHeader.imageset`, `AppIcon.appiconset` and shared `WidgetArena.imageset`. No external image or font requests are needed. The locally hosted Barlow Condensed display font comes from Google Fonts’ official repository and includes its SIL Open Font License in `assets/barlow-OFL.txt`.
- Privacy and deletion pages distinguish the scoreboard from legacy app data and the separate lasainteflanelle.ca community. Account deletion is under Settings.

No analytics, forms, secrets or API calls are added to the website.

## Hosting

In repository Settings → Pages, choose **GitHub Actions**. Pushing `main` publishes using `.github/workflows/pages.yml`. Do not add a CNAME or change lasainteflanelle.ca DNS.
