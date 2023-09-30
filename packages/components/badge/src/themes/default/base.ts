import solidColors from "./colors";
import { Sizes, Colors } from "../badge.types";

const base = "rounded-[--badge-border-radius] font-medium block w-fit";

const badgeSizes: Sizes = {
    sm: "px-1.5 py-0.5 text-xs",
    md: "px-2 py-0.5 text-sm",
    lg: "px-2.5 py-1 text-sm",
};

const getBaseBadge = (color: string, colors: Colors = solidColors): string => {
    return `${base} ${colors[color]}`;
};

const getBadgeSizes = (color: string, sizes: Sizes = badgeSizes): Sizes => {
    return {
        sm: `${getBaseBadge(color)} ${sizes.sm}`,
        md: `${getBaseBadge(color)} ${sizes.md}`,
        lg: `${getBaseBadge(color)} ${sizes.lg}`,
    };
};

export { getBadgeSizes, getBaseBadge, badgeSizes, base };
