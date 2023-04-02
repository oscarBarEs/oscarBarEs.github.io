// Class for a simple particle with no rotational motion
public class Particle
{
  ParticleSystem _ps;  // Reference to the parent ParticleSystem
  int _id;             // Id. of the particle (-)

  float _m;            // Mass of the particle (kg)
  PVector _s;          // Position of the particle (m)
  PVector _v;          // Velocity of the particle (m/s)
  PVector _a;          // Acceleration of the particle (m/(s·s))
  PVector _F;          // Force applied on the particle (N)
  float _energy;       // Energy (J)

  float _radius;       // Radius of the particle (m)
  color _color;        // Color of the particle (RGBA)
  float _lifeSpan;     // Total time the particle should live (s)
  float _timeToLive;   // Remaining time before the particle dies (s)

  Particle(ParticleSystem ps, int id, float m, PVector s, PVector v, float radius, color c, float lifeSpan)
  {
    _ps = ps;
    _id = id;

    _m = m;
    _s = s;
    _v = v;

    _a = new PVector(0.0, 0.0);
    _F = new PVector(0.0, 0.0);
    _energy = 0.0;

    _radius = radius;
    _color = c;
    _lifeSpan = lifeSpan;
    _timeToLive = _lifeSpan;
  }

  void setPos(PVector s)
  {
    _s = s;
  }

  void setVel(PVector v)
  {
    _v = v;
  }

  PVector getForce()
  {
    return _F;
  }

  float getEnergy()
  {
    return _energy;
  }

  float getRadius()
  {
    return _radius;
  }

  float getColor()
  {
    return _color;
  }

  float getTimeToLive()
  {
    return _timeToLive;
  }

  boolean isDead()
  {
    return (_timeToLive <= 0.0);
  }

  void update(float timeStep)
  {
    _timeToLive -= timeStep;
    
    if(integrator)
      updateSimplecticEuler(timeStep);
    else
      updateImplicitEuler(timeStep);
      
    updateEnergy();
  }

  PVector calculateAcceleration(PVector s, PVector v)
  {
    PVector a = new PVector();

    PVector Fpeso = PVector.mult(G, _m);  //Fuerza peso

    //Froz = Kd * v
    PVector Froz = PVector.mult(_v, -Kd);

    PVector SumF = PVector.add(Fpeso, Froz);

    a = PVector.div(SumF, _m);
    
    updateForce(SumF);
  
    return a;
  }

  void updateSimplecticEuler(float timeStep)
  {
    //Calcular aceleración a
    PVector a = calculateAcceleration(_s, _v);
    //Calcular v(i+1) = v(i) + a(i)*dt
    _v.add(PVector.mult(a, timeStep));
    //Calcular s(i+1)=s(i) + v(i)*dt
    _s.add(PVector.mult(_v, timeStep));
  }
  
   void updateImplicitEuler(float timeStep)
  {
     PVector v2 = PVector.mult(PVector.add(G, _v), _m);
     v2.div(_m + Kd * timeStep);
    //Calcular aceleración a
    PVector a = calculateAcceleration(_s, v2);
    //Calcular v(i+1) = v(i) + a(i)*dt
    _v.add(PVector.mult(a, timeStep));
    //Calcular s(i+1)=s(i) + v(i)*dt
    _s.add(PVector.mult(_v, timeStep));
  }

  void updateForce(PVector F)
  {
      _F = F;
  }

  void updateEnergy()
  {
    //Energía cinética Ec = m * |v|^2 / 2
    float Ec = _m * _v.magSq() / 2;
    
    //Energía potencial  Ep = m * g * h;
    float h =height - _s.y ;
    float Ep = _m * Gc * h;
    
    _energy = Ec + Ep;
  }

  void render(boolean useTexture, PImage img)
  {
    if (useTexture)
    {
      imageMode(CENTER);
      tint(255, 255 * _lifeSpan / 100);
      image(img, _s.x, _s.y, _radius, _radius);
    } else
    {
      fill(112, 94, 216, 255 * _lifeSpan / 100);
      noStroke();
      ellipse(_s.x, _s.y, _radius, _radius);
    }
  }
}
