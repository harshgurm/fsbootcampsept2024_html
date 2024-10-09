// Create a function which displays the GPA in the alphabetical format.
// Each grade should then be changed to a numeric format, with the help of the table below,
// to calculate the average numeric value of all the grades. Again, with the help of the table, the numeric GPA found, average numeric value, should be converted to an alphabetical value and displayed to the student on the screen, as shown below.


// Create a function called calculateGPA(arr)
// Inside the JavaScript file you created, create a function called calculateGPA.
// Parameter:arr;
// The function should take an array of alphabets representing the grades
// Each alphabet in the array should be checked using the === operator.
// Using a for loop and if, else if, and else statements, sum the numeric values of the grades. Next, divide the sum by the number of subjects to get the average numeric GPA.
// Using logical and comparison operators, check the value of the average numeric result and convert that to an alphabetic GPA value.

// display the array value in a for loop inside the function
function calculateGPA(arr){
    //looping through all the values passed in the array
    sum = 0;
    for(let i=0; i<arr.length; i++){
        // console.log(arr[i]);
        if(arr[i] === 'A'){
            sum = sum + 100;
        } else if(arr[i] === 'B'){
            sum = sum + 80;
        } else if(arr[i] === 'C'){
            sum = sum + 70;
        } else {
            sum = sum + 60;
        }
    }

    var class_avg = sum/arr.length;
    console.log(sum);
    console.log(class_avg);
    var avg_grade = "";

    if(class_avg > 0){
        if(class_avg == '100'){
            avg_grade = 'A';
        } else if(class_avg >= '80'){
            avg_grade = 'B'
        } else if(class_avg >= '70'){
            avg_grade = 'C'
        } else {
            avg_grade = 'D'
        }
    }
    console.log('Class Average is ' + avg_grade);
}

var arr = ['A', 'A','B','C', 'D'];
//calling the function
calculateGPA(arr);


console.log('This value will be true', 5 == '5');
console.log(' === exammple', '5' === 5);