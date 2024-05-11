/** @type {import('next').NextConfig} */

const webpack = require("webpack");

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
