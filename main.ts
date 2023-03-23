let Message = ""
input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    radio.sendString("T357")
})
radio.onReceivedString(function (receivedString) {
    Message = receivedString
    basic.showString(Message)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(1)
    radio.sendString("Nearby")
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1e+31; index++) {
        radio.setGroup(1)
        radio.sendString("SOS")
        music.playMelody("A - A - A - - - ", 605)
        music.playMelody("A - A - A - - - ", 179)
        music.playMelody("A - A - A - - - ", 605)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.setGroup(1)
    radio.sendString("SOS")
    music.playMelody("A - A - A - - - ", 605)
    music.playMelody("A - A - A - - - ", 179)
    music.playMelody("A - A - A - - - ", 605)
})
