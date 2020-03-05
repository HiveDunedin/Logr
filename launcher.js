const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow () {
    //Creates the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    //TODO Load html file to the app
    mainWindow.loadFile('index.html');
}

app.on('ready', () => {
    createWindow()
});
