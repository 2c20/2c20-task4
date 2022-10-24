let count = 0
input.onButtonPressed(Button.B, function () {
    while (count <= 4) {
        led.plot(count, 0)
    }
    basic.pause(500)
    basic.clearScreen()
    count += 1
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(count, 0)
        basic.pause(500)
        count += 1
        if (count <= 4) {
            count = 0
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(count, 0)
        basic.pause(500)
        count += 1
    }
    if (count <= 4) {
        count = 0
    }
})
