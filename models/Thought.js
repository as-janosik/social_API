const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now
      //Use a getter method to format the timestamp on query
    },
    username: [{ 
      type: Schema.Types.ObjectId, 
      ref: 'user'
    }],//tie this to the user who created the thought?

    reactions:[reactionSchema]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
userSchema.virtual('reactionCount').
  get(function() {return $(this.reactions.count)});

module.exports = thoughtSchema;
