const Itinerary = require('../models/Itinerary')

const controller = {
    readCI: async(req,res)=>{
        let query = {};
        if(req.query.userId){
            query = {userId: req.query.userId};
        }
        try{
            let itinerary = await Itinerary.find(query)
            if(itinerary){
            res.status(200).json({
                response: itinerary,
                success: true,
                message: 'Itinerary Founded'
            })}else{
                res.status(404).json({
                    success: false,
                    message: 'Itinerary not Founded'
                })
            }
        }catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
    }
}}

module.exports = controller