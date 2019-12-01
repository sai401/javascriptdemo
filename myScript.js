var myScript = myScript != undefined ? myScript : {};
myScript.teamA = myScript.teamA != undefined ? teamA : {};
document.getElementById("demo").innerHTML = "Hello JavaScript!";
var num1 = "jhon";
var num2 = 12 + 10;
var res1 = num1 + num2;
document.write(res1 + "| ");

var res2 = 10 + 20 + "jhon";

document.write(res2 + "| ");

var res3 = "jhon" + 10 + 20;

document.write(res3);

//filter, map, reduce
var arr1 = ["jhon", "elden", "ram", "mohan"];
var arr2 = new Array("jhon", "elden", "ram", "mohan");
console.log("string array:" + arr1);
console.log("string array:" + arr2);

var arr3 = [1, 2, 3, 4, 5];
var arr4 = new Array(1, 2, 3, 4, 5);
var arr5 = new Array(10);
console.log("number array:" + arr3);
console.log("number array:" + arr4);
console.log("number array:" + arr5);

var arr6 = new Array("ramarao");
console.log(arr6);

console.log("array of string type:" + typeof arr1);
console.log("array of numbers type:" + typeof arr3);

var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("arr1").innerHTML = text;

var arr7 = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  }
];

var arrRes = arr7.filter(function(value, index) {
  if (value.type === "dog") {
    return true;
  }
});

console.log("filter res" + arrRes);

var mapRes = arr7.map(function(v, i, arr) {
  return v.name;
});

console.log("map result:" + mapRes);

var reduceArr = [1, 2, 3, 4, 5];
var reduceRes = reduceArr.reduce(function(sum, value) {
  return sum + value;
}, 5);

console.log("sum result:" + reduceRes);

//substring
var subStringStr = "saikietece@gmail.com";
var subStringRes1 = subStringStr.substring(0, 5);
var subStringRes2 = subStringStr.substring(3);
var subStringRes3 = subStringStr.substring(6, 2);
var subStringRes4 = subStringStr.substring(-4);
console.log("substring:" + subStringRes1);
console.log("substring:" + subStringRes2);
console.log("substring:" + subStringRes3);
console.log("substring:" + subStringRes4);

//substr
var subStrStringRes = "saikietece@gmail.com81234";
var subStrStringRes1 = subStrStringRes.substr(0, 5);
var subStrStringRes2 = subStrStringRes.substr(3);
var subStrStringRes3 = subStrStringRes.substr(6, 4);
var subStrStringRes4 = subStrStringRes.substr(-4, 3);
console.log("substr:" + subStrStringRes1);
console.log("substr:" + subStrStringRes2);
console.log("substr:" + subStrStringRes3);
console.log("substr:" + subStrStringRes4);

//slice
var sliceString = "saikietece@gmail.com";
var sliceStringRes1 = sliceString.slice(0, 5);
var sliceStringRes2 = sliceString.slice(3);
var sliceStringRes3 = sliceString.slice(6, 2);
var sliceStringRes4 = sliceString.slice(-4, -2);
console.log("slice:" + sliceStringRes1);
console.log("slice:" + sliceStringRes2);
console.log("slice:" + sliceStringRes3);
console.log("slice:" + sliceStringRes4);

//add function
myScript.teamA.add = function(a, b) {
  return a + b;
};
