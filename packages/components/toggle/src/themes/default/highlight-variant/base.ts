import { baseRoot, iconSizes, rootSizes, getIconAfter } from "../base";
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

const getIconAfterSizes = (color: string, sizes: any = iconSizes) => {
    return {
        xs: `${getIconAfter(color, rootColors)} ${sizes.xs}`,
        sm: `${getIconAfter(color, rootColors)} ${sizes.sm}`,
        md: `${getIconAfter(color, rootColors)} ${sizes.md}`,
        lg: `${getIconAfter(color, rootColors)} ${sizes.lg}`,
        xl: `${getIconAfter(color, rootColors)} ${sizes.xl}`,
    };
};

export { getRootSizes, getIconAfterSizes };
export { icon, iconBefore } from "../base";
