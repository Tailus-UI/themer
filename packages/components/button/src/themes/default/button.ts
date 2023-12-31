import { Button } from "../button.types";
import { getButtonSizes } from "./base";

const button: Button = {
    primary: getButtonSizes("primary"),
    secondary: getButtonSizes("secondary"),
    accent: getButtonSizes("accent"),
    danger: getButtonSizes("danger"),
    success: getButtonSizes("success"),
    warning: getButtonSizes("warning"),
    info: getButtonSizes("info"),
    gray: getButtonSizes("gray"),
    neutral: getButtonSizes("neutral"),
};

export default button;
export { button };
