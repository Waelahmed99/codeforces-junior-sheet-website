async function fetchSubmissions(handle) {
    const fetchFromCF = await fetch(`https://codeforces.com/api/user.status?handle=${handle}`)
    const submissions = await fetchFromCF.json()

    return submissions
}

export { fetchSubmissions }