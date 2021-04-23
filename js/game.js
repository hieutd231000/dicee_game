$(".go").click(function(){
    play();
});
$(".refresh").click(function(){
    location.reload();
});
function play(){
    var randomNumber1 = Math.ceil(Math.random()*6);
    document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
    var randomNumber2 = Math.ceil(Math.random()*6);
    document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
    if(randomNumber1==randomNumber2){
        document.querySelector("h1").textContent = "Draw!";
    }else if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 win!";
    }else{
        document.querySelector("h1").textContent = "Player 2 win!";
    }
}
