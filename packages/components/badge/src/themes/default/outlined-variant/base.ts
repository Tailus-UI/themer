import { Colors, Sizes } from "../../badge.types";
import { badgeSizes } from "../base";
import outlinedColors from "./colors";
const base = "rounded-[--badge-border-radius] border font-medium block w-fit";

const getBaseBadge = (color: string, colors: Colors = outlinedColors): string => {
    return `${base} ${colors[color]}`;
};

const getOutlinedBadgeSizes = (color: string, sizes: Sizes = badgeSizes): Sizes => {
    return {
        sm: `${getBaseBadge(color)} ${sizes.sm}`,
        md: `${getBaseBadge(color)} ${sizes.md}`,
        lg: `${getBaseBadge(color)} ${sizes.lg}`,
    };
};

export { getOutlinedBadgeSizes };
