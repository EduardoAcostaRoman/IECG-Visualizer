import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastNameP: {
    type: String,
    required: true,
  },
  lastNameM: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
