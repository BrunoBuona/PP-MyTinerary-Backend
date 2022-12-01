const { query } = require('express');
const Comment = require('../models/Comment')

const controller = {
    create: async (req, res) => {
        let { user } = req;
        try {
            let new_comment = await Comment.create({
                    userId: user.id,
                    showId: req.body.showId,
                    date: req.body.date,
                    comment: req.body.comment
            })
            res.status(200).json({
                response: new_comment,
                success: true,
                message: 'The Comment was successfully created.',
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
    read: async (req, res) => {
        let { showId } = req.params
        let { date } = req.query
        if (req.query.showId) {
            console.log(req.query)
            showId = { showId: req.query.showId}
        }
        if (req.query.date) {
            date = { date: req.query.date }
        }
        try {
            let comments = await Comment.find(showId).sort({ date: -1 });
            if (comments.length >= 1) {
                res.status(200).json({
                    response: comments,
                    success: true,
                    message: 'Comments successfully founded.',

                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'No Comments founded',
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },

}
module.exports = controller;