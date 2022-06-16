import app from './app'

// import './database/connection'
app.listen(app.get('port'))

// use the configuration of file  app.js
console.log("server initialized", app.get('port'));