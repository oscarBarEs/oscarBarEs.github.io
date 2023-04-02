var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = "#000000"; // Establece el color de la línea a negro
ctx.lineWidth = 2; // Establece el ancho de la línea a 2 píxeles
ctx.setLineDash([5, 5]); // Establece la línea como discontinua, con una longitud de línea de 5 píxeles seguida de una longitud de espacio de 5 píxeles

ctx.beginPath(); // Comienza un nuevo trazo
ctx.moveTo(canvas.width / 2, 0); // Mueve el lápiz a la mitad del ancho del canvas y al borde superior
ctx.lineTo(canvas.width / 2, canvas.height ); // Dibuja una línea vertical hasta el borde inferior del canvas
ctx.stroke(); // Dibuja la línea en el canvas

// Seleccionar el formulario y los elementos donde se mostrarán los nombres
const form = document.getElementById('formulario');
const jugador1Nombre = document.getElementById('nombre-jugador-1');
const jugador2Nombre = document.getElementById('nombre-jugador-2');
const jugador1Color = document.getElementById('color1');
const jugador2Color = document.getElementById('color2');
//CLASE CIRCULO
class Circulo{
    posx;
    posy;
    rad;
    color;
    punt;
    constructor(posx,posy,rad,color,punt) {
      this.posx = posx;
      this.posy = posy;
      this.rad = rad;
      this.color = color;
      this.punt = punt;
    }

  }
//CLASE BALA
class Bala{
    posx;
    posy;
    vel;
    owner;
    constructor(posx,posy,vel,owner) {
        this.posx = posx;
        this.posy = posy;
        this.vel = vel;
        this.owner = owner;
      }
}
var sourceNode;
var sourceNodeBala1;
var sourceNodeBala2;
var sourceNodeDisp;
// Escuchar el evento submit del formulario
window.addEventListener('resize', function() {
    //canvas.height=
    
    var formularioHeight = document.getElementById('formulario').offsetHeight;
    var formularioWidth = window.innerWidth -   document.getElementById('formulario').offsetWidth;
    
    canvas.height = formularioHeight ;
    canvas.width = formularioWidth;
  });

form.addEventListener('submit', function(event) {

    event.preventDefault(); // Prevenir que se recargue la página al enviar el formulario
    var audioContext = new AudioContext();
    var audioElement = document.querySelector("audio");
    audioElement.src ="resources/sounds/Night and Day Loop 1.ogg";
    
    //sourceNode.connect(audioContext.destination);
        // Si el nodo fuente no está definido o no está conectado, crea uno nuevo y conéctalo
    if (!sourceNode || sourceNode.context.state === 'closed') {
            sourceNode = audioContext.createMediaElementSource(audioElement);
            sourceNode.connect(audioContext.destination);
        }
    var valo = document.getElementById("volumen");
    valo.oninput = () => {
            //panNode.pan.setValueAtTime(panControl.value, audioContext.currentTime);
            audioElement.volume=valo.value;
          };
    audioElement.play();
  
  // Obtener los valores de los input de nombres y mostrarlos en los elementos correspondientes
  const jugador1 = jugador1Nombre.value;
  const jugador2 = jugador2Nombre.value;
  const color1 = jugador1Color.value;
  const color2 = jugador2Color.value;

  console.log(jugador1 + " : "+ jugador2);
  
  
  var Circulo1 = new Circulo(canvas.width/4 , canvas.height/2,50,color1,0);
  var Circulo2 = new Circulo(canvas.width*3/4 , canvas.height/2,50,color2,0);
  var Balas=[];
    var i=0;


var teclas = {};


canvas.addEventListener("click", function(event) {
  var x = event.offsetX;
  

  if (x<canvas.width/2)
  {
    Balas.push(new Bala(Circulo1.posx + Circulo1.rad,Circulo1.posy,1,1));
  }else 
  {
    Balas.push(new Bala(Circulo2.posx - Circulo2.rad,Circulo2.posy,-1,2));
  }

  var audioContextDisp = new AudioContext();
  var audioElementDisp = document.getElementById("Disp");
  if (audioElementDisp) {
    audioElementDisp.src = "resources/sounds/sfx-impact6.mp3";
    audioElementDisp.addEventListener("canplaythrough", function() {
      // Si el nodo fuente no está definido o no está conectado, crea uno nuevo y conéctalo
      if (!sourceNodeDisp || sourceNodeDisp.context.state === 'closed') {
        sourceNodeDisp = audioContextDisp.createMediaElementSource(audioElementDisp);
        sourceNodeDisp.connect(audioContextDisp.destination);
      }
      audioElementDisp.play();
  });
  }
});

document.addEventListener('keydown', (event) => {
        teclas[event.key] = true;

    });

document.addEventListener('keyup', function(evento) {
        // Eliminar la tecla del estado
        delete teclas[evento.key];
      });

function draw (){
    //Movimiento Circulos
    if (teclas['d']) {
        Circulo1.posx +=5;
    }
    if (teclas['w']) {
        Circulo1.posy -=5;
    }
    if (teclas['a']) {
        Circulo1.posx -=5;
    }
    if (teclas['s'] ) {
        Circulo1.posy +=5;
    }

    if (teclas["ArrowLeft"]) {
        
        Circulo2.posx -=5;
    }
    if (teclas["ArrowRight"]) {
        
        Circulo2.posx +=5;
    }
   
    if (teclas["ArrowUp"]) {
        
        Circulo2.posy -=5;
    }
    if (teclas["ArrowDown"]) {
        
        Circulo2.posy +=5;
    }
    //CIRCULO 1 RESTRICCIONES
    if (Circulo1.posx<0 + Circulo1.rad) 
    {
        Circulo1.posx+=5;
    }
    if (Circulo1.posx>canvas.width/2 - Circulo1.rad){
        
        Circulo1.posx-=5;
    }
    if (Circulo1.posy<0 + Circulo1.rad) 
    {
        Circulo1.posy+=5;
    }
    if (Circulo1.posy>canvas.height - Circulo1.rad){
        
        Circulo1.posy-=5;
    }

    //CIRCULO 2 RESTRICCIONES
    if (Circulo2.posx>canvas.width - Circulo2.rad) 
    {
        Circulo2.posx-=5;
    }
    if (Circulo2.posx<canvas.width/2 + Circulo2.rad){
        
        Circulo2.posx+=5;
    }
    if (Circulo2.posy<0 + Circulo2.rad) 
    {
        Circulo2.posy+=5;
    }
    if (Circulo2.posy>canvas.height - Circulo2.rad){
        
        Circulo2.posy-=5;
    }
    
    //BALAS LANZADAS

    if (teclas['e']) {
        
    }
    if (teclas['Shift']) {
        
    }
          // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#000000"; 
        // Dibujar los nombres en el canvas
        ctx.font = 'bold 24px sans-serif';
        ctx.textAlign = 'center';
        //ctx.fillStyle = jugador1Nombre.value;
    
        ctx.fillText(jugador1 + " : "+ Circulo1.punt, canvas.width/4, 0 + canvas.height/10 );
        //ctx.fillStyle = document.querySelector('#color-jugador-2').value;
        ctx.fillText(jugador2 + " : "+ Circulo2.punt, canvas.width*3/4, canvas.height/10 );

        ctx.strokeStyle = "#000000"; // Establece el color de la línea a negro
        ctx.lineWidth = 2; // Establece el ancho de la línea a 2 píxeles
        ctx.setLineDash([5, 5]); // Establece la línea como discontinua, con una longitud de línea de 5 píxeles seguida de una longitud de espacio de 5 píxeles

        ctx.beginPath(); // Comienza un nuevo trazo
        ctx.moveTo(canvas.width / 2, 0); // Mueve el lápiz a la mitad del ancho del canvas y al borde superior
        ctx.lineTo(canvas.width / 2, canvas.height ); // Dibuja una línea vertical hasta el borde inferior del canvas
        ctx.stroke(); // Dibuja la línea en el canvas
        ctx.closePath();
        
    
        drawCirculo(Circulo1);
        drawCirculo(Circulo2);

        i++;
        requestAnimationFrame(draw);
        //console.log(Balas);
        if (Balas.length >=1)
        {
            for(let x=0;x<Balas.length;x++)
            {
                
                Balas[x].posx=Balas[x].posx + Balas[x].vel;
                if (Balas[x].owner == 1)
                {
                    drawBala(Balas[x],color1);
                    //var hipo=((Balas[x].posx-Circulo2.posx)**2 +(Balas[x].posy-Circulo2.posy)**2)**2 ;
                    var cateto1 = (Balas[x].posx-Circulo2.posx);
                    var cateto2=(Balas[x].posy-Circulo2.posy);
                    var hipo=Math.sqrt(cateto1*cateto1+cateto2*cateto2);
                   
                    if (hipo < Circulo2.rad)
                    {


                        if (Balas.length>1)
                        {
                            Balas.splice(x,1);
                            
                        }else Balas=[];

                        Circulo1.punt+=1;
                        /*
                        var audioContextBala1 = new AudioContext();
                        var audioElementBala1 = document.getElementById("bala1");
                        audioElementBala1.src ="resources/sounds/sfx-impact6.mp3";
                        
                        //sourceNode.connect(audioContext.destination);
                            // Si el nodo fuente no está definido o no está conectado, crea uno nuevo y conéctalo
                        if (!sourceNodeBala1 || sourceNodeBala1.context.state === 'closed') {
                                sourceNodeBala1 = audioContextBala1.createMediaElementSource(audioElementBala1);
                                sourceNodeBala1.connect(audioContextBala1.destination);
                            }
                        audioElementBala1.play();
                        */
                        ///EFECTOS SONIDO
                        
                        var audioContextBala1 = new AudioContext();
                        var audioElementBala1 = document.getElementById("bala1");
                        if (audioElementBala1) {
                        audioElementBala1.src = "resources/sounds/sfx-punch9.mp3";
                        audioElementBala1.addEventListener("canplaythrough", function() {
                            // Si el nodo fuente no está definido o no está conectado, crea uno nuevo y conéctalo
                            if (!sourceNodeBala1 || sourceNodeBala1.context.state === 'closed') {
                            sourceNodeBala1 = audioContextBala1.createMediaElementSource(audioElementBala1);
                            sourceNodeBala1.connect(audioContextBala1.destination);
                            }
                            audioElementBala1.play();
                        });
                        }
                        /**/

                    }else if(Balas[x].posx<0){
                        if (Balas.length>1)
                        {
                            
                            Balas.splice(x,1);
                            
                        }else Balas=[];
        
                    }else if(Balas[x].posx>canvas.width){
                        if (Balas.length>1)
                        {
                            
                            Balas.splice(x,1);
                            
                        }else Balas=[];
                    }
                }else {
                        drawBala(Balas[x],color2);
                        //var hipo=((Balas[x].posx-Circulo2.posx)**2 +(Balas[x].posy-Circulo2.posy)**2)**2 ;
                        var cateto1 = (Balas[x].posx-Circulo1.posx);
                        var cateto2=(Balas[x].posy-Circulo1.posy);
                        var hipo=Math.sqrt(cateto1*cateto1+cateto2*cateto2);
                        
                        if (hipo < Circulo1.rad)
                        {


                            if (Balas.length>1)
                            {
                                Balas.splice(x,1);
                                
                            }else Balas=[];

                            Circulo2.punt+=1;
                            ///EFECTOS SONIDO
                            /**/
                            var audioContextBala2 = new AudioContext();
                            var audioElementBala2 = document.getElementById("bala2");
                            audioElementBala2.src ="resources/sounds/sfx-impact6.mp3";
                            
                            //sourceNode.connect(audioContext.destination);
                                // Si el nodo fuente no está definido o no está conectado, crea uno nuevo y conéctalo
                            if (!sourceNodeBala2 || sourceNodeBala2.context.state === 'closed') {
                                    sourceNodeBala2 = audioContextBala2.createMediaElementSource(audioElementBala2);
                                    sourceNodeBala2.connect(audioContextBala2.destination);
                                }
                            audioElementBala2.play();
                            

                        }else if(Balas[x].posx<0){
                            if (Balas.length>1)
                            {
                                
                                Balas.splice(x,1);
                                
                            }else Balas=[];

                        }else if(Balas[x].posx>canvas.width){
                            if (Balas.length>1)
                            {
                                
                                Balas.splice(x,1);
                                
                            }else Balas=[];
                        }
                }
                
            }
        }
 
        /*
        ctx.fillStyle(color2);

        circle(canvas.width*3/4,canvas.height/2)
        */
    }
    draw();
});
function drawBala(b,col){

    ctx.fillStyle=col;
    ctx.beginPath();
    ctx.arc(b.posx, b.posy, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}
function drawCirculo(c){

    ctx.fillStyle=c.color;
    ctx.beginPath();
    ctx.arc(c.posx, c.posy, c.rad, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

