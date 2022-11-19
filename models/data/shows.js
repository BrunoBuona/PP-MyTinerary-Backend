const showList = [
    {
        hotelId: '636f5e1a6db86c1062908d5b',
        name: 'Santa Cecilia Music Series',
        description: 'With the aim of valuing the memory of the Patron Saint of the city, the Diocese and Music.',
        photo: 'https://elretratodehoy.com.ar/wp-content/uploads/2021/11/santa-Cecilia_opt-1.jpg',
        price: 599,
        date: new Date("05-12-2021"),
        userId: '636e884578fa70e8f8c471f6',
    },
    {
        hotelId: '636f5e1a6db86c1062908d5b',
        name: 'Annual Exhibition of Cactus and Succulents Mar del Plata',
        description: 'Space to appreciate, learn about and enjoy these specimens of the Cactus and Succulent families from collectors and growers in the city.',
        photo: 'https://media.ahora.com.ar/p/47fa8e9a5fedfe567b12684669bd3be3/adjuntos/224/imagenes/001/239/0001239266/1200x675/smart/cactus.jpg',
        price: 399,
        date: new Date("05-12-2021"),
        userId: '636e884578fa70e8f8c471f6',
    },
    {
        hotelId: '636f5e1a6db86c1062908d5d',
        name: 'Priority entrance to the Xtracold Icebar in Amsterdam',
        description: 'Grab a seat at the coolest bar in Amsterdam with skip-the-line entry to the Xtracold Icebar, where everything, including the glasses, is made entirely of ice. First relax in the sophisticated and warm lounge, then don a thermal vest for an arctic drinking adventure right in the heart of the Dutch capital. You will be able to admire the ice sculptures illuminated by colorful lights while sipping three included drinks in the "relaxing" atmosphere.',
        photo: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/dc/24/56.jpg',
        price: 4200,
        date: new Date("05-12-2021"),
        userId: '636e884578fa70e8f8c471f8',
    },
    {
        hotelId: '636f5e1a6db86c1062908d5d',
        name: 'Become a Dutch art photoshoot in Amsterdam',
        description: 'Take home a photographic souvenir of your Amsterdam vacation when you take part in this photo session with a professional photographer. Choose from some of the most famous Dutch paintings and dress up in a costume to mimic the look of your photo shoot. Walk away with two prints, one enlargement, and an email with your original photo files.',
        photo: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/45/90.jpg',
        price: 199,
        date: new Date("05-12-2021"),
        userId: '636e884578fa70e8f8c471f8',
    },
    {
        hotelId: '636f5e1a6db86c1062908d5c',
        name: 'Sanja Matsuri',
        description: 'Sanja Matsuri is one of three wonderful summer festivals held in Tokyo. It takes place at the end of May, and celebrates the founding of the Sensoji temple in Asakusa.',
        photo: 'https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2016/05/24/5fa2cebf6287f.jpeg',
        price: 1299,
        date: new Date("05-12-2021"),
        userId: '636e884578fa70e8f8c471f5',
    },
    {
        hotelId: '636f5e1a6db86c1062908d5c',
        name: 'Chiyoda Cherry Blossom Matsuri',
        description: 'Yotsuya and Iidabashi are areas that developed around the outer moat of the imperial palace. Nearby, in Kagurazaka, there is an old red light district with a photogenic atmosphere that evokes old Tokyo. The cobbled streets of yesteryear are preserved and there are restaurants with a long tradition with geishas, ​​as well as picturesque old cafes in buildings of historical value.',
        photo: 'https://awaken.com/wp-content/uploads/2019/06/25546580673_7a086ab421_o-770x513.jpg',
        price: 1999,
        date: new Date("05-12-2021"),
        userId: '636e884578fa70e8f8c471f5',
    },
]


require("dotenv").config()
require("../../config/database")
const Show = require("../Show")

showList.forEach(e=>{
    Show.create({
        hotelId: e.hotelId,
        name: e.name,
        description: e.description,
        photo: e.photo,
        price: e.price,
        date: e.date,
        userId: e.userId,
    })
    
})