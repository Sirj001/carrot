const Footer = () => {
  return (
    <footer className="bg-orange-400 md:text-white p-10">
      <div className="md:m-12">
        <img alt="jj" src="./images/lots.jpg.png"></img>
      </div>

      <div className="grid md:grid-cols-2 gap-10 top-10">
        <h1 className="text-black text-3xl">Turning waste into value</h1>

        <p className="text-black text-xs mb-10">
          Capturing data about waste allows us to extend the life of materials
          and change our perception of its values. By rewarding people for what
          tey return, we're creating a world of circular materials. <br />{" "}
          <button className="bg-black text-white py-1 px-2 rounded mb-10">
            Discover how
          </button>
        </p>
      </div>

      <div>
        <h1 className="text-black text-lg">
          Collecting data about waste at Vestkanten
          <br /> Storesenter enabled more sustainble chioces
          <br /> and a significant increase in the sorting rate.
        </h1>
      </div>

      <section className="mb-11 border">
        <p className="text-xs mb-13 text-black">Selected clients</p>
        <img alt="jj" src="./images/logos.jpg.png"></img>
      </section>

      <div className="border mb-14 ">
        <h1 className="text-black text-3xl mb-15">Help us turn waste into resources</h1>
        <p className="text-black">
          Discover how Carrot can transform the way<br/> you treat waste.
        </p>
        <button className="bg-black text-white py-1 px-2 rounded mb-10">
          Contact us
        </button>
      </div>
      <div className="grid grid-cols-2 gap-10 top-10">

      <h2 className="text-black text-sm">Stay in the loop with our newsletter.<br/>We wont spam you.</h2>

      <form className="mt-4">
        <input
          type="email"
          placeholder="Your email"
          className="p-2 rounded-l"
        />
        <button className="bg-black text-white py-2 px-4 rounded-r">
          Submit
        </button>
      </form>
      </div>
    </footer>
  );
};

export default Footer;
