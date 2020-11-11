basic.forever(function () {
    for (let Y = 0; Y <= 2; Y++) {
        for (let X = 0; X <= 2; X++) {
            if (2 - X == 2 || 2 + (Y - X) == 2) {
                led.plot(2 + X, 2 - (Y - X))
                led.plot(2 - X, 2 + (Y - X))
            }
        }
        basic.pause(200)
    }
})
