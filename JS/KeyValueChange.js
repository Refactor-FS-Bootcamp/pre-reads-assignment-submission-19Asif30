//Pre-reads object key value change (JS)
var student = {
  name: "abc",
  id: 001,
  city: "Hosur"
}
if(student.name){
  console.log("The key 'name' exists.")
}
console.log("'name' before modified: " + student.name);
student.name = "xyz";
console.log("'name' after modification: " + student.name);
student.name = "Anver";
console.log(student.name)
