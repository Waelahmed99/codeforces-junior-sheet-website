const api = 'https://smart-sheet-beta.herokuapp.com'

async function getSheets() {
    let result
    try {
        const getRequest = await fetch(`${api}/sheets`)
        result = getRequest.json()
    } catch {
        result = {status: 'error', result: 'Unknown error'}
    } 
    
    return result
}

async function getSheetByName(name) {
    let result 
    try {
        const getRequest = await fetch(`${api}/sheets/${name}`)
        result = getRequest.json()
    } catch {
        result = {status: 'error', result: 'Unknown error'}
    } 
    
    return result
}

export { getSheets, getSheetByName }