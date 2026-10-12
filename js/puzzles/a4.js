import {game} from "../core/game.js";

(function(){
    const respA4 = ["sol", "guarda-chuva", "gota", "passaro", "balao"];
    
    function clear(text){
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    document.getElementById("btn-resp-a4").addEventListener("click", () => {
        if(
            clear(document.getElementById("simbol1").value) === respA4[0] &&
            clear(document.getElementById("simbol2").value) === respA4[1] &&
            clear(document.getElementById("simbol3").value) === respA4[2] &&
            clear(document.getElementById("simbol4").value) === respA4[3] &&
            clear(document.getElementById("simbol5").value) === respA4[4]
        ){
            game.solve("a4");
        }
    })
})()