import { getOutlinedBadgeSizes } from "./base";
import { Badge } from "../../badge.types";

const outlinedBadge: Badge = {
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
