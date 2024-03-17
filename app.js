// Question # 01
var empty= [];

// Question # 02
var emptyArray = []; 

//Question # 03
var stingArr= ["Sajid"];

// Question # 04
var numArr= [20];

// Question # 05
var booleanArr= [true];

//Question # 06
var mixArr= ["Sajid", 24, true];

//Question # 07
document.write ("<h1>Qualifications</h1>")
var education= ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

document.write (`1 ) ${education[0]} <br>`);
document.write (`2 ) ${education[1]} <br>`);
document.write (`3 ) ${education[2]} <br>`);
document.write (`4 ) ${education[3]} <br>`);
document.write (`5 ) ${education[4]} <br>`);
document.write (`6 ) ${education[5]} <br>`);
document.write (`7 ) ${education[6]} <br>`);
document.write (`8 ) ${education[7]} <br>`);

// Question # 08
var studentName= [prompt("Enter First Name")]
var studentName1= [prompt("Enter Second Name")]
var studentName2= [prompt("Enter Third Name")]
var marks= [prompt("Enter Marks of First Student")]
var marks1= [prompt("Enter Marks of Second Student")]
var marks2= [prompt("Enter Marks of Third Student")]
var total= [(marks / 500 * 100)]
var total1= [(marks1 / 500 * 100)]
var total2= [(marks2 / 500 * 100)]

document.write (`Score of ${studentName} is ${marks}. Percentage: ${total}% </br>`);
document.write (`Score of ${studentName1} is ${marks1}. Percentage: ${total1}% </br>`);
document.write (`Score of ${studentName2} is ${marks2}. Percentage: ${total2}% </br>`);



var studentName= ["Michael", "John", "Tony"]
var marks= [320, 230, 480]

document.write(`Score of ${studentName[0]} is ${marks[0]}. Percentage: ${marks[0]/500*100}% </br>`)
document.write(`Score of ${studentName[1]} is ${marks[1]}. Percentage: ${marks[1]/500*100}% </br>`)
document.write(`Score of ${studentName[2]} is ${marks[2]}. Percentage: ${marks[2]/500*100}% </br>`)

// Question # 09
var num= [320, 230, 480, 120]

document.write(`Scores of Students: ${num} <br>`)
document.write(`Ordered Scores of Students: ${num.sort()} <br>`)

var city= ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]

document.write(`${city}<br>`)
document.write(city[2])
d