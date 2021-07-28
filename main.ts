basic.showString("Hello!")
basic.showNumber(0)
basic.showString("Hello!")
basic.showNumber(0)
basic.forever(function () {
    if (Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P0) < 26 && Environment.ReadSoilHumidity(AnalogPin.P1) > 40) {
        basic.showString("PLEASE I'M GOOD. DO NOT WATER ME")
    } else if (Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P0) > 26 && Environment.ReadSoilHumidity(AnalogPin.P1) < 40) {
        basic.showString("PLEASE WATER ME")
        servos.P2.setAngle(30)
        servos.P2.run(40)
    } else if (Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P15) < 26 && Environment.ReadSoilHumidity(AnalogPin.P1) > 40) {
        basic.showString("IT IS ENOUGH. STOP WATERING ME")
        servos.P2.stop()
    } else {
        basic.showString("I AM WELL")
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showString("DO NOT WATER ME")
    }
})
