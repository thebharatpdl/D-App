const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: {
        type: String,
        require: true,

    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,

    },
    gender:
    {
        type: String,
        require: true,
    },
    dateOfBirth: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,

    },
    type: {
        type: String,
        require: true,
    },
    likedProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    receivedLikes: [{
        userId: {
            type: monggode.Schema.Types.ObjectId,
            rer: "User",
            require: true
        },
        image: {
            type: String,
            require: true,
        },
        comment: {
            type: String,
        }
    },
    ],
    matches: [{
        type: mongoose.Schema.type.ObjectId,
        ref: "User",
    }],
    blockUser:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",

    }]
}
);
const User=mongoose.model('User',userSchema);
module.exports=User;