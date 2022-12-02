let reactions = [
    {
        "itineraryId": "6385245e0670b20696fb809c",
        "name": "like",
        "icon": "https://cdn-icons-png.flaticon.com/512/889/889140.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/880/880554.png",
        "userId": []
    },
    {
        "itineraryId": "6385245e0670b20696fb809c",
        "name": "not-like",
        "icon": "https://cdn-icons-png.flaticon.com/512/889/889220.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/4838/4838150.png",
        "userId": []
    },
    {
        "itineraryId": "6385245e0670b20696fb809c",
        "name": "love",
        "icon": "https://cdn-icons-png.flaticon.com/512/833/833472.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/535/535285.png",
        "userId": []
    },
    {
        "itineraryId": "6385245e0670b20696fb809c",
        "name": "surprise",
        "icon": "https://cdn-icons-png.flaticon.com/512/3129/3129285.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/2958/2958976.png",
        "userId": []
    }
]

require('dotenv').config()
require('../../config/database')
const Reaction = require('../Reactions')

reactions.forEach(elemento => {
    Reaction.create({
        itineraryId: elemento.itineraryId,
        name: elemento.name,
        icon: elemento.icon,
        iconBack: elemento.iconBack,
        userId: elemento.userId
    })
})