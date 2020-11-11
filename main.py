def on_forever():
    for Y in range(3):
        for X in range(3):
            if 2 - X == 2 or 2 + (Y - X) == 2:
                led.plot(2 + X, 2 - (Y - X))
                led.plot(2 - X, 2 + (Y - X))
        basic.pause(200)
basic.forever(on_forever)
