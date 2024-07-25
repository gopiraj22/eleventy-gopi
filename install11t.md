## One time work
- Install Node.js V14 or above


- Install plantuml Plugins
    - CurrDir> npm install @11ty/eleventy-plugin-syntaxhighlight
    - CurrDir> npm install eleventy-plugin-plantuml


- Introduce a configuration file 
    - .eleventy.js in the CurrDir
    - Make the following entries to link the plugin
  <pre>
         const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
         const plantuml = require("eleventy-plugin-plantuml");
     
         module.exports = function(eleventyConfig) {
           eleventyConfig.addPlugin(syntaxHighlight);
           eleventyConfig.addPlugin(plantuml.plugin);
         };
  </pre>
  
## Your day to day work 
- Add content files (markdown/html/asciidoc etc...)

- Run 11ty
  - Currdir > npx @11ty/eleventy --serve

- Your site is ready - http://localhost:8080/

## Ref
- https://www.11ty.dev/
- https://www.npmjs.com/package/eleventy-plugin-plantuml
