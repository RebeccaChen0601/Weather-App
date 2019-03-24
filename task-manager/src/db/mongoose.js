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
    name: 'Rebecca',
    age: 27
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error', error)
})

const Task = mongoose.model('Task', { 
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        validate(value) {
            if(!value) {
                throw new Error('Task must be completed before publishing')
            }
        }
    }
})

const new_task = new Task({
    description: 'learn',
    completed: true
})

new_task.save().then(() => {
    console.log(new_task)
}).catch((error) => {
    console.log('Error', error)
})