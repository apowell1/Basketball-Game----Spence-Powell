/**
 * Basketball app.
 */
var ball = {
    ballerNames: [
    'Curry'
    , 'Paul'
    , 'Harden'
    , 'Irving'
    ]
    , displayW: function (outputId) {
        var outputText = "";
        outputText = 'YOU WON!';
        document.getElementById(outputId).style.color = "Green";
        document.getElementById(outputId).style.textAlign = "Left";
        document.getElementById(outputId).innerHTML = outputText;
    }
    , displayL: function (outputId) {
        var outputText = "";
        outputText = 'YOU LOST!';
        document.getElementById(outputId).style.color = "Red";
        document.getElementById(outputId).style.textAlign = "Left";
        document.getElementById(outputId).innerHTML = outputText;
    }
    , baller: {
        Curry: {
            threePoint: 95
            , twoPoint: 71
            , defense: 86
        }
        , Paul: {
            threePoint: 85
            , twoPoint: 71
            , defense: 90
        }
        , Harden: {
            threePoint: 82
            , twoPoint: 94
            , defense: 75
        }
        , Irving: {
            threePoint: 88
            , twoPoint: 68
            , defense: 82
        }
    , }
    , firstPlayer: null
    , secondPlayer: null
    , firstPlayerName: ''
    , secondPlayerName: ''
    , player1Score: 0
    , player2Score: 0
    , choosePlayer: function (player) {
        var confirm = window.confirm("You have chosen " + player + ".");
        if (confirm) {
            ball.firstPlayer = ball.baller[player];
            for (var i = 0; i < ball.ballerNames.length; i++) {
                if (player === ball.ballerNames[i]) {
                    ball.ballerNames.splice(i, 1);
                    break;
                }
            }
            console.log("firstPlayer =>", player);
            ball.firstPlayerName = player;
            console.log(ball.firstPlayer);
            ball.secondPlayerName = ball.ballerNames[Math.floor(Math.random() * ball.ballerNames.length)];
            $('#pconsole').append('<br/>' + 'You are playing as ' + ball.firstPlayerName + '.' + ' You are playing against ' + ball.secondPlayerName + '.' + '<hr>');
            console.log("secondPlayer =>", ball.secondPlayerName);
            ball.secondPlayer = ball.baller[ball.secondPlayerName];
            console.log(ball.secondPlayer);
        }
    }
    , calcScore: function (num) {
        if (ball.firstPlayer && ball.secondPlayer) {
            var firstRand = Math.random();
            var firstTwo = .5 + ((ball.firstPlayer.twoPoint - ball.secondPlayer.defense) / 200);
            var secondRand = Math.random();
            var firstThree = .5 + ((ball.firstPlayer.threePoint - ball.secondPlayer.defense) / 200);
            var thirdRand = Math.random();
            var secondTwo = .5 + ((ball.secondPlayer.twoPoint - ball.firstPlayer.defense) / 200);
            var fourthRand = Math.random();
            var secondThree = .5 + ((ball.secondPlayer.threePoint - ball.firstPlayer.defense) / 200);
            var compRand = Math.floor(Math.random() * 2);
            if (num === 2) {
                if (firstRand < firstTwo) {
                    ball.player1Score += 2;
                    $('#p1').text(ball.player1Score);
                    $('#pconsole').append(ball.firstPlayerName + ' makes a 2 point shot.');
                }
                else {
                    $('#pconsole').append(ball.firstPlayerName + ' misses a 2 point shot.');
                }
            }
            if (num === 3) {
                if (secondRand < firstThree) {
                    ball.player1Score += 3;
                    $('#p1').text(ball.player1Score);
                    $('#pconsole').append(ball.firstPlayerName + ' makes a 3 point shot.');
                }
                else {
                    $('#pconsole').append(ball.firstPlayerName + ' misses a 3 point shot.');
                }
            }
            if (compRand == 0) {
                if (thirdRand < secondTwo) {
                    ball.player2Score += 2;
                    $('#p2').text(ball.player2Score);
                    $('#pconsole').append(' ' + ball.secondPlayerName + ' makes a 2 point shot.' + '<hr>');
                }
                else {
                    $('#pconsole').append(' ' + ball.secondPlayerName + ' misses a 2 point shot.' + '<hr>');
                }
            }
            if (compRand == 1) {
                if (fourthRand < secondThree) {
                    ball.player2Score += 3;
                    $('#p2').text(ball.player2Score);
                    $('#pconsole').append(' ' + ball.secondPlayerName + ' makes a 3 point shot.' + '<hr>');
                }
                else {
                    $('#pconsole').append(' ' + ball.secondPlayerName + ' misses a 3 point shot.' + '<hr>');
                }
            }
            if (ball.player2Score >= 21 && ball.player2Score > ball.player1Score) {
                alert(ball.secondPlayerName + ' won! GAME OVER.');
                ball.displayL('signal');
            }
            else if (ball.player1Score >= 21) {
                alert(ball.firstPlayerName + ' won! GAME OVER.');
                ball.displayW('signal');
            }
        }
        else {
            alert('Please choose a player first.');
        }
    }
}
