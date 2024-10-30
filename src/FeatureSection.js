
const FeatureSection = () => {
  return (
    <section className="md:grid grid-cols-3 sec-1 gap-1 p-10">
      <div className="text-blacke p-4">
        <img className="img" src="./images/cup.jpg.jpeg" alt="img 1"></img>
        <h2>Create sustained positive change</h2>
        <p className="text-xs">
          Help people see the impact of their choices and provide continuous
          feedback for sustained improvement.
        </p>
      </div>

      <div className="text-black p-4">
        <img className="img" src="./images/shape.jpg.jpeg" alt="img 1"></img>
        <h2>Target actions and improvements</h2>
        <p className="text-xs">
          Get started where you are today Incentivize sustainable actions at
          scale using existing systems or our built-in tools.
        </p>
      </div>

      <div className="text-black p-4">
        <img className="img" src="./images/home.jpg.jpeg" alt="img 1"></img>
        <h2>Get started where you are today </h2>
        <p className="text-xs">
          Incentivize sustainable actions at scale using existing systems or our
          built-in tools.
        </p>
      </div>

      <div className="text-black p-4">
        <img className="img" src="./images/double.jpg.jpeg" alt="img 1"></img>
        <h2>Break down data silos</h2>
        <p className="text-xs">
          Incentivize sustainable actions at scale using existing systems or our
          built-in tools.
        </p>
      </div>

      <div className="text-black p-4">
        <img className="img" src="./images/hot.jpg.jpeg" alt="img 1"></img>
        <h2>Go from waste to resources</h2>
        <p className="text-xs">
          Empower users to take part in the circular economy by finding the
          optimal receiver for all types of used resources.
        </p>
      </div>
    </section>
  );
};

export default FeatureSection;