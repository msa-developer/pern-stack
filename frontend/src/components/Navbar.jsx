import { Palette, ShoppingBag, ShoppingCart } from "lucide-react";
import { themes } from "../constants/themes";
import useThemeStore from "../zustand/useThemeStore";
import { Link, useLocation } from "react-router-dom";
import useProductStore from "../zustand/useProductStore";

const Navbar = () => {
  const { setTheme } = useThemeStore();
  const location = useLocation();

  const { products } = useProductStore();

  return (
    <main className="w-full px-7 md:p-8 border-secondary border-b">
      <nav className="mx-auto max-w-7xl flex items-center justify-between">
        <Link to={"/"}>
          <div className="flex items-center sm:space-x-1">
            <ShoppingCart className="sm:w-13 h-20" />
            <span className="sm:text-4xl text-lg text-primary font-bold">
              Postgresql
            </span>
          </div>
        </Link>

        <div className="flex items-center md:space-x-3">
          <button className="btn">
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn-sm">
                <Palette />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                {themes.map((item) => {
                  return (
                    <li key={item.name} onClick={() => setTheme(item.name)}>
                      <a>{item.label}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </button>
          {location.pathname === "/" && (
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">
                {products.length}
              </span>
              <button className="btn">
                <ShoppingBag />
              </button>
            </div>
          )}
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
