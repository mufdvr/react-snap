#!/usr/bin/env node

const url = require("url");
const nativeFs = require("fs");
const { run } = require("./index.js");

let reactSnap
if (nativeFs.existsSync("/app/package.json")) {
  reactSnap  = require("/app/package.json").reactSnap;
} else {
  reactSnap = {
    puppeteerArgs: ["--disable-setuid-sandbox", "--no-sandbox"],
    inlineCss: false,
  };
}

const publicUrl = process.env.PUBLIC_URL;

run({
  publicPath: publicUrl ? url.parse(publicUrl).pathname : "/",
  ...reactSnap,
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
