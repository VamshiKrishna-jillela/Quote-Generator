let quotes=["“The desire that guides me in all I do is the desire to harness the forces of nature to the service of mankind.”","“I want to realize brotherhood or identity not merely with the beings called human, but I want to realize identity with all life, even with such beings as crawl on earth.”","“When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.”","“It is said that the forest has a certain limit if you look straight ahead, but the sides are boundless.” ","“You will find something more in woods than in books. Trees and stones will teach you that which you can never learn from masters.”","“We do not see nature with our eyes, but with our understandings and our hearts.”","“Life is full of beauty. Notice it. Notice the bumble bee, the small child, and the smiling faces. Smell the rain, and feel the wind. Live your life to the fullest potential, and fight for your dreams.”"]

let authors=["— Ralph Waldo Emerson", "— Nikola Tesla","— Mahatma Gandhi","— John Lennon", "— Riccardo Bozzi","— St. Bernard","— William Hazlitt"]

let quote=document.querySelector(".quote");
let author=document.querySelector(".author");
let btn=document.querySelector("#new-quote");
btn.addEventListener("click", change);

function change(params) {
   
   let idx=Math.floor(Math.random()*authors.length);
   console.log(quote);
   quote.innerHTML=quotes[idx];
   author.innerHTML=authors[idx];
}
