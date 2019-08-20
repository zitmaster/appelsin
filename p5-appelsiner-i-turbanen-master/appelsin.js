function Appelsin() {

    this.x = 0;
    this.y = 550;
    this.rad = 20;
    this.xspeed = 4;
    this.yspeed = -10;
    this.newspeed;
    this.grav = 0.1;
    this.col = [200, 100, 0];
    this.apppelsinerSomIkkeErGrebet = 0;

    this.newspeed = this.yspeed;
    this.x = this.rad;

    this.tegn = function () {
        
        text("apppelsinerSomIkkeErGrebet: " + this.apppelsinerSomIkkeErGrebet, width - 200, 50);
        fill(this.col);
        ellipse(this.x, this.y, this.rad * 2, this.rad * 2);

    }
    
    this.move = function(){
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.yspeed += this.grav;
        if (this.x > width || this.y > height){
        this.newshoot();
        this.apppelsinerSomIkkeErGrebet += 1;
        }
    }

    this.appelsinx = function(){
        return this.x;
    }

    this.appelsiny = function(){
        return this.y;
    }

    this.appelsinyspeed = function(){
        return this.yspeed;
    }

    this.newshoot = function (){
        this.x = this.rad;
        this.y = random(400,550);
        this.yspeed = this.newspeed;
        this.xspeed =   random(1.5,5);
    }

}