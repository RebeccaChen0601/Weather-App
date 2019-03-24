const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true //make sure when mongoose interacts with mongodb, index are created, allowing developers to quickly access the data 
})

const Task = mongoose.model('Task', { 
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
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