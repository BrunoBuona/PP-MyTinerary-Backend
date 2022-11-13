const { query } = require('express');
const Hotel = require('../models/Hotel')

const controller = {

    create: async (req,res) => {
        try{
            let new_hotel = await Hotel.create(req.body);
            res.status(201).json({
                id: new_hotel._id,
                success: true,
                message: 'the hotel was successfully created',
            });
        }catch(error) {
            res.status(400).json({
                success: false,
                message: 'error.message',
            });
        }
    },
    update: async (req,res) => {
        let {id} = req.params
        try{
            let oneU = await Hotel.findOneAndUpdate({_id: id}, req.body, {new: true});
            if(oneU){
                res.status(200).json({
                    success: true,
                    message: 'the hotel was successfully updated',
                })
            }else{
                res.status(404).json({
                    success: false,
                    message: 'the hotel was not found',
                })
            }
        }catch(error) {
            res.status(400).json({
                success: false,
                message: 'error.message',
            });
        }
    },
    read: async (req,res) => {
        let query = {}
        let order = {}
        if(req.query.name){
            query = {name: {"$regex": req.query.name}} 
        }
        if(req.query.order){
            order = {name: req.query.order}
        }
        console.log(req.query)
        try{
            let all = await Hotel.find(query).sort(order);
            if(all){
                res.status(200).json({
                    response: all,
                    success: true,
                    message: 'the hotel was successfully found',
       
                })
            }else{
                res.status(404).json({
                    success: false,
                    message: 'the hotel was not found',
                })
            }
        }catch(error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
    destroy: async function (req, res) {
        let {id} = req.params;
        try {
            let one = await Hotel.findOneAndDelete({ _id: id});
            if (one) {
                res.status(200).json({
                    id: one._id,
                    success: true,
                    message: 'the hotel was successfully deleted',
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: 'the hotel was not found',
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: 'error.message',
            });
        }
    }
}
module.exports = controller;