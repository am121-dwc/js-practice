let user_hand;
let js_hand;
let judge;

while (true) {
    user_hand = prompt('choose your hand. rock, scissors, paper');
    js_hand = getJShand();
    if (user_hand === null) {
        alert('please retry ...');
        break; // ループを抜ける
    }

    if (user_hand === 'rock' || user_hand === 'scissors' || user_hand === 'paper') {
        judge = winLose(user_hand, js_hand);
        alert('your hand is ... ' + user_hand + '\nJavascript hand is ... ' + js_hand + '\n... ' + judge);
        break; // 正しい入力があった場合にループを終了
    } else{
        alert('rock, scissors, paper only');
    }
}

function getJShand() {
    let js_hand_num = Math.floor(Math.random() * 3);
    let hand_name;

    if (js_hand_num === 0) {
        hand_name = 'rock';
    } else if (js_hand_num === 1) {
        hand_name = 'scissors';
    } else if (js_hand_num === 2) {
        hand_name = 'paper';
    }
    return hand_name;
}

function winLose(user, js) {
    let winLoseStr;
    if (user === 'rock') {
        if (js === 'rock') {
            winLoseStr = 'Draw';
        } else if (js === 'scissors') {
            winLoseStr = 'Win';
        } else if (js === 'paper') {
            winLoseStr = 'Lose';
        }

    } else if (user === 'scissors') {
        if (js === 'rock') {
            winLoseStr = 'Lose';
        } else if (js === 'scissors') {
            winLoseStr = 'Draw';
        } else if (js === 'paper') {
            winLoseStr = 'Win';
        }
    } else if (user === 'paper') {
        if (js === 'rock') {
            winLoseStr = 'Win';
        } else if (js === 'scissors') {
            winLoseStr = 'Lose';
        } else if (js === 'paper') {
            winLoseStr = 'Draw';
        }
    }
    return winLoseStr;
}
