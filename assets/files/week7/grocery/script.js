// Q1 (a)
let elements = document.getElementsByTagName('li');
for(i = 0; i < elements.length; i++){
  if(elements[i].className == "hot"){
    elements [i].className = "cool"    
  }
}

// Q1 (b)
let elements2 = document.getElementsByClassName('hot');
for (i=0; i<elements2.length; i++){
  if(i == 2){
    elements2[i].className = "cool"
  }
}

// Q1 (c)
let elements3 = document.getElementsByTagName('li');
for (i=0; i<elements3.length; i++){
  if(elements3[i].className == "hot"){
    elements3[i].className = "cool"
    break;
  }
}