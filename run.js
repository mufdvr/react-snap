#!/usr/bin/env node

const url = require("url");
const { run } = require("./index.js");

const publicUrl = process.env.PUBLIC_URL

run({
  publicPath: publicUrl ? url.parse(publicUrl).pathname : "/",
  inlineCss: true,
  puppeteerExecutablePath: "/usr/bin/chromium-browser",
  concurrency: 1,
  puppeteerArgs: [
    "--disable-setuid-sandbox", "--no-sandbox"
  ]
}).catch(error => {
  console.error(error);
  process.exit(1);
});