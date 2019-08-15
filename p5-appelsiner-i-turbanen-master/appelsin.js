function Appelsin() {

    this.x = 0;
    this.y = 550;
    this.rad = 20;
    this.xspeed = 4;
    this.yspeed = -10;
    this.newspeed;
    this.grav = 0.1;
    this.col = [200, 100, 0];

    this.tid = 150;

    /*this.tegn = function () {
            fill(this.col);
            ellipse(this.x, this.y, this.rad * 2, this.rad * 2);
        
    }*/

    this.newspeed = this.yspeed;
    this.x = this.rad;

    this.tegn = function () {
            fill(this.col);
            ellipse(this.x, this.y, this.rad * 2, this.rad * 2);
    }


    //this.appelsinMove = function () {    }

    /*this.shootNewApp = function(){
        this.x = this.rad;
        this.y = 550;
        this.yspeed = this.newspeed;
        this.xspeed = 6 * Math.random();
        this.tid = (int)(Math.random() * 400);
    }*/









}