/*
 * Dette script definerer klassen Kurv
 */

function Kurv(x, y, bredde, dybde, speed) {
    /* Den første del af funktionen er en "konstruktør".
     * Den tager parametrene og konstruerer et nyt objekt 
     * ud fra dem. Værdierne huskes som hørende til netop 
     * dette objekt ved hjælp af nøgleordet this
     */

    this.x = x;
    this.y = y;
    this.bred = bredde;
    this.dyb = dybde;
    this.speed = speed;
    this.col = [250, 230, 150];

    this.tegn = function () {
        fill(this.col);
        rect(this.x, this.y, this.bred, this.dyb);
    }
    this.move = function () {
        this.x = mouseX;
        this.y = mouseY;
    }


    this.grebet = function (xa, ya, ra) {
        if ((ya < this.y + 25 && ya > this.y - 25) && xa > this.x + ra && xa < this.x + this.bred - ra) {
            return true;
        } else {
            return false;
        }
    }

}