const Reaction = require('../models/Reactions')

const controller = {
    create: async (req,res) => {
        try{
            let new_reaction = await Reaction.create(req.body);
            res.status(201).json({
                id: new_reaction._id,
                success: true,
                data: new_reaction,
                message: 'The reaction was successfully created',
            })
        }catch(error) {
            res.status(400).json({
                success: false,
                message: error.message,
            })
        }
    },

    updateReaction: async (req, res) => {
        let query = {};
        let Id = req.user.id
        if (req.query.itineraryId) {
            query = {
                itineraryId: req.query.itineraryId
            };
        }
        if (req.query.name) {
            query = {
                ...query,
                name: req.query.name
            };
        }
        try {
            let reaction = await Reaction.findOne(query)
            if (reaction) {
                if (reaction.userId.includes(Id)) {
                    await Reaction.findOneAndUpdate({ _id: reaction._id }, { $pull: { userId: Id } }, { new: true })
                    res.status(200).json({
                        name: reaction.name,
                        message: `Event dis${reaction.name}`,
                        success: true,
                        reactioned: false,
                    })
                } else {
                    await Reaction.findOneAndUpdate({ _id: reaction._id }, { $push: { userId: Id } }, { new: true })
                    res.status(200).json({
                        name: reaction.name,
                        message: `Event ${reaction.name}`,
                        success: true,
                        reactioned: true,
                    })
                }
            } else {
                res.status(404).json({
                    message: `The reaction doesn´t exist in the itinerary`,
                    success: false
                })
            }
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },

    read: async (req, res) => {
        let query = {};
        if (req.query.itineraryId) {
            query = { itineraryId: req.query.itineraryId };
        }
        try {
            console.log(query)
            let reactions = await Reaction.find(query).populate({ path: 'userId', select: 'name lastName photo' })
            if (reactions.length > 0) {

                let lengthOfReactions = {}
                reactions.forEach(reaction => lengthOfReactions[reaction.name] = reaction.userId.length)

                res.status(200).json({
                    lengthOfReactions,
                    data: reactions,
                    id: req.query.itineraryId,
                    success: true,
                    message: `All the reactions of the itineraryId ${req.query.itineraryId}`,
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'No reactions found',
                    data: [],
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
                data: error
            })
        }
    }
}

module.exports = controller