const cities = [
    {

        name: "Roma",
        continent: "Europe",
        photo: "https://content.r9cdn.net/rimg/dimg/7e/77/5158e754-city-25465-1525fd406f5.jpg?width=1750&height=1000&xhint=1208&yhint=1108&crop=true",
        population: 38000000,
        userId: "636e884578fa70e8f8c471f7"
    },
    {
        name: "París",
        continent: "Europe",
        photo: "https://viajes.nationalgeographic.com.es/medio/2022/07/13/paris_37bc088a_1280x720.jpg",
        population: 19000000,
        userId: "636e884578fa70e8f8c471f7"
    },
    {
        name: "Buenos Aires",
        continent: "America",
        photo: "https://www.buenosaires.gob.ar/sites/gcaba/files/al_avenida_9_dejulio.jpg",
        population: 10000000,
        userId: "636e884578fa70e8f8c471f7"
    },
    {
        name: "Barcelona",
        continent: "Europe",
        photo: "https://img2.rtve.es/imagenes/ciudades-para-siglo-xxi-barcelona-ciudad-vertebrada-2/1561977573130.jpg",
        population: 18500000,
        userId: "636e884578fa70e8f8c471f8"
    },
    {
        name: "Estambul",
        continent: "Europe",
        photo: "https://elviajerofeliz.com/wp-content/uploads/2019/05/Que%CC%81-ver-en-Estambul.jpg",
        population: 13400000,
        userId: "636e884578fa70e8f8c471f8"
    },
    {
        name: "Londres",
        continent: "Europe",
        photo: "https://elviajerofeliz.com/wp-content/uploads/2017/10/Rutas-por-Londres.jpg",
        population: 19600000,
        userId: "636e884578fa70e8f8c471f8"
    },
    {
        name: "Nueva York",
        continent: "America",
        photo: "https://elviajerofeliz.com/wp-content/uploads/2017/08/Qu%C3%A9-ver-en-Nueva-York-5-cosas-que-no-te-puedes-perder.gif",
        population: 14000000,
        userId: "636e884578fa70e8f8c471f5"
    },
    {
        name: "Madrid",
        continent: "Europe",
        photo: "https://www.rookieintown.com/wp-content/uploads/zonas-barrios-madrid.jpg",
        population: 4900000,
        userId: "636e884578fa70e8f8c471f5"
    },
    {
        name: "Amsterdam",
        continent: "Europe",
        photo: "https://media.traveler.es/photos/6231abc7d03e1c5549e648ca/16:9/w_2560%2Cc_limit/The%2520Best%2520Places%2520for%2520Female%2520Solo%2520Travelers_Amsterdam_GettyImages-923546342.jpg",
        population: 17000000,
        userId: "636e884578fa70e8f8c471f5"
    },
    {
        name: "Mar del Plata",
        continent: "America",
        photo: "https://revistauncamino.com.ar/wp-content/uploads/2018/12/portada-Mar-del-Plata-la-hisotria-de-la-feliz-scaled.jpg",
        population: 4600000,
        userId: "636e884578fa70e8f8c471f6"
    },
    {
        name: "Tokio",
        continent: "Asia",
        photo: "https://media.admagazine.com/photos/618a5ef1a8ad6c5249a74d1d/4:3/w_2000,h_1500,c_limit/91683.jpg",
        population: 10440000,
        userId: "636e884578fa70e8f8c471f6"
    },
    {
        name: "Florencia",
        continent: "Europe",
        photo: "https://viajes.nationalgeographic.com.es/medio/2018/02/27/mapa-florencia__1280x720.jpg",
        population: 5125700,
        userId: "636e884578fa70e8f8c471f6"
    }
]

require('dotenv').config()
require('../../config/database')
const City = require('../City')

cities.forEach(e=> {
    City.create({
        name: e.name,
        continent: e.continent,
        photo: e.photo,
        population: e.population,
        userId: e.userId
    })
})
