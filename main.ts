input.onButtonPressed(Button.A, function () {
    出拳 = 1
    radio.sendNumber(1)
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    出拳 = 3
    radio.sendNumber(3)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    出拳 = 2
    radio.sendNumber(2)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
let 出拳 = 0
radio.setGroup(87)
出拳 = 0
