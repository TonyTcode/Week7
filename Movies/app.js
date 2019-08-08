const express =require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const mustacheExpress = require('mustache-express')

const VIEWS_PATH = path.join(__dirname, '/views')

app.use('/css',express.static("css"))

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('views',VIEWS_PATH)
app.set('view engine','mustache')


app.use(express.urlencoded())
app.use(bodyParser.urlencoded())

let movieList = []

app.get('/good-movies',(req,res) => {
    res.render('index', {movieList: movieList})
})

app.post('/good-movies',(req,res) => {
    let title = req.body.title
    let description = req.body.description
    let genre = req.body.genre
    let posterUrl = req.body.posterUrl

    let movies = {title: title, description: description, genre: genre, posterUrl: posterUrl}
    movieList.push(movies)

    res.render('index', {movieList: movieList})
})




app.listen(3000,() => {
    console.log("Server is running")
})