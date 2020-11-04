# Weekdone with Google App Script

This app is an example of the integration between Google App Scripts and [Weekdone](https://weekdone.com) tool providing authorization with [OAuth2 protocol](https://oauth.net/2/).

This is an example of a way to use OAuth2 authorization with Google App Scripts. You could change this code to any other third-party service that provides OAuth2 authorization.

## Installation

1. Create a new Google Sheet and navigate to Tools > Script editor

1. Get your ```script_id``` from Google App Script at File > Project properties
![Screen](https://i.ibb.co/0jSTGzw/Screen-Shot-2020-11-04-at-18-19-10.png)

1. Go to your Weekdone account and create a new app at Company Settings > Applications
![screen 1](
https://i.ibb.co/z2jDh3k/Screen-Shot-2020-11-04-at-18-22-39.png)

1. Define a name for your app and input the Redirect URI below replacing the ```{your_script_id}``` to your ```script_id``` from step 2: [https://script.google.com/macros/d/{your_script_id}/usercallback](https://script.google.com/macros/d/{your_script_id}/usercallback)

1. Create your app and get your ```client_id``` and ```client_secret``` credentials
![Screen](https://i.ibb.co/JQVtjr3/Screen-Shot-2020-11-04-at-18-24-48.png)

1. On your Google App Script, create the files according to this repo and replace the credentials at file ```credentials.gs``` with the ones that you got on the previous step
![Screen](https://i.ibb.co/jkYTDK1/Screen-Shot-2020-11-04-at-18-56-51.png)

1. Go back to your Google Sheet and refresh the page. Your integration with Weekdone is settled!

1. Click on Weekdone Integration > Login to authorize with your Weekdone credentials
![Screen](https://i.ibb.co/88pxynT/Screen-Shot-2020-11-04-at-19-01-48.png)

1. Click on Weekdone Integration > Retrieve Objectives to get data from your Weekdone account
![Screen](https://i.ibb.co/sybYdnP/Screen-Shot-2020-11-04-at-19-02-14.png)

## Usage

The ```OAuth2``` authorization is executed by ```auth.gs``` file, following the original documentation at [OAuth2 for Apps Script](https://github.com/googleworkspace/apps-script-oauth2)

The ```onOpen()``` function is a trigger that automatically runs when a [Google Document is open.](https://developers.google.com/apps-script/guides/triggers#onopene)

This function creates a new menu that allow users to login and authenticate at third-party services.

If you want to add more services at the integration that you are using, you could add new items at the menu, like ```Retrieve Objectives```.
```javacript
function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Weekdone Integration')
        .addItem('Login', 'showSidebar')
        .addItem('Retrieve Objectives', 'getObjectives')
        .addItem('Logout', 'logout')
        .addToUi();
    showDialog();
}
```

Add your requests to your third-party services to the ```requests.gs``` file. You also could set the APIs URLs at your ```credentials.gs``` file.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

This application is a demonstration of how to use OAuth2 protocol authorization with Google App Scripts that allows to integrate with any other service through Open APIs.

## License
[GNU General Public License v3.0](https://github.com/icmaia90/oauth2-google-app-script/blob/main/LICENSE)