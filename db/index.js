const mongoose = require('mongoose');

const {
  MONGODB_URI,
  MONGODB_USER,
  MONGODB_PASSWORD
} = process.env;

const connect = () => {
  mongoose
    .connect(MONGODB_URI, {
      user: MONGODB_USER,
      pass: MONGODB_PASSWORD,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log(`Mongoose connected to ${MONGODB_URI}`);
    })
    .catch(error => {
      console.log(`Mongoose error: ${error}`);
      process.exit(1);
    });

  return mongoose;
};

const disconnect = () => {
  mongoose
    .disconnect()
    .then(() => {
      console.log(`Mongoose disconnected`);
    })
    .catch(error => {
      console.log(`Mongoose error: ${error}`);
      process.exit(1);
    });
};


module.exports = {
  connect,
  disconnect
};
