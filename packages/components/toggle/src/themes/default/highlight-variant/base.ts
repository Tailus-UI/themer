import { baseRoot, baseIconAfter, iconSizes, rootSizes, getIconAfter } from "../base";
import config from "../../../toggle.config";
import rootColors from "./colors";

const getRootColor = (color: string, colors: any = rootColors) => {
    return `${baseRoot.base} ${baseRoot.appearances[config.appearance]} ${colors[color]}`;
};

const getRootSizes = (color: string, sizes: any = rootSizes) => {
    return {
        xs: `${getRootColor(color)} ${sizes.xs}`,
        sm: `${getRootColor(color)} ${sizes.sm}`,
        md: `${getRootColor(color)} ${sizes.md}`,
        lg: `${getRootColor(color)} ${sizes.lg}`,
        xl: `${getRootColor(color)} ${sizes.xl}`,
    };
};

const iconAfter = {
    xs: `${baseIconAfter} ${iconSizes.xs}`,
    sm: `${baseIconAfter} ${iconSizes.sm}`,
    md: `${baseIconAfter} ${iconSizes.md}`,
    lg: `${baseIconAfter} ${iconSizes.lg}`,
    xl: `${baseIconAfter} ${iconSizes.xl}`,
};

export { getRootSizes, iconAfter };
export { icon, iconBefore } from "../base";
