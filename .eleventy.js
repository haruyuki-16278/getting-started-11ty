const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  return {
    // ソースに使うディレクトリをsrcに
    // 出力先をdocsに
    dir: {
      input: 'src',
      output: 'docs'
    },
    pathPrefix: "/getting-started-11ty/"
  };
};
