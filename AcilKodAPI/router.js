const express = require('express');
const User = require('./models/User');
const Alarm = require('./models/Alarm');
const Area = require('./models/Area');
const Past = require('./models/Past');

const router = express.Router();

// Create a new user
router.post('/user-save', async (req, res) => {
  const { name, email, password, photo } = req.body;

  try {
    const user = new User({ name, email, password, photo });
    await user.save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Update a user
router.post('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, password, photo } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { name, email, password, photo }, { new: true });
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Delete a user
router.post('/users-delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Create a new Alarm
router.post('/Alarm-save', async (req, res) => {
  const { AlarmKod, AlarmText, AlarmSound, AlarmIcon, AlarmStatus, createdBy, createdLocationRoom, createdLocation } = req.body;

  try {
    const alarm = new Alarm({ AlarmKod, AlarmText, AlarmSound, AlarmIcon, AlarmStatus, createdBy, createdLocationRoom, createdLocation });
    await alarm.save();
    res.send(alarm);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all Alarms
router.get('/Alarms', async (req, res) => {
  try {
    const alarms = await Alarm.find({});
    res.send(alarms);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Update a Alarm
router.post('/Alarm/:id', async (req, res) => {
  const { id } = req.params;
  const { AlarmKod, AlarmText, AlarmSound, AlarmIcon, AlarmStatus, createdBy, createdLocationRoom, createdLocation } = req.body;

  try {
    const alarm = await Alarm.findByIdAndUpdate(id, { AlarmKod, AlarmText, AlarmSound, AlarmIcon, AlarmStatus, createdBy, createdLocationRoom, createdLocation }, { new: true });
    res.send(alarm);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Delete a Alarm
router.post('/Alarm-delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const alarm = await Alarm.findByIdAndDelete(id);
    res.send(alarm);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

//Save Past Alarms
router.post('/Past-save', async (req, res) => {
  const { AlarmKod, AlarmRenk, AlarmText, AlarmStatus, createdBy, createdLocationRoom, createdLocation } = req.body;

  try {
    const past = new Past({
      AlarmKod,
      AlarmRenk,
      AlarmText,
      AlarmStatus,
      createdBy,
      createdLocationRoom,
      createdLocation
    });
    await past.save();
    res.send(past);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all Past Alarms
router.get('/Past', async (req, res) => {
  try {
    const pastAlarms = await Past.find({});
    res.send(pastAlarms);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Create a new Area
router.post('/Area-save', async (req, res) => {
  const { name, email, password, photo } = req.body;

  try {
    const Area = new Area({ name, email, password, photo });
    await Area.save();
    res.send(Area);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all Areas
router.get('/Areas', async (req, res) => {
  try {
    const areas = await Area.find({});
    res.send(areas);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Update a Areas
router.post('/Area/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, password, photo } = req.body;

  try {
    const Area = await Area.findByIdAndUpdate(id, { name, email, password, photo }, { new: true });
    res.send(Area);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Delete a Area
router.post('/Area-delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const area = await Area.findByIdAndDelete(id);
    res.send(area);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});



module.exports = router;