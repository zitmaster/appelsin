/*
Først laver vi et nogle variable til at lave en appelsin
 - en kugle som vi vil skyde afsted og fange i en turban
*/

var førstegangsstart = true;
//Document.getElementById("status").innerHTML = "I GANG";
var turbanhoved;

//Her loader vi billedet af vores "turban" / kasse
function preload() {
    turbanhoved = loadImage('flyttekasse.png');
}

//Turbanen og appelsinen
var turban;
var appelsiner = [];

//Øvrige
var score = 0;
var liv = 10;
var header;

//Variabel til knappen
var knap;
var button;
var singleplayerknap;
var multiplayerknap;
//Variabel til "død"
var dead = false;

//Multiplayer vaiablerne
var socket
var multiplayer;
var pin;
var sendboldeknap;
var hostknap;
var joinknap;
var reloadknap;
var ammo = 1;
/* 
 * 
 */
function setup() {

    let myCanvas = createCanvas(windowWidth * 0.6, windowHeight);
    myCanvas.parent("playingField");

//Knappen til "singleplayer" funktionen
    singleplayerknap = createButton("singleplayer");
    singleplayerknap.position(200 , 200);
    singleplayerknap.mouseClicked(førstegangsstarttsingelplayer);

//Knappen til "multiplayer" funktionen
    multiplayerknap = createButton("multiplayer");
    multiplayerknap.position(200 , 400);
    multiplayerknap.mouseClicked(førstegangsstartmultiplayer);

//Knappen til funktionen "host"
    hostknap = createButton("Host?");
    hostknap.position(170,300);
    hostknap.hide();
    hostknap.mouseClicked(host);

//Knap til funktionen "deltag"
    joinknap = createButton("join?");
    joinknap.position(230, 300);
    joinknap.hide();
    joinknap.mouseClicked(deltag);

//Knappen til funktionen der sender bolde
    sendboldeknap = createButton("sendbolde!");
    sendboldeknap.position(200,350);
    sendboldeknap.position(200, 350);
    sendboldeknap.hide();
    sendboldeknap.mouseClicked(sendbold);
    

    //Her laves der en knap, der er bundet til funktionen restart
    button = createButton("restart");

//Her defineres det at knappen "button" har en parent div der hedder "restartbutton"
    button.parent("restartButton");


    //Her definerers der at ved tryk på knappen skal den køre funktionen "restart"
    button.mouseClicked(restart);


    //Restart funktionen kaldes
    restart();

//Knappen til funktionen "smidbold"
    kastBold = createButton("Spawn");
    kastBold.mouseClicked(smidBold);
    kastBold.hide();
    kastBold.parent("spawnButton");

}

//Her laves funktionen der gør canvas størrelsen afhængig af browserens størrelse
function windowResized() {
    resizeCanvas(windowWidth*0.6, windowHeight);

}

function draw() {

    background(0);

    //Funktionen der bruges til at skyde appelsiner og styre antalet af liv og hvornår man mister dem
    flertaligeappelsiner();

    //Appelsinen blvier vist
    display();

    //Turbanen får bevægelse her
    turban.move();


    fill(255);


    //Viser antallet af grebne appelsiner
    text("Score: " + score, width - 80, 30);

    //Viser antalet af liv du har tilbage
    text("Liv: " + liv, width - 80, 50);


    //Hvis du har 0 liv så taber du
    if (liv <= 0) {
        dead = true;
        noLoop();
    }   


    //Hvis du er død skal den skrive det som tekst og derefter skal der vises en knap til restart og du får nye liv
    if (dead) {

        document.getElementById("status").innerHTML = "JESUS HAS BEEN CRUSIFIED!";
        dead = false;
        button.show();
        appelsiner = [];

        liv = 10;
        
        score = 0;
    }
//Hvis det er første gang du starter spillet
    if (førstegangsstart == true) {
        background(255);
        button.hide();

    }

}
//Det der sker når man klikker på singeplayer knappen
function førstegangsstarttsingelplayer(){førstegangsstart = false;
singleplayerknap.hide();
multiplayerknap.hide();
kastBold.show();

}
//Det der sker når man klikker på multiplayer knappen
function førstegangsstartmultiplayer() {
    singleplayerknap.hide();
    multiplayerknap.hide();
    kastBold.hide();
    hostknap.show();
    joinknap.show();

}
//Det der sker når man klikker på host knappen
function host() {
    socket = ElineSocket.create();
    hostknap.hide();
    joinknap.hide();
    multiplayer = true;
    førstegangsstart = false;

}
//Det der sker når man klikker på join knappen
function deltag() {
    pin = prompt("pin");
    socket = ElineSocket.connect(pin);
    hostknap.hide();
    joinknap.hide();
    sendboldeknap.show();
    reloadknap.show();


}
//Det der sker når personen der har joined klikker på sendbolde!
function sendbold() {

    socket.sendMessage("SKYD!");

}
//Function der viser id hos hosten samt kassen/turbanen
function display() {
    fill(255);

    //Viser multiplayertingende
    if (multiplayer == true) {
        text("pin: " + socket.id, 20, 40);
        if (ammo == 1) {
            socket.onMessage(smidBold);
            ammo = 0;
        }
    }
    //Her vises turbanen - foreløbig blot en firkant
    turban.tegn();
}


//Her defineres det at hvis appelsinen rammer højre kant eller bunden af canvaset så mister du 1 liv
function flertaligeappelsiner() {
    for (let i = 0; i < appelsiner.length; i++) {
        appelsiner[i].tegn();
        if (appelsiner[i].move()) {
            score += 1;
            document.getElementById("score").innerHTML = "score: " + score;
        }
        if (appelsiner[i].delete()) {
            appelsiner.splice(i, 1);
            i--;

        }

    }

}


//Her er funktionen restart der kalder turbanen, appelsinen, et loop og sætter dead til false.
function restart() {
    turban = new Kurv(670, 100, 70, 80, 30);
    dead = false;
    loop();
    button.hide();
    document.getElementById("status").innerHTML = "JESUS IS ALIVE!!!!!";
}


//Funktionen der kaster bolde i multiplayer udgaven af spillet
function smidBold(msg) {
    console.log(msg);
    appelsiner.push(new Appelsin());

}


/* ting vi kunne gøre:
bedre og måske endda interaktiv måde at kaste bolden på

*/