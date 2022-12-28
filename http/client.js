import fetch from "node-fetch";

const baseOptions = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
}

export async function getRequest(url, options) {
    return await (await fetch(url, {
        method: 'GET',
        ...baseOptions,
        ...options
    })).json()
}

export async function postRequest(url, options) {
    return await (await fetch(url, {
        method: 'POST',
        ...baseOptions,
        ...options
    })).json()
}