/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

import postCSSPurgeCSS from "@fullhuman/postcss-purgecss";

// https://vite.dev/config/
export default defineConfig({
  css: {
    ...(import.meta.env.NODE_ENV === "production") ? {
      transformer: "postcss",
      postcss: {
        plugins: [
          postCSSPurgeCSS({
            content: ["./index.html", "./src/**/*.{ts,tsx}"],
          })
        ]
      }
    } : {transformer: "lightningcss"} 
  },
  build: {
    cssMinify: "lightningcss",
  },
  plugins: [preact()],
})
