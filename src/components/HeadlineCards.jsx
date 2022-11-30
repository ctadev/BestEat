import React from "react";
import data from "./cardscollection";

const HeadlineCards = () => {
  return (
    <main className={s.headline_cards}>
      {data.map((item, index) => (
        <section key={index} className={s.container}>
          <div className={s.overlay}>
            <div>
              <h1 className={s.h1}>{item.title}</h1>
              <p className={s.p}>{item.date}</p>
            </div>

            <div>
              <button className={s.button}>Order Now</button>
            </div>
          </div>
          <img className={s.image} src={item.img} alt="" />
        </section>
      ))}
    </main>
  );
};

export default HeadlineCards;

const s = {
  headline_cards: "max-w-[1640px] mx-auto p-4 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4",
  container: "h-[200px] rounded-lg relative md:h-[250px]",
  overlay:
    "absolute h-full w-full rounded-lg bg-black/40 py-4 px-3 flex flex-col justify-between",
  h1: "text-white text-2xl font-bold",
  p: "text-white",
  button: " bg-white py-1 px-4 rounded-full",
  image: "h-full w-full rounded-lg object-cover",
};
