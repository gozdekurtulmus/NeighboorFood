const express = require('express')
const morgan = require('morgan')
const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController')
const app = express()
const userRouter = require('./routes/userRoutes')
const chefRouter = require('./routes/chefRoutes')
const reviewRouter = require('./routes/reviewRoutes')

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/v1/users', userRouter)
app.use('/api/v1/chefs', chefRouter)
app.use('/api/v1/reviews', reviewRouter)


app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

app.use(globalErrorHandler)

module.exports = app
