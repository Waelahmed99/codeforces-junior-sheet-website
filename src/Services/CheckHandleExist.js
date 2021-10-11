async function checkHandle(handle) {
    let result
    try {
        const response = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
        result = await response.json()
    } catch {
        result = {status: 'FAILED', result: 'Handle is not existing'}
    }

    return result
}

export default checkHandle