import React from "react";

const Hero = () => {
  return (
    <main className={s.hero}>
      <section className={s.hero_container}>
        <div className={s.overlay}>
          <h1 className={s.h1}>
            The<span className={s.span1}>Best</span>
          </h1>
          <h2 className={s.h2}>
            <span className={s.span2}>Foods</span>Delivered
          </h2>
        </div>
        <img
          className={s.image}
          src="https://www.unileverfoodsolutions.ca/dam/global-ufs/mcos/NAM/calcmenu/recipes/CA-recipes/general/hamburger-de-grilladerie/main-header.jpg"
          alt=""
        />
      </section>
    </main>
  );
};

export default Hero;

const s = {
  hero: "max-w-[1640px] mx-auto p-4",
  hero_container: "max-h-[500px] bg-slate-200 relative",
  overlay:
    "absolute z-10 h-full w-full bg-black/50 text-white flex flex-col justify-center pl-8",
  h1: "text-2xl md:text-6xl font-bold",
  h2: "text-2xl md:text-6xl font-bold",
  span1: "ml-2 md:ml-4 text-orange-400",
  span2: "m-2 md:m-4 text-orange-400",
  image: "w-full max-h-[500px] object-cover",
};
