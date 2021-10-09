async function getSheets() {
    const getRequest = await fetch('https://api.jsonbin.io/b/6161de959548541c29c0cf9a')
    return await getRequest.json()
}

export default getSheets