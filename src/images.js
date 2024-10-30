import React from "react";

const images = () => {
  return (
    <section className="p-10 grid md:grid-cols-2 pic-01 border gap-4">
      <div>
        <p className="text-xs">Real estate</p>
        <h1 className="text-3xl">
          Uncover valuable <br /> resources
        </h1>
        <h2 className="text-sm mb-8">
          We collect data about who throws what to motivate and reward waste
          sorting efforts. Find the optimal receiver for used resources and open
          the door to new revenue streams.
        </h2>
      </div>
      <div>
        <img
          src="./images/man.jpg.jpeg"
          alt="Waste Management"
          className="w-1/2 h-auto"
        />
        <button className="bg-black text-white font-medium mt-2 py-1 px-2 rounded">
          Discover how
        </button>
      </div>

      <div className="mb-9">
        <p className="text-xs ">Waste management companies</p>
        <h1 className="text-3xl">
          Motivate better <br /> sorting
        </h1>
        <h2 className="text-sm mb-8">
          Get a full overview of infrastructure, resources, and user data, and
          use insights to reward and motivate sustainable behavior.
        </h2>
      </div>
      <div>
        <img
          src="./images/engineer.jpg.jpeg"
          alt="Waste Management"
          className="w-1/2 h-auto"
        />
        <button className="bg-black text-white font-medium mt-2 py-1 px-2 rounded">
          Discover how
        </button>
      </div>
    </section>
  );
};

export default images;
