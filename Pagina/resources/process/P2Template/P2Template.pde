// Problem description: //<>// //<>// //<>//
//
//
//
// Differential equations:
//
//
//


// Simulation and time control:

float _timeStep;        // Simulation time-step (s)
float _simTime = 0.0;   // Simulated time (s)

// Output control:

boolean _writeToFile = true;
boolean _useTexture = false;
PrintWriter _output;


// Variables to be monitored:

float _energy;                // Total energy of the system (J)
int _numParticles;            // Total number of particles

ParticleSystem _ps;


// Main code:

void settings()
{
  size(DISPLAY_SIZE_X, DISPLAY_SIZE_Y);
}

void setup()
{
  frameRate(DRAW_FREQ);
  background(BACKGROUND_COLOR[0], BACKGROUND_COLOR[1], BACKGROUND_COLOR[2]);

  initSimulation();
}

void stop()
{
  endSimulation();
}

void keyPressed()
{
  if (key == 'r' || key == 'R')
    restartSimulation();
  else if (key == 't' || key == 'T')
    _useTexture = !_useTexture;
  else if (key == '+')
    _timeStep *= 1.1;
  else if (key == '-')
    _timeStep /= 1.1;
  else if (key == 'i' || key == 'I')
     integrator = !integrator;
}

void initSimulation()
{
  if (_writeToFile)
  {
    _output = createWriter(FILE_NAME);
    writeToFile("t, dt, n");
  }

  _simTime = 0.0;
  _timeStep = TS;

  _ps = new ParticleSystem(S0);
}

void restartSimulation()
{
  _ps.restart();
  _energy = 0;
  _simTime = 0.0;   
}

void endSimulation()
{
  if (_writeToFile)
  {
    _output.flush();
    _output.close();
  }
}

void draw()
{
  drawStaticEnvironment();
  drawMovingElements();
  int a = millis();
  updateSimulation();
  int b = millis();
  displayInfo();
  int num=b-a;
  if (_writeToFile)
  {
    
    writeToFile(_simTime+" , "+num + ", "  + _numParticles);
  }
}

void drawStaticEnvironment()
{
  background(BACKGROUND_COLOR[0], BACKGROUND_COLOR[1], BACKGROUND_COLOR[2]);
  
   fill(STATIC_ELEMENTS_COLOR[0], STATIC_ELEMENTS_COLOR[1], STATIC_ELEMENTS_COLOR[2]);
   circle(500, 1000, 50);  
}

void drawMovingElements()
{
  _ps.render(_useTexture);
}

void updateSimulation()
{
  _ps.update(_timeStep);
  _numParticles = _ps.getNumParticles();
  _simTime += _timeStep;

  for (int i = 0; i < ((NT*_timeStep)/3); i++)
  {
    V0 =  new PVector(10 + randomGaussian() * 1.5 , -125 - randomGaussian() * 1.5);
    _ps.addParticle(M, S0, V0, R, PARTICLE_COLOR, L);

    V0 =  new PVector(30 + randomGaussian() * 1.5, -110 - randomGaussian()* 1.5);
    _ps.addParticle(M, S0, V0, R, PARTICLE_COLOR, L);

    V0 =  new PVector(-30 + randomGaussian()* 1.5, -110 + randomGaussian()* 1.5);
    _ps.addParticle(M, S0, V0, R, PARTICLE_COLOR, L);
  }
  
  _energy = _ps.getTotalEnergy();
}

void writeToFile(String data)
{
  _output.println(data);
}

void displayInfo()
{
  String s = "Euler Implícito";
  
  if(integrator)
    s = "Euler Simpléctico";
  
  stroke(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
  fill(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
  textSize(20);
  text("Draw: " + frameRate + "fps", width*0.025, height*0.05);
  text("Simulation time step = " + _timeStep + " s", width*0.025, height*0.075);
  text("Simulated time = " + _simTime + " s", width*0.025, height*0.1);
  text("Number of particles: " + _numParticles, width*0.025, height*0.125);
  text("Total energy: " + _energy/1000.0 + " kJ", width*0.025, height*0.15);
  text("Integrator: " + s, width*0.025, height*0.175);
  text("Tecla i para cambiar de integrador" , width*0.665, height*0.05);
}
