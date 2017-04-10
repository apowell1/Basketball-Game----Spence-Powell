/**
 * Basketball app.
 */
var ball = {

    baller: {
        curry: 0,
        paul: 1,
        harden: 2,
        irving: 3
    },

    Player: function (offense, defense, baller) {
        this.offense = offense;
        this.defense = defense;
        this.baller = null;
    },

    player: new Player(),

    computer: new Player(),


    storePlayerP: function(baller) {
        this.player.baller = baller;
        if (this.player.baller === 0) {
            this.player.offense = 1;
            this.player.defense = 1;
        }
        if (this.player.baller === 1) {
            this.player.offense = 1;
            this.player.defense = 1;
        }
        if (this.player.baller === 2) {
            this.player.offense = 1;
            this.player.defense = 1;
        }
        if (this.player.baller === 3) {
            this.player.offense = 1;
            this.player.defense = 1;
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
            this.computer.offense = 1;
            this.computer.defense = 1;
        }
        if (this.computer.baller === 1) {
            this.computer.offense = 1;
            this.computer.defense = 1;
        }
        if (this.computer.baller === 2) {
            this.computer.offense = 1;
            this.computer.defense = 1;
        }
        if (this.computer.baller === 3) {
            this.computer.offense = 1;
            this.computer.defense = 1;
        }
        console.log("The computer's choice = " + this.computer.baller);
    }
}
