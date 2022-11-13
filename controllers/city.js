const City = require('../models/City');

const controller = {
    create: async (req, res) => {
        try {
            let new_city = await City.create(req.body);
            res.status(201).json({
                id: new_city._id,
                success: true,
                message: 'City created',
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
    update: async (req, res) => {
        let { id } = req.params;
        try {
            let city = await City.findOneAndUpdate({_id: id}, req.body, {new: true})
            if(city){
                res.status(200).json({
                    success: true,
                    message: 'City updated',
                })
            }else{
                res.status(404).json({
                    success: false,
                    message: 'City not found',
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            })
        }
    },
    destroy: async (req, res) => {
        let { id } = req.params;

        try {
            let city = await City.findOneAndDelete({_id: id});
            if(city){
                res.status(200).json({
                    success: true,
                    message: 'City deleted',
                });
            }else{
                res.status(404).json({
                    success: false,
                    message: 'User not found',
                });
            }
    }catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            })
        }
    }
}


module.exports = controller