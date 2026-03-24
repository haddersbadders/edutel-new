import path from "node:path";
import * as sass from "sass";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function(eleventyConfig) {

	eleventyConfig.addPlugin(syntaxHighlight);

eleventyConfig.addExtension("scss", {
        outputFileExtension: "css",
        useLayouts: false,

        compile: async function (inputContent, inputPath) {
            let parsed = path.parse(inputPath);
            
            // Skip files starting with "_" (partials)
            if (parsed.name.startsWith("_")) {
                return;
            }

            let result = sass.compileString(inputContent, {
                loadPaths: [
                    parsed.dir || ".",
                    this.config.dir.includes,
                    "node_modules" // CRITICAL: This allows @import "bulma" to work
                ],
                sourceMap: true // Helpful for debugging in the browser
            });

            this.addDependencies(inputPath, result.loadedUrls);

            return async (data) => {
                return result.css;
            };
        },
    });

	// Simple Date Filter
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return new Intl.DateTimeFormat('en-GB', { 
            dateStyle: 'medium' 
        }).format(dateObj);
    });
    
    // Pass through Bulma and other assets
    eleventyConfig.addPassthroughCopy("src/assets/images");
eleventyConfig.addPassthroughCopy("src/assets/js");

    // If you want to use Sass for Bulma customization later
    eleventyConfig.addWatchTarget("./src/assets/css");

    return {
		markdownTemplateEngine: "njk",
        templateFormats: ["md", "njk", "html", "scss"],
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    };
};
