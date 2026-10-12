import {game} from "../core/game.js";

(function(){
    const respA2 = 1500;

    document.getElementById("btn-resp-a2").addEventListener("click", () => {
        if(document.getElementById("resp-a2").value === "1500"){
            game.solve("a2");
        }
    })
})()