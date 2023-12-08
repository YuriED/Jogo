const keys = {
    a: {
        pressionada: false
    },
    d: {
        pressionada: false
    },
    w: {
        pressionada: false,
        hold: false
    },
    space: {
        pressionada: false,
        hold: false
    },
}

window.addEventListener("keydown", (e) => {
    let key = e.key;
    switch (key) {
        case "ArrowLeft":
        case "a":
            keys.a.pressionada = true;
            player.lastKeyPressionada = key

            break;
        case "ArrowRight":
        case "d":
            keys.d.pressionada = true;
            player.lastKeyPressionada = key

            break;
        case "ArrowUp":
        case "w":
            keys.w.pressionada = true;

            break;
        case "z":
        case " ":
            keys.space.pressionada = true;
            ;
            break;

        // Adicione outros casos conforme necessário para outras teclas
    }
})

window.addEventListener("keyup", (e) => {
    let key = e.key;
    switch (key) {
        case "ArrowLeft":
        case "a":
            keys.a.pressionada = false;

            break;
        case "ArrowRight":
        case "d":
            keys.d.pressionada = false;

            break;
        case "ArrowUp":
        case "w":
            keys.w.pressionada = false;
            keys.w.hold = false
            break;
        case "z":
        case " ":
            keys.space.pressionada = false;
            keys.space.hold = false
            break;

        // Adicione outros casos conforme necessário para outras teclas
    }
});

function handleControls() {
    movement()
    attack()
    function movement() {
        player.velocidade.x = 0

        if (keys.a.pressionada && ["a", "ArrowLest"].includes(player.lastKeyPressionada)) {
            player.velocidade.x = -1.5 * 3.4

        }


        if (keys.d.pressionada && ["d", "ArrowRight"].includes(player.lastKeyPressionada)) {
            player.velocidade.x = 1.5 * 3.4

        }

        if (keys.w.pressionada && !keys.w.hold) {
            player.jump()
            keys.w.hold = true

        }



    }
    function attack() {
        if (keys.space.pressionada && !keys.space.hold) {
            player.attack()
            keys.space.hold = true

        }


    }
}
