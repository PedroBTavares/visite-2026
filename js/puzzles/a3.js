import { game } from "../core/game.js";

(function () {
    document.querySelectorAll(".led").forEach(led => {
        const red = "rgb(255, 0, 0)";
        const blue = "rgb(0, 0, 255)";
        const green = "rgb(0, 255, 0)";
        const yellow = "rgb(255, 255, 0)";
        led.style.backgroundColor = red;
        led.addEventListener("click", () => {
            switch (led.style.backgroundColor) {
                case red:
                    led.style.backgroundColor = blue;
                    break;
                case blue:
                    led.style.backgroundColor = green;
                    break;
                case green:
                    led.style.backgroundColor = yellow;
                    break;
                case yellow:
                    led.style.backgroundColor = red;
                    break;
                default:
                    led.style.backgroundColor = red;
                    break;
            }

            if (
                document.getElementById("led1").style.backgroundColor == green &&
                document.getElementById("led2").style.backgroundColor == blue &&
                document.getElementById("led3").style.backgroundColor == yellow &&
                document.getElementById("led4").style.backgroundColor == red &&
                document.getElementById("led5").style.backgroundColor == blue
            ) {
                game.solve("a3");
                document.getElementById("figure3").style.display = "block";
            }
        })
    })
})()