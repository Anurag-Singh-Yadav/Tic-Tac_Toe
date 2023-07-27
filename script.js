let arr = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
let winner = 0;
let allbox = document.getElementsByClassName('box');

let checkWinners =function () {
    
    let winner_combinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let i = 0; i < winner_combinations.length; i++){
        if(arr[winner_combinations[i][0]] == arr[winner_combinations[i][1]] && arr[winner_combinations[i][1]] == arr[winner_combinations[i][2]] && arr[winner_combinations[i][0]]!= -1){
            
            for(let j = 0;j < 3;j++){
                let a = 'box' + (winner_combinations[i][j] +1);
                document.querySelector('.'+ a).classList.add('green-background');
            }
            player.innerHTML = 'Winner Player :'+ arr[winner_combinations[i][0]];
            document.querySelector('.reset').classList.remove('display-class');
            
            return true; 
        } 
    }
    return 0;
}

let turn = 0;
let player = document.querySelector('.player-info');
if(turn == 0){
    player.innerHTML = 'Current Player: 0';
}
function whenclick(event){
    if(winner)return ;
if(turn % 2 != 0){
    player.innerHTML = 'Current Player: O';
}else{
    player.innerHTML = 'Current Player: X';
}
    let all_class = event.target.className.split(' ');
    let to_click = all_class[2][3]-1;
    let clicked_class = all_class[2];
    console.log(clicked_class);
    if(arr[to_click] != -1){
        return;
    }
    if(turn % 2 == 0){
        arr[to_click] = 'O';
        turn++;
        document.querySelector('.'+ clicked_class).innerHTML = 'O';
        if(checkWinners()){
            winner = 1;
            console.log('winner');
        }

    }else{
        arr[to_click] = 'X';
        turn++;
        document.querySelector('.'+ clicked_class).innerHTML = 'X';
        if(checkWinners()){
            winner = 1;
            console.log('winner');
        }
    }
}

document.querySelector('.submit').addEventListener('click', function(){
    window.location.reload();
})


for(let key of allbox){
    if(winner){
        for(let i = 0;i < 9;i++){
            arr[i] = -1;
        }
        break;
    }
    key.addEventListener('click',whenclick)
}