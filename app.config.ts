import 'dotenv/config'

export default {
    "expo": {
      "name": "RTPM",
      "slug": "RTPM",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./assets/icon.png",
      "userInterfaceStyle": "light",
      "newArchEnabled": true,
      "splash": {
        "image": "./assets/splash-icon.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
      },
      "ios": {
        "supportsTablet": true
      },
      "android": {
        "adaptiveIcon": {
          "foregroundImage": "./assets/adaptive-icon.png",
          "backgroundColor": "#ffffff"
        },
  
        "config": {
          "googleMaps": {
            "apiKey": process.env.API_KEY
          }
        }
      },
      "web": {
        "favicon": "./assets/favicon.png"
      }
    }
  }

