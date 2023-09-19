import * as baseToggle from "./base";

const root = {
    primary: baseToggle.getRootSizes("primary"),
    secondary: baseToggle.getRootSizes("secondary"),
    accent: baseToggle.getRootSizes("accent"),
    danger: baseToggle.getRootSizes("danger"),
    warning: baseToggle.getRootSizes("warning"),
    success: baseToggle.getRootSizes("success"),
    gray: baseToggle.getRootSizes("gray"),
    neutral: baseToggle.getRootSizes("neutral"),
};

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

const highlightRootToggle = {
    root: root,
    icon: baseToggle.icon,
    iconBefore: baseToggle.iconBefore,
    iconAfter: iconAfter,
};

export default highlightRootToggle;
export { highlightRootToggle };
