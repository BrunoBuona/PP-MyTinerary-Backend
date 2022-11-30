const comments = [
    {
        showId: '6385246b0670b20696fb80c4',
        userId: '6383989d7bc2ca69185b973a',
        date: '2020-05-20T00:04:00.000Z',
        comment: 'This is a comment 1'
    },
    {
        showId: '6385246b0670b20696fb80c4',
        userId: '6383989d7bc2ca69185b973a',
        date: '2020-05-20T00:06:00.000Z',
        comment: 'This is a comment 2'
    },
    {
        showId: '6385246b0670b20696fb80c4',
        userId: '6383989d7bc2ca69185b973a',
        date: '2020-06-20T00:07:00.000Z',
        comment: 'This is a comment 3'
    },
]


require('dotenv').config()
require('../../config/database')
const Comment = require('../Comment')

comments.forEach(e=> {
    Comment.create({
        showId: e.showId,
        userId: e.userId,
        date: e.date,
        comment: e.comment,
    })
})
