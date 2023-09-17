import { getOutlinedIconButtonSizes, leadingIconSizes } from "./base";

const outlinedLeadingIconButton = {
    primary: getOutlinedIconButtonSizes("primary"),
    secondary: getOutlinedIconButtonSizes("secondary"),
    accent: getOutlinedIconButtonSizes("accent"),
    danger: getOutlinedIconButtonSizes("danger"),
    success: getOutlinedIconButtonSizes("success"),
    warning: getOutlinedIconButtonSizes("warning"),
    info: getOutlinedIconButtonSizes("info"),
    gray: getOutlinedIconButtonSizes("gray"),
    neutral: getOutlinedIconButtonSizes("neutral"),
    icon: leadingIconSizes,
};

export default outlinedLeadingIconButton;
export { outlinedLeadingIconButton };
