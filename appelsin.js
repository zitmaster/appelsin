function Appelsin() {
    // alle variablerne appelsinen skal bruge for at køre
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

    //funktion der tegner cirklen og giver den farven col
    this.tegn = function () {

        fill(this.col);
        ellipse(this.x, this.y, this.rad * 2, this.rad * 2);
    }
    // funktion der får appelsinen til at bevæge sig
    this.move = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.yspeed += this.grav;
        // if statement der får bolden til at falde hurtigere hvis den hopper ud af skærmen
        if (this.y < 0) {
            this.grav = 0.5;
        } else {
            this.grav = .1;
        }

    }
    //function der appelsinen til at forsvinde når den inden ryger ud eller bliver samlet op
    this.delete = function () {

        if (this.x > width || this.y > height) {
            liv -= 1;
            if (multiplayer == false) {
                this.newshoot();
            } else {
                return true;
            }

        }

        if (this.x > mouseX - 40 && this.x < mouseX + 40 && this.y > mouseY - 40 && this.y < mouseY - 30 && this.yspeed >= 0) {
            if (multiplayer == false) {
                this.newshoot();
            } else {
                score += 1;
                return true;
            }
        }

     }
     // funktion der kun bliver brugt i singleplayer for at skyde bolden afsted igen eller vil singleplayer være lidt kedligt
    this.newshoot = function () {
        this.x = this.rad;
        this.y = random(400, 550);
        this.yspeed = this.newspeed;
        this.xspeed = random(1.5, 5);

    }

}