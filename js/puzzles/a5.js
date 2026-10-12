import {game} from "../core/game.js";

(function(){
    document.getElementById("btn-resp-a5").addEventListener("click", () => {
        if(document.getElementById("resp-a5").value === "58728"){
            game.solve("a5");
        }
    })
})()