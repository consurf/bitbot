controller.onShieldEvent(ControllerShieldEvent.Absent, function () {
	
})
controller.onShieldEvent(ControllerShieldEvent.Present, function () {
	
})
input.onButtonPressed(Button.A, function () {
    Food += 40
    screen().fill(15)
    bitmap = bmp`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 5 5 . . 
        . . . . . . . . . . 5 5 5 . . . 
        . . . . . . . 5 5 5 5 2 5 . . . 
        . . . . . 5 5 5 2 5 5 5 . . . . 
        . . 4 4 5 5 2 5 5 5 2 5 . . . . 
        . . . 4 4 5 5 5 5 5 5 . . . . . 
        . . . . 4 4 5 5 2 5 5 . . . . . 
        . . . . . 4 4 5 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    screen().drawTransparentBitmap(bitmap, 0, 30)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    Stats("Nom Nom Nom!")
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showIcon(IconNames.Confused)
})
function Stats (Text_Above: string) {
    if (Food > 100) {
        Food = 100
    }
    helpers.imageShowDataView(
    screen(),
    Text_Above,
    "Food",
    Food,
    "Mood",
    100,
    "Cleanliness",
    100
    )
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    screen().fill(8)
    screen().printCenter("No File", 60, 1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Meh)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
radio.onReceivedValue(function (name, value) {
	
})
input.onGesture(Gesture.ThreeG, function () {
	
})
let bitmap: Bitmap = null
let Food = 0
Food = 100
screen().fill(15)
Stats("Hello!")
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
basic.pause(10000)
basic.showLeds(`
    . # . # .
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    `)
music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    basic.pause(5000)
    Stats("Your BitBot")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
    basic.pause(20000)
    Food += -10
})
