const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for(let i =0; i<data.length; i++){
    console.log(data[i]);
  }
}

// 2. Add Data
function addData() {
  let devname = prompt("Please enter your name");
  let devage = prompt("how old are you ?");
  let devprofession = prompt("what is your profession ?");
  data.push( {name: devname, age: parseInt(devage), profession: devprofession} );
  printDeveloper();
}

// 3. Remove Admins
function removeAdmin() {
  for(let i = 0; i<data.length; i++){
    if(data[i].profession == "admin"){
      data.splice(i,1);
    }
  }
  printDeveloper();
}

// 4. Concatenate Array
function concatenateArray() {

  let eg = [{name: "Puneeth Gaikwad L", age:23, profession:"developer"}];
  console.log(data.concat(eg));
}
// 5. Average Age
function averageAge() {
  let avgAge = 0;
  for(let i = 0; i<data.length; i++){
    avgAge += data[i].age;
  }
  console.log(avgAge/data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  for(let i =0; i< data.length; i++){
    if(data[i].age>=25){
      console.log(data[i]);
    }
  }
}

// 7. Unique Professions
function uniqueProfessions() {

  let set = new Set();

  for(let i = 0; i< data.length; i++){
    if(!set.has(data[i].profession)){
      set.add(data[i].profession);
    }
  }
  console.log(set);
  return set;
}

// 8. Sort by Age
function sortByAge() {
  data.sort(function(a,b){
    let x = a.age; let y = b.age;
    return ((x<y) ? -1 :((x>y) ? 1 : 0));
  });

  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  for(let i =0; i< data.length; i++){
    if(data[i].name == "john"){
      data[i].profession = "manager";
    }
  }
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let set = uniqueProfessions();
  console.log(set.size);
}
