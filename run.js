#!/usr/bin/env node

const url = require("url");
const { run } = require("./index.js");
const {
  reactSnap
} = require(`/app/package.json`);

const publicUrl = process.env.PUBLIC_URL;

run({
  publicPath: publicUrl ? url.parse(publicUrl).pathname : "/",
  ...reactSnap
}).catch(error => {
  console.error(error);
  process.exit(1);
});