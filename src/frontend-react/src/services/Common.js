export const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
export const APP_VERSION = 3.0;

export function epochToJsDate(ts) {
    let dt = new Date(ts)
    return dt.toLocaleDateString() + " " + dt.toLocaleTimeString();
}