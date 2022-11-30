import React, { useState, useEffect } from "react";
import { data, categories } from "./fooddata";

const Food = () => {
  const [food, setFood] = useState(data);

  const filter = (names) => {
    setFood(
      data.filter((item) => {
        return item.category === names;
      })
    );
  };

  const price = (names) => {
    setFood(
      data.filter((item) => {
        return item.price === names;
      })
    );
  };

  return (
    <main className={s.food}>
      <h1 className={s.title}>Top Rated Menu Items</h1>

      <section className={s.filter}>
        <div>
          <p className={s.filter_title}>Filter Type</p>
          <ul className={s.filter_list}>
            <li onClick={() => setFood(data)} className={s.li}>
              All
            </li>
            <li onClick={() => filter("burger")} className={s.li}>
              Burgers
            </li>
            <li onClick={() => filter("pizza")} className={s.li}>
              Pizza
            </li>
            <li onClick={() => filter("salad")} className={s.li}>
              Salads
            </li>
            <li onClick={() => filter("chicken")} className={s.li}>
              Chicken
            </li>
          </ul>
        </div>

        <div>
          <p className={s.filter_title}>Filter Price</p>
          <ul className={s.filter_list}>
            <li onClick={() => price("$")} className={s.li}>
              $
            </li>
            <li onClick={() => price("$$")} className={s.li}>
              $$
            </li>
            <li onClick={() => price("$$$")} className={s.li}>
              $$$
            </li>
            <li onClick={() => price("$$$$")} className={s.li}>
              $$$$
            </li>
          </ul>
        </div>
      </section>

      <section className={s.foods_container}>
        {food.map((item) => (
          <div key={item.id} className={s.food_item}>
            <img src={item.image} alt={item.name} className={s.food_image} />
            <ul className={s.food_info}>
              <li className={s.foodname}>{item.name}</li>
              <li className={s.price}>{item.price}</li>
            </ul>
          </div>
        ))}
      </section>

      <section className={s.category}>
        <h1 className={s.category_title}>Top Categories</h1>
        <div className={s.categories}>
          {categories.map((item) => (
            <div className={s.categories_card}>
              <p className={s.categories_info}>{item.name}</p>
              <img className={s.categories_image} src={item.image} alt="" />
            </div>
          ))}
        </div>
      </section>

      <section className={s.footer}>
        <h1 className={s.footer_title}>Created by Ctadev</h1>
      </section>
    </main>
  );
};

export default Food;

const s = {
  food: "max-w-[1640px] mx-auto p-4",
  title: "text-3xl text-center mb-8 text-orange-600 font-bold",
  filter: "flex flex-col gap-4 lg:flex-row lg:justify-between",
  filter_list: "flex gap-4",
  filter_title: "text-1xl text-gray-700 mb-2 md:text-2xl",
  li: "border border-orange-600 py-1 px-4 rounded-xl cursor-pointer text-orange-600 hover:text-white hover:bg-orange-600",
  foods_container: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-4",
  food_item: "rounded-lg cursor-pointer border border-gray-200 shadow-lg",
  food_image: "h-[200px] lg:h-[230px] w-full object-cover rounded-t-lg",
  food_info: "flex justify-between items-center py-1 px-2",
  foodname: "font-bold",
  price: "bg-orange-600 text-white rounded-xl px-1",
  category: "max-w-[1640px] mx-auto p-4",
  category_title: "text-3xl font-bold text-orange-600 text-center mt-12 mb-8",
  categories: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",
  categories_card:
    "bg-slate-200 cursor-pointer rounded-lg flex flex-col items-center md:flex-row md:justify-between p-4",
  categories_info: "font-bold lg:text-xl",
  categories_image: "w-[50px] md:w-[80px]",
  footer: "max-w-[1640px] mx-auto p-4 mt-16 bg-gray-600",
  footer_title: "text-white text-2xl text-center",
};
