# GHOSTWOLF Gaming Website

A multi-page gaming profile website built with plain HTML, CSS, and JavaScript. No frameworks or installation required.

## Pages
- `index.html` — Home page with animated neon hero and quick links
- `profile.html` — Player profile and editable bio
- `games.html` — Game vault cards
- `socials.html` — Instagram and TikTok links
- `css/style.css` — Styling, responsive layout, neon effects, and animations
- `js/main.js` — Site name, social usernames, mobile navigation, and reveal effects

## Run in VS Code
1. Extract the ZIP file to a folder.
2. Open VS Code.
3. Select **File → Open Folder...** and choose the extracted `ghostwolf_gaming_site` folder.
4. Open `index.html`.
5. If you have the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**. Otherwise, you can open `index.html` directly in a browser.
6. Click Home, Profile, Games, and Socials to move between pages.

## Personalize your site
Open `js/main.js` and edit the `SETTINGS` values near the top:

```js
const SETTINGS = {
  name: "YOUR NAME",
  instagramUsername: "your_instagram",
  tiktokUsername: "your_tiktok"
};
```

Use usernames only, without the full URL. For example, if your Instagram profile is `https://www.instagram.com/example/`, set `instagramUsername: "example"`. For TikTok `https://www.tiktok.com/@example`, set `tiktokUsername: "example"`.

The starter values are placeholders. Replace them with your real details before sharing the website.

## Edit content
- Change the player bio in `profile.html`.
- Change game names and descriptions in `games.html`.
- Change colors and visual effects in `css/style.css`.
- The logo is a text-based placeholder, so you can replace the `Ｇ` character with your own initials or logo.

This is a front-end website only; it does not include a login system, database, or online admin panel.
