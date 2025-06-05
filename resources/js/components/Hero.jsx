import "./Hero.css";


const Hero = () => {
  return (
    <section className="hero">
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div className="hero-overlay" />
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover and Enjoy
            <br />
            Local Events
          </h1>
          <p className="hero-description">
            Join your community this summer by exploring exciting local events, 
            tailored for everyone. From BBQs to outdoor concerts, there's 
            something for everyone to enjoy!
          </p>
          <div className="hero-buttons">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Explore
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
