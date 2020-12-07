module.exports = app => {

    // Base URLS
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api', require('./designer.routes.js'))
    app.use('/api/files', require('./files.routes.js'))

}