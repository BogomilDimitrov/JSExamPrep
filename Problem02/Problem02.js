function solve(input) {
    var figures = { 'I': 0, 'L' : 0, 'J': 0, 'O': 0 , 'Z': 0, 'S' : 0, 'T': 0 };
    
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].length; j++) {
            if (input[i][j] == 'o') {
                checkElemsOfFigures(i, j);
            }
        }
    }
    
    function checkElemsOfFigures(row, col) {
        checkElement('I', row, col, 1, 0, 2, 0, 3, 0);
        checkElement('L', row, col, 1, 0, 2, 0, 2, 1);
        checkElement('J', row, col, 1, 0, 2, 0, 2, -1);
        checkElement('O', row, col, 1, 0, 1, 1, 0, 1);
        checkElement('Z', row, col, 0, 1, 1, 1, 1, 2);
        checkElement('S', row, col, 0, -1, 1, -1, 1, -2);
        checkElement('T', row, col, 0, 1, 1, 1, 0, 2);
    }

    function checkElement(elem, row, col, 
                        firstRowCheck, firstColCheck, 
                        secondRowCheck, secondColCheck, 
                        thirdRowCheck, thirdColCheck) {
        
        var maxRow = Math.max(firstRowCheck, secondRowCheck, thirdRowCheck);
        var maxCol = Math.max(firstColCheck, secondColCheck, thirdColCheck);
        var minCol = Math.min(firstColCheck, secondColCheck, thirdColCheck);
        
        if (input[row + maxRow] == undefined || 
            input[row + maxRow][col + maxCol] == undefined || 
            input[row][col + minCol] == undefined) {
            return false;
        }
        if (input[row][col] == input[row + firstRowCheck][col + firstColCheck] &&
            input[row][col] == input[row + secondRowCheck][col + secondColCheck] &&
            input[row][col] == input[row + thirdRowCheck][col + thirdColCheck]) {
            figures[elem]++;
        }
    }
    
    
    console.log(JSON.stringify(figures));
}

solve([
    "--o--o-",
    "--oo-oo",
    "ooo-oo-",
    "-ooooo-",
    "---oo--"
]);