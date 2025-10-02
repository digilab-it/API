// salva questo come generate-pdf.js
const puppeteer = require("puppeteer");
const { execSync } = require("child_process");
const path = require("path");

const htmlFile = "pdf.html";
const pdfFile = "api-reference.pdf";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const htmlPath = "file://" + path.resolve(htmlFile);
  await page.goto(htmlPath, { waitUntil: "networkidle0" });
  await page.pdf({ path: pdfFile, format: "A4" });
  await browser.close();
})();
