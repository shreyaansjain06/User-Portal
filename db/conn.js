const mongoose = require('mongoose');

// define datablase
const DB =process.env.DATABASE;

// Establishing connection
mongoose.connect(DB)
  .then(() => {
    console.log(`connection successfull`);
  })
  .catch((err) => {
      console.log(err)
    console.log(`no connection`);
  });