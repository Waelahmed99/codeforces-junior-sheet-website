async function fetchSubmissions(handle) {
    let submissions
    try {
        const fetchFromCF = await fetch(`https://codeforces.com/api/user.status?handle=${handle}`)
        submissions = await fetchFromCF.json()
    } catch {
        submissions = { status: "error", result: "Error occurred" }
    }

    return submissions
}

export { fetchSubmissions }