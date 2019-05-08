const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Profile = require('../models/profiles');
const queryString = require('query-string')
const gravatar = require('gravatar'); 

router.post('/getProfiles', (req, res) => {
    // PARSE QUERY STRING HERE WITH LIBRARY
    console.log('req.body', req.body);
    //const values = queryString.parse()
    
    // DETERMINE WHETHER YOU HAVE QUERIES AND IF SO USE RIGHT MONGOOSE METHOD
  Profile.find({ instrument: req.body.instrument, style: req.body.style, gender: req.body.gender })
  .then((values) => {
      console.log('the values', values);
      res.send(values);
  });
});

router.get('/:id', (req, res) => {
    Profile.findById({_id:req.params.id}).then((profile) => {
        console.log("profile is here", profile)
        res.send(profile);
    });
  });

router.post('/', (req, res) => {
    console.log(req.body)
    Profile.find({email:req.body.email, password: req.body.password}).then((profile) => {
        console.log("profile is here", profile)
        res.send(profile);
   });
  });

router.post('/saveProfiles', (req, res) => {
    const avatar = gravatar.url(req.body.email, {
        s:'200',
        r: 'pg',
        d: 'mm'
    });
    let updatedBody;
    if (req.body.image === '') {
        updatedBody = {...req.body, image: avatar };
    } else {
        updatedBody = req.body;
    }
    Profile.create(updatedBody).then(dbModel => {
        res.json(dbModel)
    }).catch(err => res.status(422).json(err));
});

//update a profile 
router.post("/api/updateProfile/:id", function (req, res) {

    let { name, contentArr } = req.body;

    console.log('contents', contentArr);

    Profile.findById({_id:req.params.id}).then((profile) => {
        console.log("profile is here", profile)
        res.send(profile);
    })
      .then(() => {
        Profile.findOneAndUpdate({ _id: req.params.id }, { $set: { name, location, age, instrument, style, gender, links, sessions, experience, contact, about} })
          .then((profile) => {
            res.json(profile);
          })
          .catch((err) => {
            console.log(err)
          });
      })
  });


  
module.exports = router;
  