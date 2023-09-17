import { getOutlinedIconButtonSizes, trailingIconSizes } from "./base";

const outlinedTrailingIconButton = {
    primary: getOutlinedIconButtonSizes("primary"),
    secondary: getOutlinedIconButtonSizes("secondary"),
    accent: getOutlinedIconButtonSizes("accent"),
    danger: getOutlinedIconButtonSizes("danger"),
    success: getOutlinedIconButtonSizes("success"),
    warning: getOutlinedIconButtonSizes("warning"),
    info: getOutlinedIconButtonSizes("info"),
    gray: getOutlinedIconButtonSizes("gray"),
    neutral: getOutlinedIconButtonSizes("neutral"),
    icon: trailingIconSizes,
};

export default outlinedTrailingIconButton;
export { outlinedTrailingIconButton };
