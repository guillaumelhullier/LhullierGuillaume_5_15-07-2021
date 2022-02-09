//Appel  de l'API
const url = "http://localhost:3000/api/products";

fetch(url)
  .then((reponse) => reponse.json())
  .then((reponse2) => {
    console.table(reponse2);
  })
  .catch((err) => console.log(" Erreur :" + err));

console.log(window);
