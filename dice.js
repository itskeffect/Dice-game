var score1=0, score2=0,t=10;
var turnof=0;
//start();
function start(){
    document.getElementById("turn1").innerHTML=5;
    document.getElementById("turn2").innerHTML=5;
    document.getElementById("p1Score").innerHTML=0;
    document.getElementById("p2Score").innerHTML=0;
    var w = document.getElementsByClassName("winner");
    w[0].style.display="none";
    w[1].style.display="none";
    score1=0;
    score2=0;
    t=10;
    turnof=0;
    document.querySelector(".player-1").classList.add("active");
    document.querySelector(".player-2").classList.remove("active");
    const dices=[...document.querySelectorAll(".die-list")];
        dices.forEach((die) =>{
            die.dataset.roll=1;
        });
}
  var r;
function rollTheDice(){
    //roll
    turnof+=1;
    var ndice=Math.floor( Math.random()*6+1);
    ndice%=6;
    if(ndice==0)
    ndice=6;
    if(t>0){
        const dices=[...document.querySelectorAll(".die-list")];
        dices.forEach((die) =>{
            if(die.id=="die"+turnof){
                die.classList.toggle("odd");
                die.classList.toggle("even");
               // alert(ndice);
            die.dataset.roll=ndice;
            }
            
        });
        var cscore= document.getElementById("p"+turnof+"Score").innerHTML;
        var ans = Number(cscore)+Number(ndice);
        document.getElementById("p"+turnof+"Score").innerHTML=ans;
        var cturn= document.getElementById("turn"+turnof).innerHTML;
        var turnnow=Number(cturn)-1;
        document.getElementById("turn"+turnof).innerHTML=turnnow;
        turnof-=1;
        //remove active
        document.querySelector(".player-1").classList.toggle("active");
        document.querySelector(".player-2").classList.toggle("active");
        turnof++;
        turnof%=2;
        t--;
        if(t==0)
        win();
    }
    else{
        alert("Click on Start A new game !")
    }
}
function win(){
    var s1=document.getElementById("p1Score").innerHTML;
    var w = document.getElementsByClassName("winner");
    var s2=document.getElementById("p2Score").innerHTML;
    if(s1>s2){
        w[0].style.display="block";   
    }
    else if(s2>s1){
        w[1].style.display="block";
    }
    else{
        alert("Its A Draw !!!");
    }
}
