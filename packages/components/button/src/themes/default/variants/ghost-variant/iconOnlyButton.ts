import { getGhostIconOnlyButtonSizes, iconSizes } from "./base";

const ghostIconButton = {
    primary: getGhostIconOnlyButtonSizes("primary"),
    secondary: getGhostIconOnlyButtonSizes("secondary"),
    accent: getGhostIconOnlyButtonSizes("accent"),
    danger: getGhostIconOnlyButtonSizes("danger"),
    success: getGhostIconOnlyButtonSizes("success"),
    warning: getGhostIconOnlyButtonSizes("warning"),
    info: getGhostIconOnlyButtonSizes("info"),
    gray: getGhostIconOnlyButtonSizes("gray"),
    neutral: getGhostIconOnlyButtonSizes("neutral"),
    icon: iconSizes,
};

export default ghostIconButton;
export { ghostIconButton };
