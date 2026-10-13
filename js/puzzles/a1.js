import {game} from "../core/game.js";

(function (){

const respA1 = "cagta";

document.getElementById("btn-resp-a1").addEventListener("click", () => {
    if(document.getElementById("resp-a1").value.toLowerCase().trim() === respA1){
        game.solve("a1");
        document.getElementById("figure1").style.display = "block";
    }
});

})()