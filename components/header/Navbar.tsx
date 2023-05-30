import { signal } from "@preact/signals";
import Button from "deco-sites/bridgelat/components/ui/Button.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import NavItem from "./NavItem.tsx";
import type { INavItem } from "./NavItem.tsx";

const displayMenu = signal(false);

function MenuIcon() {
  return (
    <Button
      class="lg:hidden bg-transparent border-0 hover:bg-transparent hover:border-0 absolute right-0"
      onClick={() => displayMenu.value = true}
      aria-label="Open menu"
    >
      <svg
        width="21"
        height="15"
        viewBox="0 0 21 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.864 3.05603H19.288C19.6547 3.05603 19.9737 2.92036 20.245 2.64903C20.5163 2.3777 20.652 2.0587 20.652 1.69203C20.652 1.32536 20.5163 1.0027 20.245 0.72403C19.9737 0.445364 19.6547 0.30603 19.288 0.30603H1.864C1.49733 0.30603 1.17833 0.445364 0.907 0.72403C0.635667 1.0027 0.5 1.32536 0.5 1.69203C0.5 2.0587 0.635667 2.3777 0.907 2.64903C1.17833 2.92036 1.49733 3.05603 1.864 3.05603ZM1.864 8.55603H19.288C19.6547 8.55603 19.9737 8.42036 20.245 8.14903C20.5163 7.8777 20.652 7.5587 20.652 7.19203C20.652 6.82536 20.5163 6.5027 20.245 6.22403C19.9737 5.94536 19.6547 5.80603 19.288 5.80603H1.864C1.49733 5.80603 1.17833 5.94536 0.907 6.22403C0.635667 6.5027 0.5 6.82536 0.5 7.19203C0.5 7.5587 0.635667 7.8777 0.907 8.14903C1.17833 8.42036 1.49733 8.55603 1.864 8.55603ZM1.864 14.056H19.288C19.6547 14.056 19.9737 13.9204 20.245 13.649C20.5163 13.3777 20.652 13.0587 20.652 12.692C20.652 12.3254 20.5163 12.0027 20.245 11.724C19.9737 11.4454 19.6547 11.306 19.288 11.306H1.864C1.49733 11.306 1.17833 11.4454 0.907 11.724C0.635667 12.0027 0.5 12.3254 0.5 12.692C0.5 13.0587 0.635667 13.3777 0.907 13.649C1.17833 13.9204 1.49733 14.056 1.864 14.056Z"
          fill="white"
        />
      </svg>
    </Button>
  );
}

function CloseIcon() {
  return (
    <Button
      class="lg:hidden bg-transparent border-0 hover:bg-transparent hover:border-0 absolute right-0"
      onClick={() => displayMenu.value = false}
      aria-label="Close menu"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0302 1.39396L8.70618 6.69596L3.38218 1.39396C3.14751 1.14462 2.83951 1.01996 2.45818 1.01996C2.07684 1.01996 1.71751 1.14462 1.38018 1.39396C1.13084 1.62862 1.00618 1.95862 1.00618 2.38396C1.00618 2.58929 1.03918 2.76162 1.10518 2.90096C1.17118 3.04029 1.29218 3.17596 1.46818 3.30796L6.68218 8.71996L1.38018 14.044C0.749511 14.6746 0.753178 15.309 1.39118 15.947C2.02918 16.585 2.66351 16.5886 3.29418 15.958L8.61818 10.634L13.9422 15.958C14.1768 16.2073 14.5105 16.332 14.9432 16.332C15.3758 16.332 15.7095 16.2073 15.9442 15.958C16.0908 15.826 16.1898 15.683 16.2412 15.529C16.2925 15.375 16.3182 15.1806 16.3182 14.946C16.3182 14.5206 16.1935 14.1833 15.9442 13.934L10.6422 8.71996L16.0322 3.39596C16.6922 2.75062 16.6922 2.11262 16.0322 1.48196C15.7095 1.11529 15.3868 0.924623 15.0642 0.909957C14.7415 0.89529 14.3968 1.05662 14.0302 1.39396Z"
          fill="#ACA298"
        />
      </svg>
    </Button>
  );
}

function Navbar({ logo, items }: { logo: LiveImage; items: INavItem[] }) {
  return (
    <div class="w-full h-[10vh] flex items-center max-lg:justify-between relative">
      <div class="lg:w-1/5 flex items-center">
        <a
          href="/"
          class="flex-grow inline-flex items-center"
          aria-label="Bridget Latam Logo"
        >
          <Picture class="w-[230px]" preload>
            <Source fetchPriority="high" src={logo} width={230} height={82} />
            <img loading="eager" src={logo} alt="Logo" />
          </Picture>
        </a>
      </div>

      {displayMenu.value ? <CloseIcon /> : <MenuIcon />}

      <div
        class={`p-[10px] ${
          displayMenu.value ? "scale-y-100 max-h-screen" : "scale-y-0 max-h-o"
        } origin-top transtion-transform duration-300 flex flex-row justify-between items-center w-full max-lg:absolute max-lg:left-[-5vw] max-lg:top-[90px] max-lg:bg-white max-lg:flex-row max-lg:!p-0 max-lg:w-screen lg:scale-100`}
      >
        <ul class="flex-auto flex justify-center text-white max-lg:flex-col max-lg:items-center">
          {items.map((item) => <NavItem item={item} />)}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
