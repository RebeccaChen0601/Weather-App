const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true //make sure when mongoose interacts with mongodb, index are created, allowing developers to quickly access the data 
})

const User = mongoose.model('User', {
    name : {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password : {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Do not make password your password')
            }
        }
    },
    age: {
        type: Number,
        default : 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be positive')
            }
        }
    }
})

const me = new User({
    name: 'Adam   ',
    email: 'dfgsdfgsf@fgffd.com     ',
    password: 'password',
    age: 27
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error', error)
})
