import Constant from "./Constant.ts";

declare global {
    interface Window {
        ipc: any;
    }
}

class Utils {
    static adjustWindows(type: string) {
        window.ipc.send(Constant.CHANNEL_ADJUST_WIN, type)
    }

    static startBackendWindows(data: string) {
        localStorage.setItem(Constant.KEY_CREATE_BACKEND_WIN_PARAMS, data)
        window.ipc.send(Constant.CHANNEL_CREATE_BACKEND_WIN, data)
    }

    static getBackendWindowParamsOnce(): string | null {
        const params = localStorage.getItem(Constant.KEY_CREATE_BACKEND_WIN_PARAMS)
        localStorage.removeItem(Constant.KEY_CREATE_BACKEND_WIN_PARAMS)
        return params
    }
}

export default Utils
