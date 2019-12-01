var myScript2 = myScript2 != undefined ? myScript2 : {};
myScript2.teamB = myScript2.teamB != undefined ? teamB : {};
// constructor function
function employee(name, age) {
  this.name = name;
  this.age = age;
  this.empDetails = function() {
    return " name is:" + this.name + " and age is:" + this.age;
  };
}

var emp1 = new employee("jhon", 26);

document.write("<hr><br>emp name:" + emp1.name);
document.write("<br>emp age:" + emp1.age);
document.write("<br>" + emp1.empDetails());

//literal notation
var empDetailsObj = {
  name: "jhon",
  age: 26,
  empDetails: function() {
    return " name is:" + this.name + " and age is:" + this.age;
  }
};

document.write("<hr><br>emp name:" + empDetailsObj.name);
document.write("<br>emp age:" + empDetailsObj.age);
document.write("<br>" + empDetailsObj.empDetails());

// es6 classes
class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.empDetails = function() {
      return " name is:" + this.name + " and age is:" + this.age;
    };
  }

  getResult() {
    return this.name;
  }
}
var empObj = new Employee("jhon", 26);

document.write("<hr><br>emp name:" + empObj.name);
document.write("<br>emp age:" + empObj.age);
document.write("<br>" + empObj.empDetails());
document.write("<br>emp name:" + empObj.getResult());

//difference b/w constructor function and literal notation
var studentObj = {
  id: 111,
  name: "jhon"
};
var newStuObj = studentObj;
document.write("<hr><br>studentObj name is:" + studentObj.name);
document.write("<br>newStuObj name is:" + newStuObj.name);

newStuObj.name = "Daniel";
document.write("<hr><br>studentObj name is:" + studentObj.name);
document.write("<br>newStuObj name is:" + newStuObj.name);

function employee1(name, age) {
  this.name = name;
  this.age = age;
  this.empDetails = function() {
    return " name is:" + this.name + " and age is:" + this.age;
  };
}

var emp11 = new employee1("jhon", 26);
var emp22 = new employee1("Rob", 26);

document.write("<hr><br>emp11 name:" + emp11.name);
document.write("<br>emp11 age:" + emp11.age);
document.write("<br>" + emp11.empDetails());

document.write("<hr><br>emp22 name:" + emp22.name);
document.write("<br>emp22 age:" + emp22.age);
document.write("<br>" + emp22.empDetails());

//add function
myScript2.teamB.add = function(a, b, c) {
  return a + b + c;
};

function Employee111(firstName, lastName) {
  // Private Field
  var privateFullName;

  // Public Fields
  this.firstName = firstName;
  this.lastname = lastName;

  // Private Function
  var privateGetFullName = function() {
    privateFullName = firstName + " " + lastName;
    return privateFullName;
  };

  // Privileged Function
  this.privilegedGetFullName = function() {
    return privateGetFullName();
  };

  // Public Function
  Employee.prototype.publicGetFullName = function() {
    return this.privilegedGetFullName();
  };
}

var emp111 = new Employee111("robert", "hill");
var emp111Res = emp111.privilegedGetFullName();
document.write("<hr>emp111 priviliged res is:" + emp111Res);
// document.write("<br>emp111 privateFullName is:" + emp111.privateGetFullName());
console.log(emp111.privateFullName);
emp111.privateFullName = "jhon";
emp111.publicFielName = "rob";
