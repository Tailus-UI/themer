import { getBadgeSizes } from "./base";

const badge = {
    primary: getBadgeSizes("primary"),
    secondary: getBadgeSizes("secondary"),
    accent: getBadgeSizes("accent"),
    danger: getBadgeSizes("danger"),
    success: getBadgeSizes("success"),
    warning: getBadgeSizes("warning"),
    info: getBadgeSizes("info"),
    gray: getBadgeSizes("gray"),
};

export default badge;
export { badge };
