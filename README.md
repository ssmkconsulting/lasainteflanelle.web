# La Sainte-Flanelle — Habs scoreboard website

Bilingual French Canadian and English website for the native iPhone scoreboard. The root page serves French; `/fr/` and `/en/` include the landing page, privacy, terms and account-deletion help. The previous community-guideline URLs remain available to explain the app’s new focus.

The design follows the sibling `lasainteflanelle.app` broadcast redesign: black background, chrome trim, red Montréal panels and opponent-specific colors, native app screenshots and small, medium and large widgets. Content follows `1-feature-dynamic-opponent-team-colors-across-the-ios-app` at `eee4951` (build 17, November 10). Build 17 was uploaded; Apple processing and tester availability are not assumed. Social posting, profiles and meetups are no longer advertised as app features.

## Preview

Run `python3 -m http.server 8080`, then open `http://localhost:8080/`. No build or installation is needed. `assets/site.js` progressively enhances the pregame/live/final/SF-menu/puck-drop screen explorer and five-opponent native theme showcase and foldaway website navigation; descriptions remain readable without JavaScript. FAQ disclosure controls work natively. Reduced-motion preferences are respected.

All links and assets use relative paths, including the root French page, so GitHub Pages’ `/lasainteflanelle.web/` project base path works.

## Content and assets

- Scores, schedule, statistics, automatic Game Night, independent sound previews, 0–120 second foreground celebration delay, reminders, widgets and Live Activities are the main features. Away teams appear first.
- The SF crest sits inside the folding menu button. Home shows team comparisons, including points and official division/wild-card position; the schedule is in its dedicated tab. Intermission includes an ice-resurfacer animation in the app. Website navigation uses an accessible SF shield tray with Escape and outside-click dismissal.
- The app is in TestFlight testing; no public App Store or open beta invitation link is available.
- Background goal/final alerts are supported after Apple sign-in, notification permission and successful registration. Delivery remains dependent on the source, network and Apple. Widget refresh timing is controlled by iOS; no continuous-refresh promise is made.
- Native development screenshots use explicitly labeled sample data. The French landing page identifies its app screenshots as English-language captures. Widgets are shown in the page’s language.
- Optimized WebP assets use branch screenshots from `docs/screenshots/build17/` and `home-standings/`, plus current native `TeamThemeReview` exports of the shipping SwiftUI views. The exports are produced by `App/Views/TeamThemeReview.swift` and saved under the simulator app’s `Documents/TeamThemeReview`. They use illustrative data and are not live results. French widgets are localized native live-state samples; app, theme-gallery and Live Activity previews disclose their English interface. Shared wordmark and menu-crest assets come from the app; the Barlow Condensed font includes `assets/barlow-OFL.txt`. No external fonts or image requests are needed.
- The theme showcase uses five real native widget examples (Minnesota, Boston, Toronto, Philadelphia and Detroit). The app supports all 32 active team palettes, keeps Montréal red and uses neutral gray for unknown teams. Home/away position stays independent of color.
- Feed ON/OFF describes freshness, independently of Game Night. Full-screen Canadiens goal lights remain blue/white/red, with static reduced-motion/flashing treatment.
- Privacy and deletion pages distinguish the scoreboard from legacy app data and the separate lasainteflanelle.ca community. Account deletion is under Settings.

No analytics, forms, secrets or API calls are added to the website.

## Hosting

In repository Settings → Pages, choose **GitHub Actions**. Pushing `main` publishes using `.github/workflows/pages.yml`. Do not add a CNAME or change lasainteflanelle.ca DNS.
