import { themer } from "./plugin";
export default themer;
export { themer, appearance, setAppearance } from "./plugin";
export * as preconfigs from "./config/preconfigs";
export { Types } from "./config/index";

export {
    button,
    icon as buttonIcon,
    type Button as ButtonType,
    type IconType as ButtonIconType,
} from "./components/button";

export { badge, type Badge as BadgeType } from "./components/badge";

export { accordion, type Accordion } from "./components/accordion";
export { alertDialog } from "./components/alertDialog";
export { separator, type SeparatorType } from "./components/separator";

export {
    annonceRoot,
    annonceConcern,
    type AnnonceRootVariants,
    type AnnonceConcernVariants,
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
