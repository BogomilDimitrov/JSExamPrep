function solve(input) {
    
    var courses = {};
    for (var i = 0; i < input.length; i++) {
        //var currentLine = input[i].match(/([a-zA-Z]+\s+[a-zA-Z]+)|([a-zA-Z#]+)|(\d+\.\d+)|(\d+)/g);
        //var name = currentLine[0];
        //var course = currentLine[1];
        //var grade = Number(currentLine[2]);
        //var visits = Number(currentLine[3]);

        var data = input[i].trim().split(/[\s]?\|[\s]?/g);
        var name = data[0];
        var course = data[1];
        var grade = Number(data[2]);
        var visits = Number(data[3]);
        
        if (!courses[course])
            courses[course] = {
                'avgGrade': 0,
                'avgVisits' : 0,
                'students' : [],
                'countInputs' : 0
            };
        
        courses[course]['avgGrade'] += grade;
        courses[course]['avgVisits'] += visits;
        
        if (courses[course]['students'].indexOf(name) == -1)
            courses[course]['students'].push(name);
        
        courses[course]['countInputs']++;
    }
    
    var courseKeys = Object.keys(courses);
    courseKeys.sort();
    
    var outputArr = {};
    
    for (var j = 0; j < courseKeys.length; j++) {
        var currCourse = courseKeys[j];
        outputArr[currCourse] = courses[currCourse];
        outputArr[currCourse].students.sort();
        
        outputArr[currCourse].avgGrade = Number((outputArr[currCourse].avgGrade / outputArr[currCourse].countInputs).toFixed(2));
        outputArr[currCourse].avgVisits = Number((outputArr[currCourse].avgVisits / outputArr[currCourse].countInputs).toFixed(2));
        delete outputArr[currCourse].countInputs;
    }
    
    
    
    console.log(JSON.stringify(outputArr));

}

solve([
    "           Peter Nikolov | PHP  | 5.50 | 8         ",
    "Maria Ivanova | Java | 5.83 | 7",
    "Ivan Petrov   | PHP  | 3.00 | 2",
    "Ivan Petrov   | C#   | 3.00 | 2",
    "Peter Nikolov | C#   | 5.50 | 8",
    "Maria Ivanova | C#   | 5.83 | 7",
    "Ivan Petrov   | C#   | 4.12 | 5",
    "Ivan Petrov   | PHP  | 3.10 | 2",
    "Peter Nikolov | Java | 6.00 | 9"]);