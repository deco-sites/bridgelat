import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Navbar from "./Navbar.tsx";

export interface NavItem {
  label: string;
  href: string;
}

export interface Props {
  /**
   * @description Logo
   */
  logo: LiveImage;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];
}

function Header(
  { logo, navItems = [] }: Props,
) {
  return (
    <header class="w-full flex items-center bg-transparent fixed z-50 text-white px-[5%]">
      <Navbar logo={logo} items={navItems} />
    </header>
  );
}

export default Header;
