import { useLocation } from "preact-iso";
import { getTotalCanceledOrderIn, getTotalDoneOrderOut } from "../store";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <nav className={`!h-auto flex flex-row justify-between w-full py-3 px-4`}>
        <div>
          <a className={`py-1 px-2 bg-teal-400 hover:cursor-pointer`}>
            Doned: <span>{getTotalCanceledOrderIn}</span>
          </a>
          <a className={`py-1 px-2 bg-amber-400 hover:cursor-pointer`}>
            Canceled: <span>{getTotalDoneOrderOut}</span>
          </a>
        </div>
        <div>
          <a href="/" class={url == "/" && "active"}>
            Kitchen
          </a>
          <a href="/order" class={url == "/order" && "active"}>
            Order
          </a>
        </div>
      </nav>
    </header>
  );
}
