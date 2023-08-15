import {contextBridge, ipcRenderer, IpcRendererEvent} from 'electron'

export default () => {
    contextBridge.exposeInMainWorld('ipc', {
        send: (channel: string, data: any) => {
            ipcRenderer.send(channel, data)
        },
        receive: (channel: string, func: (event: IpcRendererEvent, ...args: any[]) => void) => {
            ipcRenderer.on(channel, (event, ...args) => func(event, ...args))
        },
        invoke: (channel: string, data: any) => {
            return ipcRenderer.invoke(channel, data)
        }
    })

}
