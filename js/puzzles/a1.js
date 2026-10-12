import {game} from "../core/game.js";

(function (){

const respA1 = "ehvpe";

document.getElementById("btn-resp-a1").addEventListener("click", () => {
    if(document.getElementById("resp-a1").value.toLowerCase().trim() === respA1){
        game.solve("a1");
    }
});

})()