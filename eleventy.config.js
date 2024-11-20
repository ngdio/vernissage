import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

const viteOptions = {
  publicDir: "public",
  clearScreen: false,
  server: {
    middlewareMode: true
  },
  appType: "custom",
  assetsInclude: ["**/*.xml", "**/*.txt"],
  build: {
    mode: "production",
    sourcemap: "true",
    manifest: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/css/main.[hash].css",
        chunkFileNames: "assets/js/[name].[hash].js",
        entryFileNames: "assets/js/[name].[hash].js",
      },
      plugins: [],
    },
  },
};

export default async function(eleventyConfig) {
  eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.addPlugin(EleventyVitePlugin, {
    tempFolderName: "_tmp",
    viteOptions,
  });

  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    templateFormats: ["md", "njk", "html"],
    htmlTemplateEngine: "njk",
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
