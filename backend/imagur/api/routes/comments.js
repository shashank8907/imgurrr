const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


const Product = require("../models/product");
const Comment = require("../models/comment");
router.get("/",(req, res, next) => {
    Comment.find()
      .select("product comment _id")
      .populate('product','name')
      .exec()
      .then(docs => {
        res.status(200).json({
          count: docs.length,
          comments: docs.map(doc => {
            return {
              _id: doc._id,
              product: doc.product,
              comment: doc.comment,
              request: {
                type: "GET",
                url: "http://localhost:3005/comments/" + doc._id
              }
            };
          })
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });

  router.post("/",(req, res, next) => {
    Product.findById(req.body.productId)
      .then(product => {
        if (!product) {
          return res.status(404).json({
            message: "Product not found"
          });
        }
        const comment = new Comment({
          _id: mongoose.Types.ObjectId(),
          comment: req.body.comment,
          product: req.body.productId
        });
        return comment.save();
      })
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Comment stored",
          createdComment: {
            _id: result._id,
            product: result.product,
            comment: result.comment
          },
          request: {
            type: "GET",
            url: "http://localhost:3000/orders/" + result._id
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

  router.get("/:commentId",(req, res, next) => {
    Comment.findById(req.params.commentId)
      .populate('product')
      .exec()
      .then(comment => {
        if (!comment) {
          return res.status(404).json({
            message: "Comment not found"
          });
        }
        res.status(200).json({
          comment: comment,
          request: {
            type: "GET",
            url: "http://localhost:3005/comments"
          }
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
  router.delete("/:commentId",(req, res, next) => {
    Order.remove({ _id: req.params.commentId })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Comment deleted",
          request: {
            type: "POST",
            url: "http://localhost:3005/comments",
            body: { productId: "ID", comment: "String" }
          }
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
  module.exports = router;