async function getSheets() {
    const getRequest = await fetch('https://smart-sheet.herokuapp.com/sheets')
    return await getRequest.json()
}

export default getSheets