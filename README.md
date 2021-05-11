# EurekaLabs

React Native app (no expo use) to take pictures, and see their location.

## Setup

Follow the next steps to run the project:

1 - Clone the project on your local machine:

SSH:

`git@github.com:poleselfg/eurekalabs.git`

HTTPS:

`https://github.com/poleselfg/eurekalabs.git`

2 - Install the dependencies:

_Note: I decided to build this project with npm and tested  with Android Build 28 (android 9) virtual device.

-Android Studio
  Setup Virtual Device with Android Build 28 (android 9)
-"react": "17.0.1",
-"react-native": "0.64.0",

Run the following commands in order:

`npm i`
`npm start`

on a new terminal

`npx react-native run-android`

This compile and you must see the app runing in the virtual device.

## Tech Stack

This project has been built with the following repos:

    "@react-native-community/cameraroll": "^4.0.4",
    "@react-native-community/geolocation": "^2.0.2",
    "@react-native-community/masked-view": "^0.1.11",
    "@react-navigation/native": "^5.9.4",
    "@react-navigation/stack": "^5.14.4",
    "react": "17.0.1",
    "react-native": "0.64.0",
    "react-native-camera": "^3.43.6",
    "react-native-camera-hooks": "^0.5.0",
    "react-native-gesture-handler": "^1.10.3",
    "react-native-reanimated": "^2.1.0",
    "react-native-safe-area-context": "^3.2.0",
    "react-native-screens": "^3.1.1",
    "react-native-splash-screen": "^3.2.0",
    
### Folder Structure

```
app
│
│
└─── components
    │
    │
    └─── Single Folder for every component
    │
    │
    └─── index.js file with all the exports

```
### For Testing

tested with Android Build 28 (android 9) virtual device. Don't have chance to test it in Apple devices, because my lack of hardware.



www.hi-im-pole.com





