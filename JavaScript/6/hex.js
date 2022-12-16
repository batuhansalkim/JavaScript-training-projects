var arabalar = [
    {
        name : "Bmw 418d",
        image : "img/bmw.jpg",
        link : "https://www.arabam.com/ilan/galeriden-satilik-bmw-4-serisi-418d-gran-coupe-prestige/2017-bmw-4-serisi-gran-coupe-4-18d-2-0-150hp-prestige-boyasiz/21509200"
    },
    {
        name: "Mazda CX-3",
        image: "img/mazda.jpg",
        link: "https://www.arabam.com/ilan/galeriden-satilik-bmw-4-serisi-418d-gran-coupe-prestige/2017-bmw-4-serisi-gran-coupe-4-18d-2-0-150hp-prestige-boyasiz/21509200"
    }, 
    {
        name: "Volvo S60",
        image: "img/volvo.jpg",
        link: "https://www.arabam.com/ilan/galeriden-satilik-bmw-4-serisi-418d-gran-coupe-prestige/2017-bmw-4-serisi-gran-coupe-4-18d-2-0-150hp-prestige-boyasiz/21509200"
    }, 
    {
        name: "Skoda Superb",
        image: "img/skoda.jpg",
        link: "https://www.arabam.com/ilan/galeriden-satilik-bmw-4-serisi-418d-gran-coupe-prestige/2017-bmw-4-serisi-gran-coupe-4-18d-2-0-150hp-prestige-boyasiz/21509200"
    },

]

var index = 1;

document.querySelector("fas fa-arrow-circle-left").addEventListener("click",function(){
    index--;
})



document.querySelector("fas fa-arrow-circle-right").addEventListener("click", function () {
    index++;
})


document.querySelector(".card-title").textContent = arabalar[index].name;

document.querySelector(".card-img-top").setAttribute("src",arabalar[index].image);

document.querySelector(".card-link").setAttribute("href",arabalar[index].link);














