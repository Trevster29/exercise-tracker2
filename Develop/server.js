const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const cors = require('cors')
const mongoose = require('mongoose')
let uri = 'mongodb+srv://Fartsmcgee29:Fartsmcgee29@cluster0.w3673.mongodb.net/db1?retryWrites=true&w=majority'
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});

app.use(cors())

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(_dirname + '/views/index.html')
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log("Your app is listening on the port") + listener.address().port
})

let exerciseSessionSchema = new mongoose.Schema({
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: String
})

let userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    log: [exerciseSessionSchema]
})

let Session = mongoose.model('Session', exerciseSessionSchema)
let User = mongoose.model('User', userSchema)

app.post('/api/exercise/new-user', bodyParser.urlencoded({extended: false}), (request, response) => {
    console.log(request.body)

    response.json({})
})