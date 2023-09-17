import solidColors from "./colors";
const base = "rounded-[--badge-border-radius] font-medium block w-fit";

const badgeSizes = {
    sm: "px-1.5 py-0.5 text-xs",
    md: "px-2 py-0.5 text-sm",
    lg: "px-2.5 py-1 text-sm",
};

const getBaseBadge = (color, colors: any = solidColors) => {
    return `${base} ${colors[color]}`;
};

const getBadgeSizes = (color, sizes = badgeSizes) => {
    return {
        sm: `${getBaseBadge(color)} ${sizes.sm}`,
        md: `${getBaseBadge(color)} ${sizes.md}`,
        lg: `${getBaseBadge(color)} ${sizes.lg}`,
    };
};

export { getBadgeSizes, getBaseBadge, badgeSizes, base };
