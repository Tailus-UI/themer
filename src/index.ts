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
