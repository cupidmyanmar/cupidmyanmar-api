let personRoute = require('./person');






module.exports = (app) => {

    app.use('/apiv1/person', personRoute);
    return app;
  
};