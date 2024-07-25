## One time work
### Project Eleventy (11ty)
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

### Deployment Netlify

  -  Create a GitHub repo for the project
  -  If Private project, provide access to Netlify
  -  Check in all files into the repo except (may want to include a .gitignore file in your project)
     -    node_modules (dependency folder auto-generated in deployment)
     -    _site        (output folder auto-generated in deployment)
 - Signup with Netlify 
   - [https://app.netlify.com/signup](https://app.netlify.com/signup) 
   - Choose GitHub Option and complete the signup
 - Create a Site
   -  Sites > Add new Site> Import existing project> GitHub> <Your-Project>
   -  Build Settings > Command>  npx @11ty/eleventy
    
 
## Your day to day work 
- Add content files (markdown/html/asciidoc etc...)
- Check-in to the GitHub repo
- Local Deployment
    -  npx @11ty/eleventy --serve
- http://localhost:8080/
 

## Ref
- [https://www.11ty.dev/](https://www.11ty.dev/)
- [https://www.npmjs.com/package/eleventy-plugin-plantuml](https://www.npmjs.com/package/eleventy-plugin-plantuml)
