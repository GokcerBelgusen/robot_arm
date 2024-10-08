gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    radio.sendString("LEFT")
})
input.onButtonPressed(Button.A, function () {
    maqueen.servoRun(maqueen.Servos.S1, 85)
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    radio.sendString("RIGHT")
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Down, function () {
    radio.sendString("DOWN")
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    radio.sendString("UP")
})
gamePad.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    radio.sendString("OPEN")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "UP") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(100)
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (receivedString == "DOWN") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
        basic.pause(100)
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (receivedString == "LEFT") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        basic.pause(100)
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (receivedString == "RIGHT") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        basic.pause(100)
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (receivedString == "OPEN") {
        maqueen.servoRun(maqueen.Servos.S1, 30)
    }
    if (receivedString == "CLOSE") {
        maqueen.servoRun(maqueen.Servos.S1, 85)
    }
})
input.onButtonPressed(Button.B, function () {
    maqueen.servoRun(maqueen.Servos.S1, 30)
})
gamePad.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    radio.sendString("CLOSE")
})
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
