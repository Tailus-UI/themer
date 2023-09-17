import { badgeSizes } from "../base";
import outlinedColors from "./colors";
const base = "rounded-[--badge-border-radius] border font-medium block w-fit";

const getBaseBadge = (color, colors: any = outlinedColors) => {
    return `${base} ${colors[color]}`;
};

const getOutlinedBadgeSizes = (color, sizes = badgeSizes) => {
    return {
        sm: `${getBaseBadge(color)} ${sizes.sm}`,
        md: `${getBaseBadge(color)} ${sizes.md}`,
        lg: `${getBaseBadge(color)} ${sizes.lg}`,
    };
};

export { getOutlinedBadgeSizes };
