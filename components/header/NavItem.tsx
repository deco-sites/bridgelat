export interface INavItem {
  label: string;
  href: string;
}

function NavItem(
  { item }: { item: INavItem },
) {
  const { href, label } = item;

  return (
    <li
      class="group flex items-center max-lg:w-full max-lg:border-b-black max-lg:border-b py-[22px] max-lg:justify-center"
    >
      <a
        href={href}
        class="mx-[25px] text-[#e8edd9] text-[13px] uppercase relative hover:text-[#cde257] hover:after:bg-[#cde257] hover:after:h-[1px] hover:after:bottom-0 hover:after:absolute hover:after:block hover:after:w-full hover:transition-all hover:duration-500 hover:after:transition-all hover:after:duration-500 max-lg:text-black max-lg:font-medium max-lg:text-[14px]"
      >
        {label}
      </a>
    </li>
  );
}

export default NavItem;
