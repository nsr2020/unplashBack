const { scrapper } = require("./src/scrapper/scrapper")

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

//Aqui al no tener base de datos, sólo vamos a usar ruta y controlador

app.use("/api/v1/fotos/:palabra", async (req, res, next) =>{

    try {
        const {palabra} = req.params;
        const imgs = await scrapper(`https://unsplash.com/es/s/fotos/${palabra}`)
        return res.status(200).json(imgs)
    
    } catch (error) {
        return res.status(400).json("Not found")
    }

})

app.listen( 3000, () =>{
    console.log("Escuchando en http://localhost:3000");
} )

/* scrapper("https://unsplash.com/es/s/fotos/manzanas") */