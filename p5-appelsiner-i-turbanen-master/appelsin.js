function Appelsin() {

    this.x = 0;
    this.y = 550;
    this.rad = 20;
    this.xspeed = 4;
    this.yspeed = -10;
    this.newspeed;
    this.grav = 0.1;
    this.col = [200, 100, 0];
    

    this.newspeed = this.yspeed;
    this.x = this.rad;

    this.tegn = function () {
        
        
        fill(this.col);
        ellipse(this.x, this.y, this.rad * 2, this.rad * 2);

    }
    
    this.move = function(){
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.yspeed += this.grav;
        if (this.x > width || this.y > height){
        this.newshoot();
        liv -= 1;
        }
        if(this.y < 0){
            this.grav = 0.5;
        }else{
            this.grav = 0.1;
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
        this.y = random(200,550);
        this.yspeed = this.newspeed;
        this.xspeed =   random(1.5,5);
    }

}