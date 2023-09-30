import { Sizes } from "../../badge.types";
import { getBaseBadge, badgeSizes } from "../base";
import softColors from "./colors";

const getSoftBadgeSizes = (color: string, sizes = badgeSizes): Sizes => {
    return {
        sm: `${getBaseBadge(color, softColors)} ${sizes.sm}`,
        md: `${getBaseBadge(color, softColors)} ${sizes.md}`,
        lg: `${getBaseBadge(color, softColors)} ${sizes.lg}`,
    };
};

export { getSoftBadgeSizes };
