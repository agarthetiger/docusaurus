# Boiler Pico

I've been interested to monitor my home heating for a while. I had installed smart controls from Tado but wasn't happy that I couldn't access data from my own home outside of their app. I've been using Raspberry Pis for a variety of projects and also started to look at the Raspbberry Pi Pico. It's an interesting device, and more suitable than a full-blown compute module for many applications. I've had the idea of adding temperature sensors to the central heating pipes and monitoring them from a Pi, and hooking into my existing homelab Prometheus and Grafana instances to display the data. I can even send alerts using Grafana if I want to. 

## Hardware

For projects where I might have used a Pi to run a single python script a Pico may be more suitable. There is no OS to patch with security updates, I can run a micropython script with much faster startup time and the Pico W has WiFi 2.4GHz for wireless communication. Primarily I started looking at these because they were both cheap and available. I'm sure there are alternatives which have been around for a long time. However, I have two kids and very limited free time. I find the community around Raspberry Pis to be a great help, probably everything I want to do has already been done before, problems encountered and solved. At this point in my life this is a significant bonus. I have a spare Raspberry Pi Zero W from another project which I could repurpose for this project, but the more I think about it the more a single purpose microcontroller like a Pico is better suited to this job. 

In searching around for suitable temperature sensors the DS18B20 came up. I'm hoping these will prove suitable with a bit of thermal paste and insulation around the pipes and sensors. As long as the temperature readings are repeatable, I'd probably be ok with plus or minus a few degrees. I can see what the boiler says it's outputting for the water temperature which will be interesting to compare once this is built.

I2C, SPI and one-wire are all quite new to me, so it was good to find tutorials and guides explaining each of them and even a guide for interfacing multiple DS18B20 devices with a Pico, which is how I intend to build this system.

## Software

I've been building up micropython scripts to get familiar with using the Pico. From another Raspberry Pi 400, using Thonny is a great way to get started. I used to be a full-time software developer, using tools like VS Code and IntelliJ PyCharm daily. Compared to my experiences with MacOS and Arduino devices in the past which were decidedly painful, the Pi400 and Thonny are such a simple combination and do everything I need. Starting with the Raspberry Pi Pico official guide, flashing micropython onto the Pico was really well explained. No recompiling kernels or anything like that, it was literally drag-and-drop onto the Pico. It's impossible to brick a Pico, the bootloader firmware is in read-only memory so with a press of a hardware button you can always reflash a Pico. 

I ran through several tutorials starting from flashing the onboard LED to connecting to WiFi, reading the onboard package temperature and driving a small oled display. Moving on, I also found guides for setting up a basic webserver, and serving metrics in the OpenMetrics format which Prometheus can scrape. Feels like all the pieces are in place to begin to build this up. Problems can always crop up, but in theory this should all work together. Time to build the thing. 

## Build

Hopefully by the end of this weekend there will be something physical to show... tbc.

From left to right, bytearray addresses as mounted, 

1. b'($\xb8Sa"\x07\x88')
2. b'(\xe0#Ja"\x07\xa7')
3. b'(\xe2\x81~T"\x08\x95')
4. b'(\xf7\xa0sT"\x08\x8d')
5. b'(JPoT"\x08L')


Momentary switch leds, Vf 2.2v.


## References

Thanks to the open source community who've made this project far more accessible to me. 

* https://how2electronics.com/read-temperature-sensor-value-from-raspberry-pi-pico/
* https://how2electronics.com/interfacing-ds18b20-sensor-with-raspberry-pi-pico/
* https://docs.micropython.org/en/latest/esp8266/tutorial/onewire.html
* https://github.com/leszekuchacz/KitronikBME688-picow-exporter
* https://sysdig.com/blog/prometheus-metrics/
* https://github.com/OpenObservability/OpenMetrics/blob/main/specification/OpenMetrics.md
* http://www.d3noob.org/2022/10/using-raspberry-pi-pico-with-prometheus.html
* https://docs.micropython.org/en/v1.19.1/rp2/quickref.html#onewire-driver
* https://www.evilmadscientist.com/2012/resistors-for-leds/
* https://proto-pic.co.uk/product/crimp-connector-housings-2-54mm-0-1-dupont-compatible
