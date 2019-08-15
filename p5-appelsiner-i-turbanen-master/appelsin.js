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
    this.apppelsinerSomIkkeErGrebet = 1;

    this.ikkeDisplay = function () {
        if (this.tid > 0) {
            this.tid -= 1;
        }
        if (tid < 100) {
            fill(this.col);
            ellipse(this.x, this.y, this.rad * 2, this.rad * 2);
        }
    }
    this.appelsinMove = function () {
        if (this.tid <= 0) {
           this.x += this.xspeed;
           this.y += this.yspeed;
           this.yspeed += this.grav;
        }
        if (this.x > width || this.y > height) {
            this.apppelsinerSomIkkeErGrebet += 1;
            shootNew();
        }
    

    }

    this.shootNewApp = function(){
        this.x = this.rad;
        this.y = 550;
        this.yspeed = this.newspeed;
        this.xspeed = 6 * Math.random();
        this.tid = (int)(Math.random() * 400);
    }









}