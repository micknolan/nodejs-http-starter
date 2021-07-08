let webServer; 

async function startup() { 
  try {
      webServer = require('./webServer.js');
      await webServer.initialize();
  } catch (err) {
      console.log(err);
      process.exit(1); // Non-zero failure code
  }  
}

async function shutdown(e) {
    let err = e;   
    // Shutdown web server
    try {
      await webServer.close();
    } catch (e) {
      err = err || e;
      console.log(err);
    }
  
    if (err) {
      process.exit(1); // Non-zero failure code
    } else {
      process.exit(0);
    }
}

   
process.on('SIGTERM', () => {
  console.log('Received SIGTERM');
  shutdown();
});

process.on('SIGINT', () => {
  console.log('Received SIGINT');
  shutdown();
}); 

process.on('uncaughtException', err => {
  console.log(err);   
  shutdown(err);
});


startup();