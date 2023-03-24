input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    radio.sendString("(user):Ok")
})
radio.onReceivedString(function (receivedString) {
    music.playTone(988, music.beat(BeatFraction.Whole))
    Message = receivedString
    radio.sendString(receivedString)
    basic.showString(Message)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(1)
    radio.sendString("(user:)Nearby")
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1e+31; index++) {
        radio.setGroup(1)
        radio.sendString("(User):SOS")
        music.playMelody("A - A - A - - - ", 605)
        music.playMelody("A - A - A - - - ", 179)
        music.playMelody("A - A - A - - - ", 605)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.setGroup(1)
    radio.sendString("(user):SOS")
    music.playMelody("A - A - A - - - ", 605)
    music.playMelody("A - A - A - - - ", 179)
    music.playMelody("A - A - A - - - ", 605)
})
let Message = ""
radio.setGroup(1)
