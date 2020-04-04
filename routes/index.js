const express = require('express');
const router = express.Router();
const mysql = require('./method.js');
const { check, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");

/* удалить запись */
router.post('/item/:id', function (req, res, next) {
  mysql.deletePost(req.params.id, function (error, deleteBody) {
    if (error) { return next(error); }
    res.json(deleteBody);
  });
});

/* редактировать запись */
router.post('/item/:id/edit', function (req, res, next) {
  mysql.editPost(req.body, req.params.id, function (error, editBody) {
    if (error) { return next(error); }
    res.json(editBody);
  });
});

/* вернуть все записи */
router.get('/all', function (req, res, next) {
  mysql.getAllItems(function (error, news) {
    if (error) { return next(error); }
    res.json(news);
  });
});

/* вернуть запись по id*/
router.get('/:id', function (req, res, next) {
  mysql.getItemById(req.params.id, function (error, rows) {
    if (error) { return next(error); }
    res.json(rows);
  });
});

/* сохранить запись */
router.post('/save', function (req, res, next) {
  mysql.addPost(req.body, function (error, postBody) {
    if (error) { return next(error); }
    res.json(postBody);
  });
});


module.exports = router;
