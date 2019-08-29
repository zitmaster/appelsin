/*
 * Dette script definerer klassen Kurv
 */

function Kurv(x, y, bredde, dybde, speed) {


    this.x = x;
    this.y = y;
    this.bred = bredde;
    this.dyb = dybde;
    this.speed = speed;
    this.col = [250, 230, 150];

    this.tegn = function () {
        fill(this.col);
        image(turbanhoved, this.x, this.y, this.bred, this.dyb);
    }
    this.move = function () {

        this.x = mouseX - (this.bred / 2);
        this.y = mouseY - (this.dyb / 2);
    }



}