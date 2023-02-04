# Using a Pico as a temperature and humidity sensor

My goal is to build some low-cost home sensors to monitor room temperature and humidity. I want to keep my data on a home server and not rely on any cloud services. I've chosen to base my builds on the Raspberry Pi Pico and BME280 sensors, as I'm familiar with the sensors and Raspberry Pis in general, there is great community support and I'm also familiar with programming in Python. 

Following th guide on https://www.raspberrypi.com/documentation/microcontrollers/micropython.html I downloaded the pre-built firmware for the Pico W with MicroPython. At the time it downloaded rp2-pico-w-20221220-unstable-v1.19.1-782-g699477d12.uf2 which wouldn't have been my choice as a nightly (unstable) build. I'd rather a stable build but can't see any stable builds listed on the downloads page. I'll check back later if I have problems. 

## Hardware

BME280 sensors from Ali Express, 3.3v variant. They are cheap, presumably also because they have no voltage regulator so they will probably break if connected to 5v. I2C or SPI but I'll use I2C on the same pins as the OLED display. 


White OLED displays from Ali Express 
Driver IC: SSD1306 
Size: 0.91 inch OLED 
Resolution: 128 x 32 I2C interface 
Pin Description: GND: Power Ground  VCC: Power + (DC 3.3 ~5v) SCL: Clock Line SDA: Data Line

# Links

## BME280

* https://how2electronics.com/read-temperature-sensor-value-from-raspberry-pi-pico/
* https://microcontrollerslab.com/bme280-raspberry-pi-pico-micropython-tutorial/
* https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html#pinout-and-design-files15


