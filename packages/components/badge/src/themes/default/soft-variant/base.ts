import { getBaseBadge, badgeSizes } from "../base";
import softColors from "./colors";

const getSoftBadgeSizes = (color, sizes = badgeSizes) => {
    return {
        sm: `${getBaseBadge(color, softColors)} ${sizes.sm}`,
        md: `${getBaseBadge(color, softColors)} ${sizes.md}`,
        lg: `${getBaseBadge(color, softColors)} ${sizes.lg}`,
    };
};

export { getSoftBadgeSizes };
