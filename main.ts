let Distance = 0
basic.showIcon(IconNames.Heart)
Tinybit.RGB_Car_Big(Tinybit.enColor.Pinkish)
basic.forever(function () {
    Distance = Tinybit.Ultrasonic_Car()
    if (Distance < 15) {
        basic.pause(100)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 80)
        basic.pause(100)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 100)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    }
})
