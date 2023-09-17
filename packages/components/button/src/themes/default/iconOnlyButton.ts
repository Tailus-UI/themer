import { getButtonSizes, iconSizes, iconOnlyButtonSizes } from "./base";

const getIconButtonSizes = (color) => {
    return getButtonSizes(color, iconOnlyButtonSizes);
};

const iconButton = {
    primary: getIconButtonSizes("primary"),
    secondary: getIconButtonSizes("secondary"),
    accent: getIconButtonSizes("accent"),
    danger: getIconButtonSizes("danger"),
    success: getIconButtonSizes("success"),
    warning: getIconButtonSizes("warning"),
    info: getIconButtonSizes("info"),
    gray: getIconButtonSizes("gray"),
    neutral: getIconButtonSizes("neutral"),
    icon: iconSizes,
};

export default iconButton;
export { iconButton };
