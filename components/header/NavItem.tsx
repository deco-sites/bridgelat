export interface INavItem {
  label: string;
  href: string;
}

function NavItem(
  { item, menuActive }: { item: INavItem; menuActive: boolean },
) {
  const { href, label } = item;

  return (
    <li
      class={`${
        menuActive
          ? "w-full border-b-black border-b py-[22px] justify-center"
          : ""
      } group flex items-center`}
    >
      <a
        href={href}
        class={`${
          menuActive ? "text-black font-medium text-[14px]" : ""
        } mx-[25px] text-[#e8edd9] text-[13px] uppercase relative hover:text-[#cde257] hover:after:bg-[#cde257] hover:after:h-[1px] hover:after:bottom-0 hover:after:absolute hover:after:block hover:after:w-full hover:transition-all hover:duration-500 hover:after:transition-all hover:after:duration-500`}
      >
        {label}
      </a>
    </li>
  );
}

export default NavItem;
