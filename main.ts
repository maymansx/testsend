input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(5)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(7)
})
radio.setGroup(7)
basic.forever(function () {
	
})
