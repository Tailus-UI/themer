import { getOutlinedButtonSizes } from "./base";

const outlinedButton = {
    primary: getOutlinedButtonSizes("primary"),
    secondary: getOutlinedButtonSizes("secondary"),
    accent: getOutlinedButtonSizes("accent"),
    danger: getOutlinedButtonSizes("danger"),
    success: getOutlinedButtonSizes("success"),
    warning: getOutlinedButtonSizes("warning"),
    info: getOutlinedButtonSizes("info"),
    gray: getOutlinedButtonSizes("gray"),
    neutral: getOutlinedButtonSizes("neutral"),
};

export default outlinedButton;
export { outlinedButton };
