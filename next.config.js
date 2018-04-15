module.exports = {
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/foo': { page: '/foo' }
    };
  }
};
