# eleventy-gopi
static site project

11ty   
====
- Install node.js v14 or above
  Node.js 
   - Java"Script" runtime engine 
   - Outside of Chrome browser now
   - Open source
   - V-20.13.1 (> node --version)
   - NPM node package manager, part of node.js (npm also the company name < GitHub subsidiary)
   - NPX a command in npm
     
- Install Plugins
  - CurrDir> npm install @11ty/eleventy-plugin-syntaxhighlight
  - CurrDir> npm install eleventy-plugin-plantuml
  - create file .eleventy.js (config file) with contents:
		const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
		const plantuml = require("eleventy-plugin-plantuml");

		module.exports = function(eleventyConfig) {
			eleventyConfig.addPlugin(syntaxHighlight);
			eleventyConfig.addPlugin(plantuml.plugin);
		};

- Create content files
	- Currdir - place a.md file
	
- Run 11ty (auto installs) 
   - Currdir > npx @11ty/eleventy --serve
   - V-2.0.1
   - Output  - currdir\"_site"\ html

Ref: 
	https://www.11ty.dev/ 
	https://www.npmjs.com/package/eleventy-plugin-plantuml


GitHub
-------
- Create repo for your project (GitHub
- Check in all files to that repo except modules and output folders
  Eg. create a .gitignore file with content
		/node_modules
		/_site

Netlify Deployment
------------------
- Create an account in Netlify (signup with GitHub)
- Sites > Add new Site > Import existing project > GitHub > choose your project from GitHub
  If repo not found --> Configure the Netlify app on GitHub > repository access > add your project
- Build settings
  Build command > npx @11ty/eleventy
- Deploy

Voila ==>> Your site:
https://eleventygopi.netlify.app


Ref: https://docs.netlify.com/frameworks/#javascript-spas
