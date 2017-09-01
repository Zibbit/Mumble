Build Mumble
--------------

The Mumble core software is a Node.js application which uses the NW.js (node-webkit) library. NW.js is an app runtime based on Chromium. In order to build Mumble and it's dependencies from source you must be familiar with Node.js, the Chromium project and NW.js (node-webkit). Building Chromium and NW.js is a long process, you might want to download the trusted prebuilt binaries from the NW.js website instead: http://nwjs.io/downloads/

Follow the instructions below if you would like to build Chromium and NW.js from source.

To build Chromium please refer to the Chromium project web site.

[Build summary](https://www.chromium.org/nativeclient/how-tos/build-tcb)

[Get the Chromium code](http://www.chromium.org/developers/how-tos/get-the-code)

[Windows build instructions](https://chromium.googlesource.com/chromium/src/+/master/docs/windows_build_instructions.md)

To build NW.js please refer to the NW.js [build documentation](http://docs.nwjs.io/en/latest/For%20Developers/Building%20NW.js/).


Install Mumble dependencies
------------------------

Once the latest NW.js binaries are built (or downloaded) ensure that you also have node installed on your computer (https://nodejs.org/en/), and then clone the mumble repository:  

```bash
$ git clone https://github.com/zibbit/mumble
$ cd /mumbleui
```
Install the Mumble Node.js dependencies:  
```bash
$ npm install
```
A few extra steps are required to configure jspm and install jspm packages.

First install jspm locally.
```bash
npm install jspm --save-dev
```

To load bower packages, the bower endpoint must be installed.
```bash
npm install jspm-bower-endpoint
```

Add bower registry endpoint
```bash
jspm registry create bower jspm-bower-endpoint
```

Please refer to the [jspm.md](jspm.md) readme file for more information.
Once jspm is configured enter
```bash
$ jspm install
```
Next you must create a configuration file named config.app.json in the lib folder, the same location where the config.json file is placed.
Put the following in the config.app.json file
```json
{
"nwmode": true,
"wsprotocol":  "https"
}
```

Set the nwmode to false to run the mumbleui as a web application. (We run it using NGINX but any web server should be able to serve the content.) Mumble is a desktop application, so normally the nwmode flag is true.
The default value of wsprotocol is "https".

Run Mumble from source
------------------------

Now that you have installed the Mumble dependencies you can run it directly from source without building the executable. If you wish to go straight to building the executable, skip this step. Make sure you are still in the mumbleui directory and follow the instructions below depending on your platform.

Run Mumble on Linux:  
```bash
$ /path/to/nw .
```
(The node-webkit executables you downloaded earlier must be in the /to directory if you run the above command. The package.json file must exist in the Mumble directory).

Run Mumble on Windows:  
```bash
$ /path/to/nw.exe .
```
(The node-webkit executables you downloaded earlier must be in the /to directory if you run the above command. The package.json file must exist in the Mumble directory).



Build and create the Mumble executable
-----------------------------------------

Once you have built or downloaded NW.js, create the Mumble package by running the platform specific build file from the Mumble/build source directory.



Once Mumble is done building it will be zipped and placed in the build directory. 

