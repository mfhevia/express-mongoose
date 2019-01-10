module.exports = (router, models) => ({
    register: () => {
        require('./version')(router, models);
        require('./pets')(router, models);
    }
});