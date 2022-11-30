import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WalletIcon from "@mui/icons-material/Wallet";
import HelpIcon from "@mui/icons-material/Help";
import CelebrationIcon from "@mui/icons-material/Celebration";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { useState } from "react";

const Navbar = () => {
  const [toggleMobile, setToggleMobile] = useState(false);
  const [method, toggleMethod] = useState(false);

  return (
    <nav className={s.navbar}>
      <section className={s.leftside}>
        <MenuIcon
          onClick={() => setToggleMobile(true)}
          className={s.menu}
          style={{ fontSize: "2rem" }}
        />
        <h1 className={s.title}>
          Best<span className={s.span}>Eat</span>
        </h1>
        <div className={s.method} onClick={()=>toggleMethod(!method)}>
          <p className={method ? s.delivery_true : s.delivery_false}>Delivery</p>
          <p className={method ? s.pickup_true : s.pickup_false}>PickUp</p>
        </div>
      </section>

      <section className={s.rightside}>
        <SearchIcon style={{ fontSize: "1.5rem" }} />
        <input className={s.input} type="text" placeholder="Search foods..." />
      </section>

      <section className={s.cart}>
        <ShoppingCartIcon />
        Cart
      </section>

      <section
        onClick={() => setToggleMobile(false)}
        className={toggleMobile ? s.overlay : `${s.overlay} ${s.overlay_close}`}
      >
        <div
          className={
            toggleMobile
              ? s.mobile_menu
              : `${s.mobile_menu} ${s.mobile_menu_close}`
          }
        >
          <CloseIcon
            onClick={() => setToggleMobile(false)}
            className={s.close_icon}
            style={{ fontSize: "2rem" }}
          />
          <h1 className={s.mobile_title}>
            Best<span className={s.mobile_span}>Eat</span>
          </h1>
          <ul className={s.mobile_menu_tab}>
            <li className={s.tabs}>
              <LocalShippingIcon />
              <p>Orders</p>
            </li>
            <li className={s.tabs}>
              <FavoriteIcon />
              <p>Favorites</p>
            </li>
            <li className={s.tabs}>
              <WalletIcon />
              <p>Wallet</p>
            </li>
            <li className={s.tabs}>
              <HelpIcon />
              <p>Help</p>
            </li>
            <li className={s.tabs}>
              <CelebrationIcon />
              <p>Promotions</p>
            </li>
            <li className={s.tabs}>
              <StarBorderPurple500Icon />
              <p>Best One</p>
            </li>
            <li className={s.tabs}>
              <Diversity3Icon />
              <p>Invite Friends</p>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

const s = {
  navbar: "max-w-[1640px] mx-auto flex justify-between items-center p-4",

  leftside: "flex items-center",
  menu: "text-xl cursor-pointer",
  title: "text-2xl sm:text-3xl lg:text-4xl px-2",
  span: "font-bold",
  method: "hidden lg:flex bg-gray-200 border border-black rounded-full p-1",
  delivery_true:
    "bg-black text-white rounded-full p-2 cursor-pointer transition-all",
  pickup_false:
    "bg-black text-white rounded-full p-2 cursor-pointer transition-all",
  delivery_false: "p-2 cursor-pointer transition-all",
  pickup_true: "p-2 cursor-pointer transition-all",

  rightside:
    "bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]",
  input: "w-full bg-transparent focus:outline-none p-2",

  cart: "bg-black text-white flex items-center py-2 px-4 rounded-full cursor-pointer",

  overlay:
    "w-full h-screen fixed top-0 left-0 bg-black/80 z-20 ease-in-out duration-300",
  mobile_menu:
    "fixed h-screen w-[300px] bg-white left-0 top-0 z-30 flex flex-col gap-12 p-4 ease-in-out duration-300",
  close_icon: "absolute right-4 top-4 cursor-pointer",
  mobile_title: "text-2xl",
  mobile_span: "ml-1 font-bold",
  mobile_menu_tab: "flex flex-col gap-2",
  tabs: "flex gap-4 text-xl cursor-pointer rounded-full hover:bg-slate-400 py-2 px-4",
  overlay_close: "left-[-100%]",
  mobile_menu_close: "left-[-100%]",
};
