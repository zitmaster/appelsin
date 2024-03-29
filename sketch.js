/*
Først laver vi et nogle variable til at lave en appelsin
 - en kugle som vi vil skyde afsted og fange i en turban
*/

var førstegangsstart = true;
//document.getElementById("status").innerHTML = "I GANG";
var turbanhoved;

// her loader vi billedet af vores "turban" / kasse
function preload() {
    turbanhoved = loadImage('flyttekasse.png');
}

// Turbanen og appelsinen
var turban;
var appelsiner = [];

// Øvrige
var score = 0;
var liv = 10;
var header;

// variabel til knappen
var knap;
var button;
var singleplayerknap;
var multiplayerknap;
// variabel til "død"
var dead = false;

//multiplayer vaiablerne
var socket
var multiplayer = false;
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


    singleplayerknap = createButton("singeplayer");
    singleplayerknap.position(200 , 200);
    singleplayerknap.mouseClicked(førstegangsstarttsingelplayer);

    multiplayerknap = createButton("multiplayer");
    multiplayerknap.position(200 , 400);
    multiplayerknap.mouseClicked(førstegangsstartmultiplayer);

    hostknap = createButton("Host?");
    hostknap.position(170,300);

    hostknap.hide();
    hostknap.mouseClicked(host);

    joinknap = createButton("join?");

    joinknap.position(230, 300);

    joinknap.hide();
    joinknap.mouseClicked(deltag);

    sendboldeknap = createButton("sendbolde!");

    sendboldeknap.position(200,350);

    sendboldeknap.position(200, 350);

    sendboldeknap.hide();
    sendboldeknap.mouseClicked(sendbold);

    reloadknap = createButton("lad Pistolen");
    reloadknap.position(200, 400);
    reloadknap.hide();
    

    //her laves der en knap, der er bundet til funktionen restart
    button = createButton("restart");


    button.parent("restartButton");


    // her definerers der at ved tryk på knappen skal den køre funktionen "restart"
    button.mouseClicked(restart);


    //restart funktionen kaldes
    restart();

    
    kastBold = createButton("Spawn");
    kastBold.mouseClicked(smidBold);
    //kastBold.hide();
    kastBold.parent("spawnButton");

}
function windowResized() {
    resizeCanvas(windowWidth*0.6, windowHeight);

}

function draw() {

    background(0);

    flertaligeappelsiner();

    // appelsinen blvier vist
    display();

    //turbanen får bevægelse her
    turban.move();

    //kollision med appelsin = point, miss = mistet liv

    fill(255);


    //viser antallet af grebne appelsiner
    text("Score: " + score, width - 80, 30);

    //viser antalet af liv du har tilbage
    text("Liv: " + liv, width - 80, 50);


    //Hvis du har 0 liv så taber du
    if (liv <= 0) {
        dead = true;
        noLoop();
    }   


    //hvis du er død skal den skrive det som tekst og derefter skal der vises en knap til restart og du får nye liv

    if (dead) {

        document.getElementById("status").innerHTML = "JESUS HAS BEEN CRUSIFIED!";
        dead = false;
        button.show();
        appelsiner = [];

        liv = 10;
        
        score = 0;
    }

    if (førstegangsstart == true) {
        background(255);
        button.hide();

    }

}
// det der sker når man klikker på singeplayer knappen
function førstegangsstarttsingelplayer(){førstegangsstart = false;
singleplayerknap.hide();
multiplayerknap.hide();
kastBold.show();

}
// det der sker når man klikker på multiplayer knappen
function førstegangsstartmultiplayer() {
    singleplayerknap.hide();
    multiplayerknap.hide();
    kastBold.hide();
    hostknap.show();
    joinknap.show();

}
// det der sker når man klikker på host knappen
function host() {
    socket = ElineSocket.create();
    hostknap.hide();
    joinknap.hide();
    multiplayer = true;
    førstegangsstart = false;

}
// det der sker når man klikker på join knappen
function deltag() {
    pin = prompt("pin");
    socket = ElineSocket.connect(pin);
    hostknap.hide();
    joinknap.hide();
    sendboldeknap.show();
    reloadknap.show();


}
// det der sker når personen der har joined klikker på sendbolde!
function sendbold() {

    socket.sendMessage("SKYD!");

}
// function der viser id hos hosten samt kassen/turbanen
function display() {
    fill(255);

    //viser multiplayertingende
    if (multiplayer == true) {
        text("pin: " + socket.id, 20, 40);
        if (ammo == 1) {
            socket.onMessage(smidBold);
            ammo = 0;
        }
    }
    // Her vises turbanen - foreløbig blot en firkant
    turban.tegn();
}


// her defineres det at hvis appelsinen rammer højre kant eller bunden af canvaset så mister du 1 liv
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


// her er funktionen restart der kalder turbanen, appelsinen, et loop og sætter dead til false.
function restart() {
    turban = new Kurv(670, 100, 70, 80, 30);
    dead = false;
    loop();
    button.hide();
    document.getElementById("status").innerHTML = "JESUS IS ALIVE!!!!!";
}



function smidBold(msg) {
    console.log(msg);
    appelsiner.push(new Appelsin());

}





/*
OPGAVER
 Opgave 1 - undersøg hvad variablerne  grav  og  tid  bruges til.
            Skriv det i kommentarer, prøv at se hvad der sker, når
            I laver dem om. 

 Opgave 2 - lav programmet om så det er tilfældigt hvor højt oppe 
            på venstre kan appelsinerne starter. Overvej om man kan 
            sikre, at appelsinen ikke ryger ud af skærmens top men 
            stadig har en "pæn" bane

 Opgave 3 - lav programmet om så man også kan bevæge turbanen mod
            højre og venstre med A- og D-tasterne. Prøv jer frem med
            forskellige løsninger for hvor hurtigt turbanen skal rykke

 Opgave 4 - ret programmet til, så det også angives hvor mange 
            appelsiner man IKKE greb med turbanen

 Opgave 5 - Undersøg hvad scriptet  kurv.js  er og gør, samt hvad de 
            funktioner, scriptet indeholder, skal bruges til. Skriv 
            det som kommentarer oven over hver funktion. Forklar tillige,
            hvad sammenhængen mellem dette script og turbanen i hoved-
            programmet er, og forklar det med kommentarer i toppen af 
            kurv.js

 Opgave 6 - find et billede af en turban og sæt det ind i stedet 
            for firkanten. Find eventuelt også en lyd, der kan afspilles, 
            når appelsinen gribes. Se gerne i "p5 Reference" hvordan, 
            hvis ikke I kan huske det:   https://p5js.org/reference/
            Lav programmet om, så man kan flytte turbanen med musen

 Opgave 7 - lav en Appelsin-klasse, lige som der er en Kurv-klasse. 
            Flyt koden til appelsinen ud i et selvstændigt script.
            Overvej hvad det skal hedde, oghvilke variabler og funktioner, 
            der skal lægges over i det nye script, herunder hvordan det 
            kommer til at berøre turbanen. Skriv jeres overvejelser i 
            kommentarerne

 Opgave 8 - ret programmet til, så der kan være flere appelsiner i 
            luften på en gang, dvs. at der kan skydes en ny appelsin
            afsted før den foregående er forsvundet. Overvej hvordan 
            og hvor hurtigt de skal skydes af, og forklar jeres tanker test
            i kommentarerne

            Det som vi har tænkt os at gøre er at vi vil gerne lave et multiplayer spil. 
            Dette spil går ud på at samleflest af ens frugt. Spillerne kan vælge mellem
            en appelsin eller et æble. Appelsinen bliver styret med musen og æblet bliver 
            styret med WASD. Dette

 Opgave 9 - ret programmet til, så det kan vindes og/eller tabes ved
            at man griber eller misser et antal appelsiner. Sørg for 
            at der vises en "Game Over"-skærm, som fortæller om man 
            vandt eller tabte, og som giver mulighed for at starte et
            nyt spil.

*/