module.exports = (router) => {
  router.get('/version', (req, res) => {
    res.json({
      version: process.env.npm_package_version,
    });
  });
};
