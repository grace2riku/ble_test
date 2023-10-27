bluetooth.onBluetoothConnected(function () {
    basic.showString("O")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("X")
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (lastValue != control.eventValue()) {
        lastValue = control.eventValue()
        if (lastValue == 1) {
            basic.showString("A")
        } else if (lastValue == 3) {
            basic.showString("B")
        } else if (lastValue == 5) {
            basic.showString("C")
        } else if (lastValue == 7) {
            basic.showString("D")
        } else if (lastValue == 9) {
            basic.showString("1")
        } else if (lastValue == 11) {
            basic.showString("2")
        } else if (lastValue == 13) {
            basic.showString("3")
        } else if (lastValue == 15) {
            basic.showString("4")
        } else {
            basic.clearScreen()
        }
    }
})
let lastValue = 0
lastValue = 0
bluetooth.startLEDService()
