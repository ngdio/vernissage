import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

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
