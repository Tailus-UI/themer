import { getMessage } from "./base/sizes";
import { type MessageColorsSizes } from "./base/colors";

const message: MessageColorsSizes = {
    primary: getMessage("primary"),
    secondary: getMessage("secondary"),
    accent: getMessage("accent"),
    danger: getMessage("danger"),
    success: getMessage("success"),
    warning: getMessage("warning"),
    info: getMessage("info"),
    gray: getMessage("gray"),
};

export default message;
