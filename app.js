const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const stylus = require('stylus');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');

const indexRouter = require('./routes/index');
const addRouter = require('./routes/add');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(expressLayouts);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(stylus.middleware({
  src: path.join(__dirname, '/stylus'),
  dest: path.join(__dirname, '/public/stylesheets'),
  force: true,
  compress: true
}));

app.use('/api/search', indexRouter);
app.use('/add', addRouter);

if (process.env.NODE_ENV == "production") {
  app.use('/', express.static(path.join(__dirname, 'dist', 'angular')));
  app.use('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'angular', 'index.html'));
  })
}


// catch 404 and forward to error handler
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
  res.json('error');
});

module.exports = app;
