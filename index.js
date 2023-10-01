const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');
const block4 = document.getElementById('block4');
const block5 = document.getElementById('block5');
const block6 = document.getElementById('block6');
const block7 = document.getElementById('block7');
const block8 = document.getElementById('block8');
let jumping = 0;
let score = 0;
function Bar1() {
    var random = Math.floor(Math.random()*350 );
    block1.style.height = random + "px";    
    var val = 504 - (random + 150);  
    block2.style.height = val + "px";
    score++;
}
block1.addEventListener('animationiteration',Bar1)
block2.addEventListener('animationiteration',Bar1)
function Bar2() {
    var random = Math.floor(Math.random()*350 );
    block3.style.height = random + "px";
    var val = 504 - (random + 150);
    block4.style.height = val + "px";
    score++;
}
block3.addEventListener('animationiteration',Bar2)
block4.addEventListener('animationiteration',Bar2)
function Bar3() {
    var random = Math.floor(Math.random()*350 );
    block5.style.height = random + "px";
    var val = 504 - (random + 150);
    block6.style.height = val + "px";
    score++;
}
block5.addEventListener('animationiteration',Bar3)
block6.addEventListener('animationiteration',Bar3)
var fall = setInterval(function(){
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping == 0){
        bird.style.top = (birdTop + 2) + "px";
    }
    var block1Top = parseInt(window.getComputedStyle(block1).getPropertyValue("top"));
    var block2Top = parseInt(window.getComputedStyle(block2).getPropertyValue("top"));
    var block1Left = parseInt(window.getComputedStyle(block1).getPropertyValue("left"));
    var block2Left = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
    var b2Rtop = 504-block2Top;
    var block3Top = parseInt(window.getComputedStyle(block3).getPropertyValue("top"));
    var block4Top = parseInt(window.getComputedStyle(block4).getPropertyValue("top"));
    var block3Left = parseInt(window.getComputedStyle(block3).getPropertyValue("left"));
    var block4Left = parseInt(window.getComputedStyle(block4).getPropertyValue("left"));
    var b4Rtop = 504-block4Top;
    var block5Top = parseInt(window.getComputedStyle(block5).getPropertyValue("top"));
    var block6Top = parseInt(window.getComputedStyle(block6).getPropertyValue("top"));
    var block5Left = parseInt(window.getComputedStyle(block5).getPropertyValue("left"));
    var block6Left = parseInt(window.getComputedStyle(block6).getPropertyValue("left"));
    var b6Rtop = 504-block6Top;
    var block7Top = parseInt(window.getComputedStyle(block7).getPropertyValue("top"));
    var block8Top = parseInt(window.getComputedStyle(block8).getPropertyValue("top"));
    var block7Left = parseInt(window.getComputedStyle(block7).getPropertyValue("left"));
    var block8Left = parseInt(window.getComputedStyle(block8).getPropertyValue("left"));
    var b8Rtop = 504-block8Top;
    if(((birdTop < block1Top) || (birdTop > b2Rtop)) && (block1Left < 397) || (block2Left < 397)){
        result.style.display = "block";
        text.innerText = `Score : ${score/2}`;
        game.style.display = "none";   
    }
    else if(((birdTop < block3Top) || (birdTop > b4Rtop)) && ((block3Left < 397) || (block4Left < 397))){
        result.style.display = "block";
        text.innerText = `Score : ${score/2}`;
        game.style.display = "none";        
    }
    else if(((birdTop < block5Top) || (birdTop > b6Rtop)) && ((block5Left < 397) || (block6Left < 397))){
        result.style.display = "block";
        text.innerText = `Score : ${score/2}`;
        game.style.display = "none";        
    }
    else if(((birdTop < block7Top) || (birdTop > b8Rtop)) && ((block7Left < 397) || (block8Left < 397))){
        result.style.display = "block";
        text.innerText = `Score : ${score/2}`;
        game.style.display = "none";
    }
},10);
function jump(){
    jumping = 1;
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(birdTop > 6){
    bird.style.top = (birdTop - 60) + "px";
    }
    setTimeout(function(){
        jumping = 0;
    },100)
}
document.addEventListener('click',jump)