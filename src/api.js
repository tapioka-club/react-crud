/*
 * apiのルートURL
 */
export const IS_PROD = process.env.NODE_ENV === 'production';

export const CLIENT_URL = IS_PROD ? '' : 'http://localhost:3001';
