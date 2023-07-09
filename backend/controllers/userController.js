import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';

const User = mongoose.model('User', UserSchema);

export const addNewUser = (req, res) => {
  let newUser = new User(req.body);

  newUser.save((err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

export const getUsers = (req, res) => {
  User.find({}, (err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

export const getUserByID = (req, res) => {
  User.findById(req.params.UserID, (err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

export const updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.UserID },
    req.body,
    { new: true },
    (err, User) => {
      if (err) {
        res.send(err);
      }
      res.json(User);
    }
  );
};

export const removeUser = (req, res) => {
  User.remove({ _id: req.params.UserID }, (err, User) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Successfully deleted User' });
  });
};
