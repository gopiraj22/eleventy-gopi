const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const plantuml = require("eleventy-plugin-plantuml");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(plantuml.plugin);
};