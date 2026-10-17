/**
 * Outbound destinations shared across the site.
 *
 * One place so a changed URL is one edit, not a grep. The same file
 * exists in fsino-use (src/lib/links.ts) — keep them in step.
 */

/** The live Play Store listing. */
export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.farmsupportinnovation.fsino';

/** The tenant app on web.fsinnovation.net. */
export const APP_URL = 'https://web.fsinnovation.net';
export const APP_REGISTER_URL = `${APP_URL}/register`;
export const APP_LOGIN_URL = `${APP_URL}/login`;

/** Legal documents live with the app, which is where Play Console points. */
export const LEGAL_TERMS_URL = `${APP_URL}/legal/terms`;
export const LEGAL_PRIVACY_URL = `${APP_URL}/legal/privacy`;
export const LEGAL_DELETE_ACCOUNT_URL = `${APP_URL}/legal/delete-account`;
