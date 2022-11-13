const Itinerary = require('../models/Itinerary')

const controller = {
    create: async (req, res) => {
        try {
            let new_itinerary = await Itinerary.create(req.body);
            res.status(201).json({
                id: new_itinerary._id,
                success: true,
                message: 'Itinerary created',
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
            let itinerary = await Itinerary.findOneAndUpdate({_id: id}, req.body, {new: true})
            if(itinerary){
                res.status(200).json({
                    success: true,
                    message: 'Itinerary updated',
                })
            }else{
                res.status(404).json({
                    success: false,
                    message: 'Itinerary not found',
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
            let itinerary = await Itinerary.findOneAndDelete({_id: id});
            if(itinerary){
                res.status(200).json({
                    success: true,
                    message: 'Itinerary deleted',
                });
            }else{
                res.status(404).json({
                    success: false,
                    message: 'Itinerary not found',
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