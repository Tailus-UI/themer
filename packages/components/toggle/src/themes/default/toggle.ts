import { Toggle } from "../types";
import * as baseToggle from "./base";

const iconAfter = {
    primary: baseToggle.getIconAfterSizes("primary"),
    secondary: baseToggle.getIconAfterSizes("secondary"),
    accent: baseToggle.getIconAfterSizes("accent"),
    danger: baseToggle.getIconAfterSizes("danger"),
    warning: baseToggle.getIconAfterSizes("warning"),
    success: baseToggle.getIconAfterSizes("success"),
    gray: baseToggle.getIconAfterSizes("gray"),
    neutral: baseToggle.getIconAfterSizes("neutral"),
};

const toggle: Toggle = {
    root: baseToggle.root,
    icon: baseToggle.icon,
    iconBefore: baseToggle.iconBefore,
    iconAfter: iconAfter,
};

export default toggle;
export { toggle };
