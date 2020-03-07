// node
const path = require('path')

// electron
const { Notification } = require('electron')
const { autoUpdater } = require('electron-updater')
const log = require('electron-log')
const isDevMode = require('electron-is-dev');

class Updater {
  constructor () {
    autoUpdater.logger = log;
    autoUpdater.setFeedURL({
      provider: "github",
      repo: "vertus-desktop",
      owner: "exordium-dev"
    })
    autoUpdater.autoDownload = true;

    autoUpdater.once('checking-for-update', () => {
      // checking for the update
      console.log("Checking for updates...");
      sendNotif ("Checking for updates...", "We are currently checking if there are any new application updates, this could take a moment.");
    })

    autoUpdater.once('update-available', info => {
      // found an update
      console.log(info);
      sendNotif ("Update Available!", "There's a new update available, we will download and install it automatically!");
    })

    autoUpdater.once('update-not-available', info => {
      // no new update
      console.log(info);
    })

    autoUpdater.on('error', err => {
      // error detected
      console.log(err);
    })

    autoUpdater.on('download-progress', progressObj => {
      // downloading new update
      progress = [progressObj.percent, progressObj.percent/100]
      network = [formatBytes(progressObj.bytesPerSecond) +'/s', formatBytes(progressObj.transferred) + "/" + formatBytes(progressObj.total)]
      console.log(`Download new update [${progress}%] at ${network}.`);
    })

    autoUpdater.once('update-downloaded', info => {
      // update downloaded
      console.log(info);
      autoUpdater.quitAndInstall()
    });

    if (isDevMode) {
     // dont check for updates (dev mode)
     sendNotif ("Developer Mode", "You are currently using the application in developer mode, we won't check for any updates.");
    } else {
     autoUpdater.checkForUpdates()
    }

  }
}

function sendNotif (title, message) {
  if (Notification.isSupported()) {
    let notif = new Notification ({
      title: title,
      body: message,
      //icon: path.join(__dirname, '../', 'assets', 'icons', 'win', 'icon.ico')
    });
    notif.show();
  }
}

module.exports = Updater;
