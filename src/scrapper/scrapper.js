const { default: puppeteer } = require("puppeteer")

const scrapper = async(url) =>{

    const arrayImgs = [];
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()
    
     await page.goto(url)

     const divMorZf = await page.$$("div.MorZF")
     
     //Random para las imagenes usando incio y final
     let inicio = Math.floor(Math.random() * divMorZf.length)
     if (inicio >= divMorZf.length - 20){
        inicio-= 20;  
     }

     let final = inicio + 20;
     
     for (let i = inicio; i < final; i += 2) {
        const div = divMorZf[i];
       const img = await div.$eval("img", (el) => el.src)
       
        arrayImgs.push(img)
     }
     console.log(arrayImgs);
     browser.close()
     return arrayImgs;

}   

module.exports = {scrapper}