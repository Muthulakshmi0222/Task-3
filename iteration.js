var json = [{
    "studentrollno" : "1",
    "Name" : "Vaishnavi",
    "class" : "B28",
    "emailid" : "vaishnavi22@gmail.com",
    "age" : "19"
},
{
    "studentrollno" : "2",
    "Name" : "Muthulakshmi",
    "class" : "B28",
    "emailid" : "muthulakshmi02@gmail.com",
    "age" : "20"
},
  {
    "studentrollno" : "3",
    "Name" : "Priya",
    "class" : "B28",
    "emailid" : "priya3@gmail.com",
    "age" : "24"
  }
];
for(var i = 0; i < json.length; i++) {
    var obj=json[i];
    console.log(obj.age);
}
for(let key in json){
    console.log(json[key].Name);
}
for(let enroll of json){
    console.log(enroll.emailid);
}
json.forEach(function(item){
    console.log('studentenrollno: ' + item.studentrollno);
    console.log('Name: ' + item.Name);
    console.log('class: ' + item.class);
    console.log('emailid: ' + item.emailid);
    console.log('age:' + item.age);
  });