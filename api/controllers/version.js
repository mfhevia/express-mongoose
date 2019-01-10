module.exports = (router, models) => {
    router.get('/version', (req, res, next) => {

        res.json({
            version: process.env.npm_package_version
        });
    });
}
