function solve(input) {
    var biggestSum = -Infinity;
    var biggestSumAsString = "";
    for (var i = 2; i < input.length - 1; i++) {
        var nums = input[i].match(/\-?[\d\.]+/g);
        var sum = 0;
        
        if (nums != undefined) {
            for (var j = 0; j < nums.length; j++) {
                sum += Number(nums[j]);
            }
            if (sum > biggestSum) {
                biggestSum = sum;
                biggestSumAsString = sum + ' =';
                for (var k = 0; k < nums.length; k++) {
                    biggestSumAsString += ' ' + nums[k] + ' +';
                }
            }
        }

    }
    
    if (biggestSumAsString == "") {
        console.log('no data');
    } else {
        console.log(biggestSumAsString.slice(0, biggestSumAsString.length - 2));
    }
}

solve(["<table>",
    
"<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",

"<tr><td>Sofia</td><td>-</td><td>0</td><td>-</td></tr>",
"<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>",

"</table>"
]);