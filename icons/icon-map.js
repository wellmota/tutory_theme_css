/**
 * Icon Mapping File
 * Maps icon names to GitHub raw URLs
 *
 * Base URL: https://raw.githubusercontent.com/wellmota/tutory_theme_css/606bc3ffb9bf057fd9bc9d4ffaf4b0234fd842a8/icons/
 */

const COMMIT_HASH = '606bc3ffb9bf057fd9bc9d4ffaf4b0234fd842a8'
const BASE_URL = `https://raw.githubusercontent.com/wellmota/tutory_theme_css/${COMMIT_HASH}/icons/`

// Icon name to filename mapping
// This is a reference - actual CSS will use direct URLs
const iconMap = {
  // Common icons used in themes
  accessibility: 'accessibility.svg',
  activity: 'activity.svg',
  'activity-square': 'activity-square.svg',
  'alert-circle': 'alert-circle.svg',
  'alert-triangle': 'alert-triangle.svg',
  'arrow-down': 'arrow-down.svg',
  'arrow-left': 'arrow-left.svg',
  'arrow-right': 'arrow-right.svg',
  'arrow-up': 'arrow-up.svg',
  bell: 'bell.svg',
  book: 'book.svg',
  'book-open': 'book-open.svg',
  calendar: 'calendar.svg',
  check: 'check.svg',
  'check-circle': 'check-circle.svg',
  'chevron-down': 'chevron-down.svg',
  'chevron-left': 'chevron-left.svg',
  'chevron-right': 'chevron-right.svg',
  'chevron-up': 'chevron-up.svg',
  clock: 'clock.svg',
  cog: 'cog.svg',
  download: 'download.svg',
  edit: 'edit.svg',
  eye: 'eye.svg',
  'eye-off': 'eye-off.svg',
  file: 'file.svg',
  folder: 'folder.svg',
  home: 'home.svg',
  info: 'info.svg',
  lock: 'lock.svg',
  mail: 'mail.svg',
  menu: 'menu.svg',
  minus: 'minus.svg',
  plus: 'plus.svg',
  search: 'search.svg',
  settings: 'settings.svg',
  trash: 'trash.svg',
  user: 'user.svg',
  users: 'users.svg',
  x: 'x.svg',
  'x-circle': 'x-circle.svg',
  // Add more as needed
}

// Function to get icon URL
function getIconUrl(iconName) {
  const filename = iconMap[iconName] || `${iconName}.svg`
  return `${BASE_URL}${filename}`
}

// Export for use in CSS generation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { iconMap, getIconUrl, BASE_URL, COMMIT_HASH }
}
