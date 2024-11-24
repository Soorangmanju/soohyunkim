const solution = (n, arr1, arr2) => {
    return arr1.map((row1, i) => {
        const binaryRow1 = row1.toString(2).padStart(n, '0');
        const binaryRow2 = arr2[i].toString(2).padStart(n, '0');
        
       
        return binaryRow1.split('').map((bit1, j) => {
            const bit2 = binaryRow2[j];
            return (Number(bit1) + Number(bit2) === 0) ? ' ' : '#';
        }).join('');
    });
};

