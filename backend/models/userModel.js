import mongoose, { Schema } from 'mongoose';

const schema = mongoose.Schema;

export const PlayerSchema = new Schema({
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
