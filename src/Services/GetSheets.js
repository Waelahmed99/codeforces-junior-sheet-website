const api = process.env.REACT_APP_SHEETS_API

async function getSheets() {

    let result
    try {
        const getRequest = await fetch(`${api}/sheets`)
        result = await getRequest.json()
    } catch {
        result = { status: 'error', result: 'Unknown error' }
    }

    return result
}

async function getSheetByName(name) {
    let result
    try {
        const getRequest = await fetch(`${api}/sheets/q=name/${name}`)
        result = getRequest.json()
    } catch {
        result = { status: 'error', result: 'Unknown error' }
    }

    return result
}

export { getSheets, getSheetByName }