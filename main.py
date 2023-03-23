def on_button_pressed_a():
    music.play_melody("C5 - - - - - - - ", 359)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    music.play_melody("C5 - - - - - - - ", 77)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
