# I2C on the Raspberry Pi Pico W

Inter-Integrated Circuit (I2C) communication is a two-wire method of communicating between integrated circuits. Understanding the basics of what is happening is useful and makes working with I2C devices with a Raspberry Pi Pico more fun. If you have to troubleshoot a script or extend a micropython script then knowing how I2C works makes this a fun learning experience. Lets dive in.

## IC2 master and slaves

Unfortunate terminology these days, so I'm going to call these types of device controllers and workers. A device with a controller can communicate with multiple worker devices, which will share the same clock and data connections. Each worker device has a fixed address, and all addresses must be unique for a controller. 

The Raspberry Pi Pico W has two I2C controllers.

https://www.raspberrypi.com/documentation/microcontrollers/images/picow-pinout.svg

To be continued...

## References

https://www.hackster.io/mr-alam/how-to-use-i2c-pins-in-raspberry-pi-pico-i2c-scanner-code-8f489f
