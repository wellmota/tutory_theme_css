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

## Image Replacement Strategy

For replacing `<img>` elements with custom images (PNG, JPG, etc.), use this approach:

### Strategy: Hide Original Image, Use Pseudo-Element

When you need to replace an `<img src="...">` element with a custom image:

1. **Hide the original image** - Set `display: none` on the `<img>` element
2. **Use parent pseudo-element** - Create a `::before` pseudo-element on the parent container
3. **Set background image** - Use the custom image URL as `background-image`
4. **Size appropriately** - Set fixed dimensions or use responsive sizing

### Example: Replacing Multiple Images by Position

```css
/* Hide all original images */
.meta-dia-panorama img {
  display: none !important;
}

/* Make parent container relative for positioning */
.meta-dia-panorama-item {
  position: relative !important;
}

/* Create pseudo-element for icon display */
.meta-dia-panorama-item::before {
  content: '' !important;
  display: block !important;
  width: 80px !important;
  height: 80px !important;
  margin: 0 auto 12px auto !important;
  background: rgba(124, 58, 237, 0.1) !important;
  padding: 24px !important;
  border-radius: 8px !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  transition: transform 0.3s ease !important;
}

/* Replace icons using CSS background images by position */
/* First icon - Calendar */
.meta-dia-panorama .row > .col:nth-child(2) .meta-dia-panorama-item::before {
  background-image: url('https://github.com/wellmota/tutory_theme_css/blob/main/icons%20law/calendar.png?raw=true') !important;
}

/* Second icon - Book */
.meta-dia-panorama .row > .col:nth-child(3) .meta-dia-panorama-item::before {
  background-image: url('https://github.com/wellmota/tutory_theme_css/blob/main/icons%20law/book.png?raw=true') !important;
}

/* Third icon - Clock */
.meta-dia-panorama .row > .col:nth-child(4) .meta-dia-panorama-item::before {
  background-image: url('https://github.com/wellmota/tutory_theme_css/blob/main/icons%20law/Clock.png?raw=true') !important;
}

/* Fourth icon - Lessons */
.meta-dia-panorama .row > .col:nth-child(5) .meta-dia-panorama-item::before {
  background-image: url('https://github.com/wellmota/tutory_theme_css/blob/main/icons%20law/lesons.png?raw=true') !important;
}

/* Hover effect */
.meta-dia-panorama-item:hover::before {
  transform: scale(1.05) !important;
}
```

### Key Points for Image Replacement

- **Use `display: none`** on `<img>` to prevent loading original images
- **Parent must be `position: relative`** for proper pseudo-element positioning
- **Use `::before` pseudo-element** on the parent container, not the img itself
- **Set explicit dimensions** (width/height) for consistent sizing
- **Use `background-size: contain`** to maintain aspect ratio
- **Target by position** using `:nth-child()` when multiple images need different replacements
- **Use GitHub raw URLs** with `?raw=true` parameter for direct image access

### Image Hosting

Images can be hosted at:
```
https://github.com/wellmota/tutory_theme_css/blob/main/icons%20law/{image-name}.png?raw=true
```

Or use raw.githubusercontent.com:
```
https://raw.githubusercontent.com/wellmota/tutory_theme_css/main/icons%20law/{image-name}.png
```

## Notes

- Icons maintain their color through CSS `filter` or by using colored SVGs
- The `1em` sizing ensures icons scale with text size
- All replacements use `!important` to override theme defaults
- The commit hash in the URL ensures version consistency
- For image replacements, use fixed pixel sizes or responsive units (rem, em) as needed
- Pseudo-elements (`::before`, `::after`) are preferred over modifying `<img>` src attributes

