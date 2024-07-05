import { getAllArticles } from "./modules/articles.js";
let objData = await getAllArticles();
console.log(objData[0]["abrigo"]);