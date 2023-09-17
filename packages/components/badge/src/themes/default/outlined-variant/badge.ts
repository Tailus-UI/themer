import { getOutlinedBadgeSizes } from "./base";

const outlinedBadge = {
    primary: getOutlinedBadgeSizes("primary"),
    secondary: getOutlinedBadgeSizes("secondary"),
    accent: getOutlinedBadgeSizes("accent"),
    danger: getOutlinedBadgeSizes("danger"),
    success: getOutlinedBadgeSizes("success"),
    warning: getOutlinedBadgeSizes("warning"),
    info: getOutlinedBadgeSizes("info"),
    gray: getOutlinedBadgeSizes("gray"),
};

export default outlinedBadge;
export { outlinedBadge };
