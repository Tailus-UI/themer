import { getSoftBadgeSizes } from "./base";
import { Badge } from "../../badge.types";

const softBadge: Badge = {
    primary: getSoftBadgeSizes("primary"),
    secondary: getSoftBadgeSizes("secondary"),
    accent: getSoftBadgeSizes("accent"),
    danger: getSoftBadgeSizes("danger"),
    success: getSoftBadgeSizes("success"),
    warning: getSoftBadgeSizes("warning"),
    info: getSoftBadgeSizes("info"),
    gray: getSoftBadgeSizes("gray"),
};

export default softBadge;
export { softBadge };
