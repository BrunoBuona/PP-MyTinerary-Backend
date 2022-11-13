const Show = require('../models/Show')

const controller = {

    create: async (req,res) => {
        try{
            let new_show = await Show.create(req.body);
            res.status(201).json({
                id: new_show._id,
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
            let oneU = await Show.findOneAndUpdate({_id: id}, req.body, {new: true});
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
}
module.exports = controller;