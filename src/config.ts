import dotenv from 'dotenv';

dotenv.config();

export const config = {
  apiUrl: process.env.API_BASE_URL,
};
