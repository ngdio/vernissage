import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import ViteReactPlugin from '@vitejs/plugin-react'
import ViteTailwindPlugin from '@tailwindcss/vite'
import "tsx/esm";
import { jsxToString } from "jsx-async-runtime";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

const viteOptions = {
  publicDir: "public",
  clearScreen: false,
  server: {
    middlewareMode: true
  },
  appType: "custom",
  build: {
    mode: "production",
    sourcemap: "true",
    manifest: true,
  },
  plugins: [
    ViteReactPlugin(),
    ViteTailwindPlugin()
  ],
};

export default async function(eleventyConfig) {
  eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.addPlugin(EleventyVitePlugin, {
    tempFolderName: "_tmp",
    viteOptions,
  });

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    transformOnRequest: false,
    formats: ["avif", "webp", "jpeg"],
    widths: [200, 500, 1000, "auto"],
  });

  eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
		key: "11ty.js",
		compile: function () {
			return async function (data) {
				let content = await this.defaultRenderer(data);
        const result = await jsxToString(content);
        return `<!doctype html>\n${result}`;
			};
		},
	});
  
  eleventyConfig.addTemplateFormats("11ty.ts,11ty.tsx");

  eleventyConfig.addWatchTarget("src/includes");

  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    templateFormats: ["md", "html", "tsx"],
    htmlTemplateEngine: false,
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site",
      includes: "includes",
      layouts: "layouts",
      data: "data",
    }
  };
};
