//Fill in the ??? to complete the function object.
function Singer(name, speciality, power, hitpoints, manaPoints, level, gender, skills) {
  this.name = name;
  this.speciality = speciality;
  this.power = power;
  this.hitpoints = hitpoints;
  this.manaPoints = manaPoints
  this.level = level;
  this.gender = gender;
  this.skills = skills
  this.maxPower = function(power, level, hitpoints, skills) {
    return power * level - hitpoints;
  };
  this.singerProfile = function() {
    return `${this.name} Level: ${this.level}<br>Gender: ${this.gender}<br>Specialty: ${this.speciality}.<br>Power: ${this.power}!<br>Hitpoints: ${this.hitpoints}<br>Manapoints: ${this.manaPoints}<br>Skills: ${this.skills}`
  };
  this.getDamaged = function() {
    this.hitpoints = "Critically Weak";
  }
}

//Create the function objects momobae and minabae.
let momobae = new Singer("Momobae", "K-Pop", 49, "Weak", 90, 7, "Female", ["Momo Bash", "Sing", "Sleep talk", "Power Smash"]);
let minabae = new Singer("Minabae", "C-Pop", 54, "Strong", 68, 10, "Female", ["Mina Punch", "Sing", "Kick", "Power Kick"]);

minabae.getDamaged();
let singers = [momobae, minabae];

for(i=0; i<2; i++){
  singers[i].singerProfile(singers[i].name, singers[i].level, singers[i].gender, singers[i].specialty, singers[i].power, singers[i].skills);
}
//create a new element using javascript
let newDiv1 = document.createElement("div");
//add class to element through javascript
newDiv1.classList.add("mystyle")
// and give it some content
newDiv1.innerHTML = "Momobae's Singer Profile: <br>" + momobae.singerProfile();
//add the div to the body of the html
document.body.appendChild(newDiv1);

//create a new element using javascript
let newDiv2 = document.createElement("div");
//add class to element through javascript
newDiv2.classList.add("mystyle")
// and give it some content
newDiv2.innerHTML = "Minabae's Singer Profile: <br>" + minabae.singerProfile();
//add the div to the body of the html
document.body.appendChild(newDiv2);