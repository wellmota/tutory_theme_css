# Icon Replacement Guide

This guide explains how to replace icons in the theme using GitHub-hosted SVG files.

## Base URL

All icons are hosted at:
```
https://raw.githubusercontent.com/wellmota/tutory_theme_css/606bc3ffb9bf057fd9bc9d4ffaf4b0234fd842a8/icons/{icon-name}.svg
```

## Icon Mapping

The `icon-map.js` file contains a reference mapping of common icon names to their filenames.

## CSS Strategy

Icons are replaced using CSS `background-image` on `::before` pseudo-elements. The strategy:

1. **Target icon elements** - Font Awesome (`.fa-*`), Material Design (`.zmdi-*`), and generic icon classes
2. **Hide original content** - Set `content: ''` on `::before` to remove font-based icons
3. **Add background image** - Use GitHub URL as `background-image`
4. **Size appropriately** - Set `width` and `height` to `1em` to match text size

## Adding New Icons

To add a new icon replacement, add CSS like this:

```css
/* Icon Name */
i.fa-icon-name,
i.zmdi-icon-name,
[class*='icon-name'],
[class*='IconName']::before {
  content: '' !important;
  display: inline-block !important;
  width: 1em !important;
  height: 1em !important;
  background-image: url('https://raw.githubusercontent.com/wellmota/tutory_theme_css/606bc3ffb9bf057fd9bc9d4ffaf4b0234fd842a8/icons/icon-name.svg') !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  vertical-align: middle !important;
}
```

## Available Icons

All icons are in the `/icons` folder. The filename matches the icon name (e.g., `accessibility.svg`).

Common patterns:
- Font Awesome: `i.fa-{name}` or `i.fa.fa-{name}`
- Material Design: `i.zmdi-{name}` or `i.zmdi.zmdi-{name}`
- Generic: `[class*='{name}']`

## Notes

- Icons maintain their color through CSS `filter` or by using colored SVGs
- The `1em` sizing ensures icons scale with text size
- All replacements use `!important` to override theme defaults
- The commit hash in the URL ensures version consistency

