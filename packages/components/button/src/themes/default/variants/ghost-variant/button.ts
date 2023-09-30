import { Button } from "../../../button.types";
import { getGhostButtonSizes } from "./base";

const ghostButton: Button = {
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
