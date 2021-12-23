require('dotenv').config();

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const REFRESH_JWT_SECRET_KEY = process.env.REFRESH_JWT_SECRET_KEY;
export const EXPIRE_JWT_SECRET_KEY = '60';
export const EXPIRE_REFRESH_JWT_SECRET_KEY = '60';
