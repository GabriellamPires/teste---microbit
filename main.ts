let Tocar = false
let cont2 = 0
let cont1 = 0
input.onPinPressed(TouchPin.P0, function () {
    Tocar = false
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("Prepare-se!")
    basic.pause(randint(1000, 5000))
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    if (Tocar == false) {
        cont2 += 1
        Tocar = true
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Tocar == false) {
        cont1 += 1
        Tocar = true
        basic.showLeds(`
            . . . . .
            # # . # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (cont1 == 5) {
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.showString("P1 ganhou")
        cont1 = 0
        cont2 = 0
    } else if (cont2 == 5) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.showString("P2 ganhou")
        cont1 = 0
        cont2 = 0
    }
})
