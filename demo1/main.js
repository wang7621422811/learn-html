/**
 * Created by Administrator on 2016/8/9.
 */
(function () {
    var cardA = document.querySelector("#container .card_a");
    var cardB = document.querySelector("#container .card_b");
    var container = document.querySelector("#container");
    var playing = false;
    var aVisible = false;

    function showA() {
        if (!aVisible) {
            cardA.style.display = "block";
            cardB.style.display = "none";
            aVisible = true;
        }
    }

    function showB() {
        if (aVisible) {
            cardA.style.display = "none";
            cardB.style.display = "block";
            aVisible = false;
        }
    }

    function turnFromTo(from, to) {
        if (!playing) {
            playing = true;
            var widthPrecent = 100;
            var speed = widthPrecent / 20;
            var id = setInterval(function () {
                widthPrecent -= speed;
                from.style.width = widthPrecent + "%";
                if (widthPrecent <= 0) {
                    clearInterval(id);
                    if (aVisible) {
                        showB();
                    } else {
                        showA();
                    }
                    to.style.width = "0";
                    id = setInterval(function () {
                        widthPrecent += speed;
                        if (widthPrecent >= 100) {
                            widthPrecent = 100 + "%";
                            clearInterval(id);
                            playing = false;
                        }
                        to.style.width = widthPrecent + "%";
                    }, 20);
                }
            }, 20);
        }
    }

    function turnToA() {
        turnFromTo(cardB, cardA);
    }

    function turnToB() {
        turnFromTo(cardA, cardB);
    }

    function init() {
        showA();
        container.onclick = function (event) {
            if (aVisible) {
                turnToB();
            }
            else {
                turnToA();
            }
        }
    }

    init();
})();