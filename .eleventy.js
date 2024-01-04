module.exports = function(eleventyConfig) {
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
