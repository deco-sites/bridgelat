import Button from "deco-sites/bridgelat/components/ui/Button.tsx";
import Slider from "deco-sites/bridgelat/components/ui/Slider.tsx";
import SliderJS from "deco-sites/bridgelat/islands/SliderJS.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import { useId } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export type TextSize =
  | "sm"
  | "md"
  | "xl";

export type Position =
  | "center"
  | "left"
  | "right";

export type Animation =
  | "none"
  | "slideTop"
  | "slideTopMedium"
  | "slideTopShort"
  | "slideRight"
  | "slideRightMedium"
  | "slideRightShort"
  | "slideBottom"
  | "slideBottomMedium"
  | "slideBottomShort"
  | "slideLeft"
  | "slideLeftMedium"
  | "slideLeftShort";

export type AnimationDuration =
  | "0.5s"
  | "1s"
  | "1.5s"
  | "2s"
  | "2.5s"
  | "3s";

export interface Banner {
  /** @description Background desktop image */
  backgroundDesktop?: LiveImage;
  /** @description Background mobile image */
  backgroundMobile?: LiveImage;
  /** @description Title (information located above the main text) */
  title?: {
    text: string;
    animation?: Animation;
    animationDuration?: AnimationDuration;
  };
  /** @description Image before title */
  imageBeforeTitle?: {
    image: LiveImage;
    alt: string;
    animation?: Animation;
    animationDuration?: AnimationDuration;
  };
  /** @description Main text */
  mainText: {
    text: string;
    size?: TextSize;
    animation?: Animation;
    animationDuration?: AnimationDuration;
  };
  /** @description Button */
  button?: {
    label: string;
    href: string;
    position?: Position;
    hover?: string;
  };
}

export interface Props {
  /**
   * @title Banners
   * @description Banners with customizable content
   */
  banners?: Banner[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

const TEXT_SIZE = {
  "sm": "md:text-[36px] md:leading-[40px] max-w-[654px]",
  "md": "md:text-[49px] md:leading-[66px] max-w-[664px]",
  "xl": "md:text-[60px] md:leading-[67px] max-w-[1043px]",
};

const BUTTON_POSITION = {
  "center": "mx-auto",
  "left": "ml-[10%] mr-auto",
  "right": "ml-auto mr-[10%]",
};

function BannerItem(
  { content, index, lcp }: { content: Banner; index: number; lcp?: boolean },
) {
  const {
    backgroundDesktop,
    backgroundMobile,
    title,
    imageBeforeTitle,
    mainText,
    button,
  } = content;

  return (
    <div class="flex flex-col justify-center relative overflow-hidden w-full h-screen">
      {backgroundDesktop && (
        <div class="absolute z-0 top-0 left-0 h-screen w-screen group-data-[highlight]:animate-fadeIn">
          <Picture>
            <Source
              media="(max-width: 767px)"
              fetchPriority={lcp ? "high" : "auto"}
              src={backgroundMobile ?? backgroundDesktop}
              width={390}
              height={693}
            />
            <Source
              media="(min-width: 768px)"
              fetchPriority={lcp ? "high" : "auto"}
              src={backgroundDesktop}
              width={1920}
              height={888}
            />
            <img
              loading={lcp ? "eager" : "lazy"}
              src={backgroundDesktop}
              alt={`overlay-background-${index}`}
              class="h-screen w-screen"
            />
          </Picture>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            ${
            title?.animation && title?.animationDuration
              ? (`
              [data-slider-item="${index}"][data-highlight] .title {
                animation: ${title.animation} ${title.animationDuration} cubic-bezier(0.250, 0.460, 0.450, 0.940);
              }
            `)
              : ""
          }
            
            ${
            imageBeforeTitle?.animation && imageBeforeTitle?.animationDuration
              ? (`
              [data-slider-item="${index}"][data-highlight] .imageBeforeTitle {
                animation: ${imageBeforeTitle.animation} ${imageBeforeTitle.animationDuration} cubic-bezier(0.250, 0.460, 0.450, 0.940);
              }
            `)
              : ""
          }

            ${
            mainText?.animation && mainText?.animationDuration
              ? (`
              [data-slider-item="${index}"][data-highlight] .text {
                animation: ${mainText.animation} ${mainText.animationDuration} cubic-bezier(0.250, 0.460, 0.450, 0.940);
              }
            `)
              : ""
          }

            ${
            button?.hover
              ? (`
              [data-slider-item="${index}"] button:hover {
                background-color: ${button.hover};
                border: 1px solid ${button.hover};
              }
            `)
              : ""
          }
          `,
        }}
      />

      <div class="relative pl-[10%] pr-[48px]">
        {title?.text && (
          <span
            class={`title block font-light text-[13px] tracking-[2px] mb-11 uppercase`}
            style="font-family: 'Montserrat', sans-serif;"
          >
            {title.text}
          </span>
        )}

        <div
          class={`${
            imageBeforeTitle ? "flex items-center justify-center" : ""
          }`}
        >
          {imageBeforeTitle && (
            <div class="imageBeforeTitle mr-[30px]">
              <Picture>
                <Source
                  media="(max-width: 767px)"
                  src={imageBeforeTitle.image}
                  width={73}
                  height={74}
                />
                <Source
                  media="(min-width: 768px)"
                  src={imageBeforeTitle.image}
                  width={148}
                  height={112}
                />
                <img
                  loading={lcp ? "eager" : "lazy"}
                  src={imageBeforeTitle.image}
                  alt={imageBeforeTitle.alt}
                />
              </Picture>
            </div>
          )}

          <span
            class={`text block text-[20px] leading-[30px] ${
              TEXT_SIZE[mainText?.size ?? "sm"]
            } font-medium tracking-[-2px]`}
          >
            {mainText?.text}
          </span>
        </div>
      </div>

      {button && (
        <Button
          class={`relative ${
            BUTTON_POSITION[button.position ?? "left"]
          } mt-8 normal-case py-[14px] px-[42px] border border-white/30 rounded-[45px] font-medium text-[15px] bg-transparent text-white hover:bg-transparent hover:border-white min-w-[217px]`}
          aria-label={`banner button ${button.label}`}
        >
          {button.label}
        </Button>
      )}
    </div>
  );
}

function Dots({ banners }: Props) {
  return (
    <ul class="flex flex-col items-center justify-center z-10 col-start-2 row-end-2">
      {banners?.map((_, index) => (
        <li class="flex items-center justify-center my-[13px]">
          <Slider.Dot index={index}>
            <div
              class={`w-2 h-2 bg-white rounded-lg relative group-disabled:before:content-[''] group-disabled:before:absolute group-disabled:before:-top-[5px] group-disabled:before:-left-[5px] group-disabled:before:w-[18px] group-disabled:before:h-[18px] group-disabled:before:rounded-[18px] group-disabled:before:border-[#CDCDCD] group-disabled:before:border`}
            />
          </Slider.Dot>
        </li>
      ))}
    </ul>
  );
}

function BannerCarousel({ banners, interval }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="grid grid-cols-[1fr_48px] grid-rows-1 h-screen bg-[#4F39EB] text-white"
    >
      <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
        {banners?.map((content, index) => (
          <Slider.Item index={index} class="carousel-item w-full group">
            <BannerItem content={content} index={index} lcp={index === 0} />
          </Slider.Item>
        ))}
      </Slider>

      <Dots banners={banners} interval={interval} />

      <SliderJS
        rootId={id}
        interval={interval && interval * 1e3}
        infinite
        scroll="instant"
      />
    </div>
  );
}

export default BannerCarousel;
