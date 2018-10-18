var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1res = document.querySelector("#p1res");
var p2res = document.querySelector("#p2res");
var numIn = document.querySelector("input");
var winscoredisplay = document.querySelector("#winscore");
var p1score = 0;
var p2score = 0;
var winscore = 5;
var end = false;
p1.addEventListener("click", function(){
  if(!end) {
    p1score++;
    if(p1score == winscore) {
      p1res.classList.add("winner");
      end = true;
    }
    p1res.textContent = p1score;
  }
});

p2.addEventListener("click", function(){
  if(!end) {
    p2score++;
    if(p2score == winscore) {
      p2res.classList.add("winner");
      end = true;
    }
    p2res.textContent = p2score;
  }
});

function resetf(){
  p1score = 0;
  p2score = 0;
  p1res.textContent = 0;
  p2res.textContent = 0;
  p1res.classList.remove("winner");
  p2res.classList.remove("winner");
  end = false;
}

reset.addEventListener("click", function(){
  resetf();
});



numIn.addEventListener("change", function(){
  winscoredisplay.textContent = numIn.value;
  winscore = numIn.value;
  resetf();
});
