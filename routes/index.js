module.exports = app => {

    // Base URLS
    app.use('/api', require('./auth.routes.js'))
    app.use('/designer', require('./designer.routes.js'))

}