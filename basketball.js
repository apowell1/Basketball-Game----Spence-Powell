/**
 * Basketball app.
 */
var ball = {

    Player: function(offense, defense, baller) {
        this.offense = offense;
        this.defense = defense;
        this.baller = baller;
    },

    player: new Player(),

    computer: new Player(),

    storePlayerP: function(number) {
        this.player.baller = number;
        if (this.player.baller === 0) {
            this.player.offense = 83;
            this.player.defense = 90;
        }
        if (this.player.baller === 1) {
            this.player.offense = 88;
            this.player.defense = 86;
        }
        if (this.player.baller === 2) {
            this.player.offense = 93;
            this.player.defense = 75;
        }
        if (this.player.baller === 3) {
            this.player.offense = 83;
            this.player.defense = 82;
        }
        console.log("My choice = " + this.player.baller);
        this.storeComputerP();
    },

    storeComputerP: function() {
        var num = Math.floor(Math.random() * 4);
        while (this.player.baller === num) {
        num = Math.floor(Math.random() * 4);
        }
        this.computer.baller = num;
        if (this.computer.baller === 0) {
            this.computer.offense = 83;
            this.computer.defense = 90;
        }
        if (this.computer.baller === 1) {
            this.computer.offense = 88;
            this.computer.defense = 86;
        }
        if (this.computer.baller === 2) {
            this.computer.offense = 93;
            this.computer.defense = 75;
        }
        if (this.computer.baller === 3) {
            this.computer.offense = 83;
            this.computer.defense = 82;
        }
        console.log("The computer's choice = " + this.computer.baller);
    }
}
