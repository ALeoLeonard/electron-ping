const {app, Menu, Tray} = require('electron')
const notify = require('electron-main-notification')

let tray = null
app.on('ready', () => {
  tray = new Tray('tray_icon_black.png')
  const onClickChangeIcon = function () {
    tray.setImage('tray_icon_purple.png')
  }
  const onClickTriggerNotification = function () {
    notify('hello world')
  }
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Change Icon', click: onClickChangeIcon },
    {label: 'Trigger Notification', click: onClickTriggerNotification },
    {role: 'quit'}
  ])
  tray.setToolTip('Electron Ping')
  setInterval(() => { notify('yo yo playa you did it') }, 1000)
  tray.setContextMenu(contextMenu)
})
