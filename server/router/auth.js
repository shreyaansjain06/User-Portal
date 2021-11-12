const express = require('express');
const router = express.Router();
require('../db/conn');
const bcrypt = require('bcrypt');
const User = require('../models/userSchema');
router.get('/', (req, res) => {
  res.send('hello this auth page of router');
});

router.post('/register', async (req, res) => {
  try {
    // destructuring
    const { name, email, phone, work, password, cpassword } = req.body;
    console.log(req.body);
    // checking if any field is null
    if (!name || !email || !phone || !work || !password || !cpassword) {
      res.status(422).json({ error: 'plz filled the field properly' });
    }
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: 'Email already exists' });
    } else if (cpassword != password) {
      return res.status(422).json({ error: 'Password does not match' });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      // saving the user(document)
      await user.save();
      res.status(201).json({ message: 'user registered succesfully' });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(422).json({ error: 'plz filled the field properly' });
    }
    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      // generating token 
      const token= await userLogin.generateAuthToken();
      console.log(token);
      // making a cookie and its value
      res.cookie('jwtoken',token,{
        // adding time when to expire
        expires: new Date(Date.now()+2589200000),
        httpOnly: true
      })

      if (isMatch) {
        res.status(201).json({ message: 'Sign in successfully' });
      } else {
        res.status(422).json({ error: 'Invalid credentials' });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

// By promise
// router.post('/register', (req, res) => {
//   console.log(req.body);

//   // destructuring
//   const { name, email, phone, work, password, cpassword } = req.body;

//   // checking if any field is null
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     res.status(422).json({ error: 'plz filled the field properly' });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: 'Email already exists' });
//       }
//       //we can make a document inside User collection
//       // creating a new user
//       const user = new User({ name, email, phone, work, password, cpassword });

//       // saving the user(document)
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: 'user registered succesfully' });
//         })
//         .catch((err) => res.status(500).json({ error: 'failed to register' }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
