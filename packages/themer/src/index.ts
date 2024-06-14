export {
    palette,
    animations,
    components,
    shade,
    rounded,
    palettes,
    palettesArray,
    grays,
    defaultFeedbackColors,
    type Palette,
} from "@tailus/themer-plugins";

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
export { slider, type SliderProps, type SliderTrackProps } from "./components/slider";
export { tooltip, type TooltipProps } from "./components/tooltip";
export { popover, type PopoverProps } from "./components/popover";

export {
    form,
    type FormProps,
    type InputProps,
    type LabelProps,
    type MessageProps,
} from "./components/form";

export { aligner, type AlignerProps } from "./components/aligner";
export { scrollArea } from "./components/scrollArea";
export { progress, type RootProps, type IndicatorProps } from "./components/progress";
export {
    select,
    soft as selectSoft,
    solid as selectSolid,
    trigger,
    type SelectProps,
    type TriggerProps,
} from "./components/select";

export {
    tooltip as vTooltip,
    cartesianGrid,
    axis,
    type TooltipProps as VTooltipProps,
} from "./components/visualizations";

export { area, gradientStop, type AreaProps } from "./components/visualizations";
export { toast, type ToastProps } from "./components/toast";
export { drawer, type DrawerProps } from "./components/drawer";
export {
    tabs,
    type ListProps as TabsListProps,
    type IndicatorProps as TabsIndicatorProps,
} from "./components/tabs";

export { toggle, type ToggleRootProps, type ToggleIconProps } from "./components/toggle";
