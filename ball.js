/**
 * Basketball app.
 */
var ball = {

    choice: {
       inside: 0,
       outside: 1
   },

    score: {
        playerH: 0,
        computer: 0
    },

    result: {
        miss: 0,
        make: 1
    },

    player: function (threePoint, pullUp, dunk, defense) {
        this.threePoint = threePoint;
        this.pullUp = pullUp;
        this.dunk = dunk;
        this.defense = defense;
    },

    computer: function (compDefense, offense) {
        this.compDefense = compDefense;
        this.offense = offense;
    }

    var curryP = new player (95, 86, 36, 82);
    var hardenP = new player (82, 83, 84, 71);
    var paulP = new player (85, 94, 27, 86);
    var irvingP = new player (88, 86, 30, 78)

    var curryC = new computer (82, 88);
    var hardenC = new computer (71, 85);
    var paulC = new computer (86, 85);
    var irvingC = new computer (78, 84);
}
