const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    thoughts: [thoughtSchema],
    friends: [userSchema],
  },
  {
    toJSON: {
      //getters: true,
      virtuals: true,
    },
  }
);
userSchema.virtual('friendCount').
  get(function() {return $(this.friends.count)});
  
const user = model('user', userSchema);

module.exports = user;
