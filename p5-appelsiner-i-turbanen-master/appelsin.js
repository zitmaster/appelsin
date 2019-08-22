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

    this.move = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.yspeed += this.grav;
        
        if(this.y < 0){
        this.grav = 0.5;
        }else{
            this.grav = .1;
        }


        if(this.x > mouseX - 40 && this.x < mouseX + 40 && this.y > mouseY -40 && this.y < mouseY - 30 && this.yspeed >= 0 ){
            this.newshoot();
            return true;
        }

        if (this.x > width || this.y > height){
            liv -= 1;
            this.newshoot();
        } 
            
          


    }

    this.newshoot = function () {
        this.x = this.rad;
        this.y = random(400, 550);
        this.yspeed = this.newspeed;
        this.xspeed = random(1.5, 5);
        
    }

}