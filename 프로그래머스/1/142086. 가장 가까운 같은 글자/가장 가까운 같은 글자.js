function solution(s) {
    const lastSeen = [];

    return [...s].map((cur, i) => {
        let result = lastSeen[cur] !== undefined ? i - lastSeen[cur] : -1;
        lastSeen[cur] = i;
        return result;
    });
}
