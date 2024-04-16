import { themer } from "./plugin";
export default themer;
export { themer, appearance, setAppearance } from "./plugin";
export * as preconfigs from "./config/preconfigs";
export { Types } from "./config/index";

export {
    button,
    icon as buttonIcon,
    type ButtonProps,
    type ButtonIconProps,
} from "./components/button";

export { badge, type BadgeProps } from "./components/badge";

export { accordion, type AccordionProps } from "./components/accordion";
export { dialog, type DialogProps } from "./components/dialog";
export { separator, type SeparatorProps } from "./components/separator";

export {
    annonceRoot,
    annonceConcern,
    type AnnonceRootProps,
    type AnnonceConcernProps,
} from "./components/annonce";

export {
    avatar,
    fallback,
    image,
    solid as solidFallback,
    soft as softFallback,
    type AvatarRootProps,
    type AvatarFallbackProps,
} from "./components/avatar";

export { card, gradientCard, type CardProps, type GradientCardProps } from "./components/card";
export { checkbox, fancyCheckbox, type CheckboxProps } from "./components/checkbox";
export { radio, fancyRadio, type RadioProps } from "./components/radio";
export { switchTheme, fancySwitch, type SwitchProps } from "./components/switch";

export {
    solid,
    soft,
    menu,
    separator as menuSeparator,
    defaultMenuProps,
    type MenuProps,
    type SeparatorProps as MenuSeparatorProps,
} from "./components/menu";

export {
    display,
    title,
    text,
    caption,
    link,
    list,
    codeTheme,
    kbdTheme,
    type Align,
    type Weight,
    type TextAlignProp,
    type TextWeightProp,
    type DisplayProps,
    type TitleProps,
    type TitleSizeProp,
    type TextProps,
    type TextSizeProp,
    type CaptionProps,
    type LinkProps,
    type ListProps,
    type CodeThemeProps,
} from "./components/typography";

export { calendar, type CalendarProps } from "./components/calendar";

export { banner, type BannerProps } from "./components/banner";
export { slider, type SliderProps } from "./components/slider";
