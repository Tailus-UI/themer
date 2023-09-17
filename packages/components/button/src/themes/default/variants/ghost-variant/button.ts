import { getGhostButtonSizes } from "./base";

const ghostButton = {
    primary: getGhostButtonSizes("primary"),
    secondary: getGhostButtonSizes("secondary"),
    accent: getGhostButtonSizes("accent"),
    danger: getGhostButtonSizes("danger"),
    success: getGhostButtonSizes("success"),
    warning: getGhostButtonSizes("warning"),
    info: getGhostButtonSizes("info"),
    gray: getGhostButtonSizes("gray"),
    neutral: getGhostButtonSizes("neutral"),
};

export default ghostButton;
export { ghostButton };
