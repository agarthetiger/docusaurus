# Raspberry Pico W

## Getting started with a Raspberry Pico

Hold down BOOTSEL button when connecting to usb to enable mass storage device. Use this to transfer firmware (.uf2 files) like MicroPython onto the Pico. The Pico will load the formware and reboot, disconnecting from the pc and booting into whatever firmware was loaded. 

Use minicom to connect from the command line, `minicom -o -D /dev/ttyACM0` althugh Thonny is much easier to use if you have a GUI. Select `MicroPython (Raspberry Pi Pico)` from the bottom-left dropdown and you get both a REPL (Read, Execute, Print, Loop) prompt and the ability to save and run code from an editor.

## Links

* [The MicroPython SDK manual](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf)
* [Connecting to the internet / WiFi](https://datasheets.raspberrypi.com/picow/connecting-to-the-internet-with-pico-w.pdf)

