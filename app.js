var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
let appname = 'booknow';
var apiRouter = require('./routes/reservation');
var mongoose = require('mongoose');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/'+appname)));
app.use('/', express.static(path.join(__dirname, 'dist/'+appname)));
app.use('/api', apiRouter);

// catch 404 and forward to error handleraa
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

//mongoose
mongoose.connect('mongodb://dami:damidami1@ds125602.mlab.com:25602/dami_mean_test', { promiseLibrary: require('bluebird') })
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));


module.exports = app;