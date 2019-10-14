console.log('Hello');


//loops enable repitition of certain statements

//------- 3 types of loops ------
//for loop -- when you know certainly how many times you want to repeat
//do while loops -- when you need to run the loop at least once, validates the condidtion, then continue
//while loops -- when you do not know how many times. will run only when the condition is true


//prompt will take input from user
//parseInt (is a function) will convert string into integer value
//parseFloat (is a function) for
var names =[];
var salaries = [];
console.log(names);
var n = parseInt(prompt('please enter a value for n'));

for (var i=0; i<n; i++){

  var name = prompt('enter the name of an employee');
  names.push(name);

  var salary = parseFloat(prompt('enter the salary of the employee'));
  salaries.push(salary);

}
console.log(salaries);

for (var salaryCount = 0; salaryCount <n; salaryCount++){
  if (salaries[salaryCount]) {

  }
}
