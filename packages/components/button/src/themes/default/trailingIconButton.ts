import { getIconButtonSizes, trailingIconSizes } from "./base";

const trailingIconButton = {
    primary: getIconButtonSizes("primary"),
    secondary: getIconButtonSizes("secondary"),
    accent: getIconButtonSizes("accent"),
    danger: getIconButtonSizes("danger"),
    success: getIconButtonSizes("success"),
    warning: getIconButtonSizes("warning"),
    info: getIconButtonSizes("info"),
    gray: getIconButtonSizes("gray"),
    neutral: getIconButtonSizes("neutral"),
    icon: trailingIconSizes,
};

export default trailingIconButton;
export { trailingIconButton };
