/*
Først laver vi et nogle variable til at lave en appelsin
 - en kugle som vi vil skyde afsted og fange i en turban
*/


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
var button;

// variabel til "død"
var dead = false;

/* 
 * 
 */
function setup() {

    //her laves en overskrift til spillet
    header = createElement("h1", "Flying Balls");

    createCanvas(750, 600);

    //her laves der en knap, der er bundet til funktionen restart
    button = createButton("restart");

    // her definerers der at ved tryk på knappen skal den køre funktionen "restart"
    button.mouseClicked(restart);


    //restart funktionen kaldes
    restart();


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
    text("Liv: " + liv, width - 100, 50);

    //Hvis du har 0 liv så taber du


    if(liv <= 0){

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
}


function display() {
    fill(255);

    //Her skal vi sørge for at appelsinen bliver vist, hvis den skal vises



    // Her vises turbanen - foreløbig blot en firkant
    turban.tegn();
}


// her defineres det at hvis appelsinen rammer højre kant eller bunden af canvaset så mister du 1 liv


function flertaligeappelsiner() {
    for (let i = 0; i < appelsiner.length; i++) {
        appelsiner[i].tegn();
        if (appelsiner[i].move()) {
            score += 1;
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



function keyPressed() {
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