// Display and output parameters:

final int DRAW_FREQ = 100;                            // Draw frequency (Hz or Frame-per-second)
final int DISPLAY_SIZE_X = 1000;                      // Display width (pixels)
final int DISPLAY_SIZE_Y = 1000;                      // Display height (pixels)
final int [] BACKGROUND_COLOR = {20, 30, 40};         // Background color (RGB)
final int [] TEXT_COLOR = {255, 255, 0};              // Text color (RGB)
final int []  STATIC_ELEMENTS_COLOR =  {216, 216, 216}; // Color de los elementos estáticos
final int PARTICLE_COLOR = #705ED8;         // Particle color (RGB)
final String FILE_NAME = "data.csv";                  // File to write the simulation variables


// Parameters of the problem:

final float TS = 0.01;     // Initial simulation time step (s)
final float Gc = 9.801;       // Acceleration due to gravity (m/(s·s))
final PVector G    = new PVector(0.0, Gc);   // Acceleration due to gravity (m/(s*s))
final float NT = 10000.0;   // Rate at which the particles are generated (number of particles per second) (1/s)
final float L = 20.0;       // Particles' lifespan (s)
final float R = 3;      // Particles' radius (cm)
final float M = 0.01;     // Particles' mass (kg)
final float Kd = 0.01;     // Constante de fricción con el aire (kg/s)
//
//


// Constants of the problem:

final String TEXTURE_FILE = "texture.jpg";
final PVector S0 = new PVector(250, 500);  // Particle System start position (m)
PVector V0;
Boolean integrator = true;    //Integrador usado: true simpletic, false implicit

//
