let strip = neopixel.create(DigitalPin.P3, 5, NeoPixelMode.RGB)
strip.setBrightness(32)
basic.forever(function () {
    strip.showBarGraph(pins.analogReadPin(AnalogPin.P0), 1023)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
})
