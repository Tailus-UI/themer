import { getGhostIconButtonSizes, trailingIconSizes } from "./base";

const ghostTrailingIconButton = {
    primary: getGhostIconButtonSizes("primary"),
    secondary: getGhostIconButtonSizes("secondary"),
    accent: getGhostIconButtonSizes("accent"),
    danger: getGhostIconButtonSizes("danger"),
    success: getGhostIconButtonSizes("success"),
    warning: getGhostIconButtonSizes("warning"),
    info: getGhostIconButtonSizes("info"),
    gray: getGhostIconButtonSizes("gray"),
    neutral: getGhostIconButtonSizes("neutral"),
    icon: trailingIconSizes,
};

export default ghostTrailingIconButton;
export { ghostTrailingIconButton };
