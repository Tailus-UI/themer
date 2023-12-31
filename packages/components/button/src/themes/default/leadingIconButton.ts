import { getIconButtonSizes, leadingIconSizes } from "./base";

const leadingIconButton = {
    primary: getIconButtonSizes("primary"),
    secondary: getIconButtonSizes("secondary"),
    accent: getIconButtonSizes("accent"),
    danger: getIconButtonSizes("danger"),
    success: getIconButtonSizes("success"),
    warning: getIconButtonSizes("warning"),
    info: getIconButtonSizes("info"),
    gray: getIconButtonSizes("gray"),
    neutral: getIconButtonSizes("neutral"),
    icon: leadingIconSizes,
};

export default leadingIconButton;
export { leadingIconButton };
