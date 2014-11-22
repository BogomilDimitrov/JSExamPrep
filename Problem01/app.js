function solve(input) {
    var numbers = [];
    
    for (var i = 0; i < input.length; i++) {
        numbers[i] = Number(parseFloat(input[i]).toFixed(2));
    }
    
    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');
    
    if(numbers.length !== 0)
        console.log('<tr><td>' + numbers[0].toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');
    
    var image = '';
    
    for (var j = 1; j < numbers.length; j++) {
        //numbers[j] < numbers[j - 1] ? image = 'down' : numbers[j] > numbers[j - 1] ? image = 'up' : image = 'fixed';
        
        if (numbers[j] < numbers[j - 1]) {
            image = 'down';
        } else if (numbers[j] > numbers[j - 1]) {
            image = 'up';
        } else {
            image = 'fixed';
        }
        
        
        console.log('<tr><td>' + numbers[j].toFixed(2) + '</td><td><img src=\"' + image + '.png\"/></td></td>');
    }
    
    console.log('</table>');
}

solve([]);