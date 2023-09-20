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

const highlightRootToggle = {
    root: root,
    icon: baseToggle.icon,
    iconBefore: baseToggle.iconBefore,
    iconAfter: baseToggle.iconAfter,
};

export default highlightRootToggle;
export { highlightRootToggle };
