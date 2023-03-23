radio.onReceivedNumber(function (receivedNumber) {
    他出拳 = receivedNumber
    while (出拳 == 0) {
        basic.showString("?")
    }
    if (他出拳 == 出拳) {
        basic.showIcon(IconNames.Asleep)
        basic.pause(3000)
        開始()
    } else if (出拳 == 1 && 他出拳 == 3) {
        basic.showIcon(IconNames.Happy)
        basic.pause(3000)
        開始()
    } else if (出拳 == 2 && 他出拳 == 1) {
        basic.showIcon(IconNames.Happy)
        basic.pause(3000)
        開始()
    } else if (出拳 == 3 && 他出拳 == 2) {
        basic.showIcon(IconNames.Happy)
        basic.pause(3000)
        開始()
    } else if (他出拳 == 3 && 出拳 == 2) {
        basic.showIcon(IconNames.Sad)
        basic.pause(3000)
        開始()
    } else if (他出拳 == 2 && 出拳 == 1) {
        basic.showIcon(IconNames.Sad)
        basic.pause(3000)
        開始()
    } else if (他出拳 == 1 && 出拳 == 3) {
        basic.showIcon(IconNames.Sad)
        basic.pause(3000)
        開始()
    }
})
function 開始 () {
    他出拳 = 0
    出拳 = 0
}
input.onButtonPressed(Button.A, function () {
    if (出拳 == 0) {
        出拳 = 1
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        radio.sendNumber(1)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (出拳 == 0) {
        出拳 = 3
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        radio.sendNumber(3)
    }
})
input.onButtonPressed(Button.B, function () {
    if (出拳 == 0) {
        出拳 = 2
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        radio.sendNumber(2)
    }
})
let 出拳 = 0
let 他出拳 = 0
radio.setGroup(87)
開始()
