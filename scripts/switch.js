const path = require("path");
const fs = require("fs-extra");
const { getPrompts } = require("./prompts");

const root = process.cwd();

const publicPath = path.resolve(root, "public");
const destPath = path.resolve(root, "dist");
const templatePath = path.resolve(root, "templates");

async function getTemplates() {
  const templates = await fs.readdir(templatePath);
  return templates;
}

async function getTemplatePath() {
  const templates = await getTemplates();
  const { template } = await getPrompts(templates);
  return path.resolve(templatePath, template);
}

async function main() {
  const templatePath = await getTemplatePath();
  fs.cpSync(templatePath, destPath, { recursive: true });
  fs.cpSync(publicPath, destPath, { recursive: true });
}

main();
