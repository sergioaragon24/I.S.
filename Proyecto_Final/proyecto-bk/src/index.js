const app =  require('./config/server');
require('./app/ruta/auth')(app);

app.listen(app.get('PORT'), () => console.log(`El servidor esta corriendo en el puerto ${app.get('PORT')}`));
