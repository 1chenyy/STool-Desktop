import {BrowserWindow, ipcMain, app} from 'electron'
import Constant from "../../help/Constant.ts";
import path from "node:path";

export default () => {
    ipcMain.on(Constant.CHANNEL_ADJUST_WIN, (_, data) => {
        const win = BrowserWindow.getFocusedWindow()
        if (win == null)
            return
        switch (data) {
            case 'min':
                win.minimize()
                break
            case 'max':
                win.isMaximized() ? win.unmaximize() : win.maximize()
                break
            case 'close':
                win.destroy()
                app.quit()
                break
        }
    })

    ipcMain.on(Constant.CHANNEL_CREATE_BACKEND_WIN, () => {
        const backendWin = new BrowserWindow({
            width: 900,
            height: 600,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js'),
            },
        })
        let url = ""
        if (process.env['VITE_DEV_SERVER_URL']) {
            url = process.env['VITE_DEV_SERVER_URL'] + '#/backendPage'
        } else {
            url = path.join(process.env.DIST, 'index.html#backendPage')
        }
        backendWin.loadURL(url)
    })
}
