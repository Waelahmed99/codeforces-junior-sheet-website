async function getSheets() {
    const getRequest = await fetch('https://smart-sheet.herokuapp.com/sheets')
    console.log(getRequest)
}

export default getSheets