import { getGhostIconButtonSizes, leadingIconSizes } from "./base";

const ghostLeadingIconButton = {
    primary: getGhostIconButtonSizes("primary"),
    secondary: getGhostIconButtonSizes("secondary"),
    accent: getGhostIconButtonSizes("accent"),
    danger: getGhostIconButtonSizes("danger"),
    success: getGhostIconButtonSizes("success"),
    warning: getGhostIconButtonSizes("warning"),
    info: getGhostIconButtonSizes("info"),
    gray: getGhostIconButtonSizes("gray"),
    neutral: getGhostIconButtonSizes("neutral"),
    icon: leadingIconSizes,
};

export default ghostLeadingIconButton;
export { ghostLeadingIconButton };
