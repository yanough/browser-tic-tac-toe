const cells = document.getElementsByClassName('cell');

const player1 = document.getElementById('player1');

const  player2 = document.getElementById('player2');

const  round = document.getElementById('round');

const vaziaat = document.getElementById("situation");

const resetbutton = document.getElementById("resetbtn");

vaziaat.innerHTML="X's turn"
let player = "X";

var x_points =0;
var o_points =0;
var round_point =1;


var endgame = false;
var clicked =0;


for(let i=0 ; i<cells.length ; i++){
    cells[i].addEventListener('mouseover', function(){
        if (!endgame) {
            cells[i].style.backgroundColor = 'pink'; // تغییر رنگ
        }    })
   
    cells[i].addEventListener('mouseout' , function(){
        if (!endgame) {
            cells[i].style.backgroundColor = 'burlywood'; // تغییر رنگ
        }    })

    cells[i].addEventListener('click' , function(){
        if(!endgame && clicked<9){
            if(cells[i].innerHTML !=="X" && cells[i].innerHTML !=="O"){
                cells[i].style.backgroundColor = 'cornflowerblue'
                cells[i].innerHTML=player;
                const winner = win();
                if(player=="X"){
                    ++clicked;
                    player="O";
                    vaziaat.innerHTML="O's turn"
                    if(winner){
                        endgame=true;
                        x_points++;
                        player1.innerHTML="Player 1:    "+ x_points;
                        vaziaat.innerHTML="X won";
                        vaziaat.style.backgroundColor="yellow";
                        player= "X"
                    }
                }
                else if(player=="O"){
                    ++clicked;
                    player="X";
                    vaziaat.innerHTML="X's turn"
                    if(winner){
                        endgame=true;
                        o_points++;
                        player2.innerHTML="Player 2:    "+ o_points;
                        vaziaat.innerHTML="O won";
                        vaziaat.style.backgroundColor="yellow";
                        player="O";

                    }
                }
                
                if(clicked==9 && !winner){
                    cells[i].style.backgroundColor = 'cornflowerblue'
                    cells[i].innerHTML=player;
                    vaziaat.innerHTML="   Even";
                    vaziaat.style.backgroundColor="pink";
                    }
            }
            else{
                alert('already full! Choose another cell');
            }
        }
        else{
            
            if(x_points == 5 || o_points ==5){
                alert('game over');
                for(let i=0 ; i<cells.length ; i++){
                    clicked=0;
                    endgame=false;
                    player="X";
                    vaziaat.innerHTML="X's turn"
                    cells[i].innerHTML="";
                    vaziaat.style.background=" rgba(0, 204, 255, 0.596)"
                    x_points =0;
                    player1.innerHTML="Player 1:    "+ x_points;
                    o_points =0;
                    player2.innerHTML="Player 2:    "+ o_points;
                    round_point =0;


                }

            }
            
            round_point++
            round.innerHTML="Round "+round_point;
            for(let i=0 ; i<cells.length ; i++){
                clicked=0;
                endgame=false;
                vaziaat.innerHTML= player + "'s turn"
                cells[i].innerHTML="";
                cells[i].style.backgroundColor = 'burlywood';
                vaziaat.style.background=" rgba(0, 204, 255, 0.596)"
            }
            
                
        }
    })
}


function win(){
    let isTrue = false
    for(i=0 ; i<=6 ; i+=3){ //برای سه ردیف عمودی
        if(cells[i].innerHTML==cells[i+1].innerHTML && cells[i+1].innerHTML==cells[i+2].innerHTML && cells[i].innerHTML!==""){
            cells[i].style.backgroundColor = 'lightgreen'; // تغییر رنگ
            cells[i+1].style.backgroundColor = 'lightgreen';
            cells[i+2].style.backgroundColor = 'lightgreen';
            isTrue = true;
                
            }}


    for(i=0 ; i<=2 ; i++){ //برای سه ردیف افقی
        if(cells[i].innerHTML==cells[i+3].innerHTML && cells[i+3].innerHTML==cells[i+6].innerHTML && cells[i].innerHTML!==""){
            cells[i].style.backgroundColor = 'lightgreen'; // تغییر رنگ
            cells[i+3].style.backgroundColor = 'lightgreen';
            cells[i+6].style.backgroundColor = 'lightgreen';
            isTrue = true;
            
            }}

        if(cells[0].innerHTML==cells[4].innerHTML && cells[4].innerHTML==cells[8].innerHTML && cells[0].innerHTML!==""){
            cells[0].style.backgroundColor = 'lightgreen'; // تغییر رنگ
            cells[4].style.backgroundColor = 'lightgreen';
            cells[8].style.backgroundColor = 'lightgreen';
            isTrue = true;
            }

        if(cells[2].innerHTML==cells[4].innerHTML && cells[4].innerHTML==cells[6].innerHTML && cells[2].innerHTML!==""){
            cells[2].style.backgroundColor = 'lightgreen'; // تغییر رنگ
            cells[4].style.backgroundColor = 'lightgreen';
            cells[6].style.backgroundColor = 'lightgreen';
            isTrue = true;
            }

        return isTrue;
}


resetbutton.addEventListener('click' , function(){
    for(let i=0 ; i<cells.length ; i++){
        clicked=0;
        endgame=false;
        player="X";
        vaziaat.innerHTML="X's turn"
        cells[i].innerHTML="";
        cells[i].style.backgroundColor = 'burlywood';
        vaziaat.style.background=" rgba(0, 204, 255, 0.596)"

    }
})

resetbutton.addEventListener('mouseover', function() {
    resetbutton.style.backgroundColor = 'crimson';
    resetbutton.style.color = 'white';
});

resetbutton.addEventListener('mouseout', function() {
    resetbutton.style.backgroundColor = 'blanchedalmond';
    resetbutton.style.color = 'black';
});
