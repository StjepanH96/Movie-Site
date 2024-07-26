import dotenv from 'dotenv';
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  },
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;