//reduce로 i부터 j까지 잘라서 정렬
//인덱스가 k인수만 골라 배열로
function solution(array, commands) {
    return commands.reduce((result, [i, j, k]) => {
        // array를 i번째부터 j번째까지 자르고 정렬
        const slicedArray = array.slice(i - 1, j).sort((a, b) => a - b);
        // 정렬된 배열에서 k번째 숫자를 result 배열에 추가
        result.push(slicedArray[k - 1]);
        return result;
    }, []);
}
