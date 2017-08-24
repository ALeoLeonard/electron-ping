const {app, Menu, Tray} = require('electron')

let tray = null
app.on('ready', () => {
  tray = new Tray('tray_icon_black.png')
  const onClickChangeIcon = function () {
    tray.setImage('tray_icon_purple.png')
  }
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Change Icon', click: onClickChangeIcon },
    {role: 'quit'}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})
