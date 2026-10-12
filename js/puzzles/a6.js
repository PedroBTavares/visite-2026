import {game} from "../core/game.js";

(function(){
    const resp4 = "74638"
    document.getElementById("btn-resp-a6").addEventListener("click", () => {
        if(document.getElementById("resp-a6").value === resp4){
            game.solve("a6");
        }
    })
})()