import { getSoftButtonSizes } from "./base";

const softButton = {
    primary: getSoftButtonSizes("primary"),
    secondary: getSoftButtonSizes("secondary"),
    accent: getSoftButtonSizes("accent"),
    danger: getSoftButtonSizes("danger"),
    success: getSoftButtonSizes("success"),
    warning: getSoftButtonSizes("warning"),
    info: getSoftButtonSizes("info"),
    gray: getSoftButtonSizes("gray"),
    neutral: getSoftButtonSizes("neutral"),
};

export default softButton;
export { softButton };
