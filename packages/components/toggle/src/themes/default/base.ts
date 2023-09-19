import iconAfterColors from "./colors";
import config from "./../../toggle.config";

const baseRoot = {
    base: "relative group transition duration-300 flex items-center justify-center border border-transparent rounded-[--btn-border-radius] outline-none",
    appearances: {
        light: "text-gray-600 hover:bg-gray-100 hover:text-gray-800",
        dark: "focus:border-gray-700 hover:text-white dark:hover:bg-gray-900 text-gray-400",
        both: "hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white focus:border-gray-300 dark:focus:border-gray-700 dark:hover:bg-gray-900 dark:text-gray-400",
    },
};

const rootSizes = {
    xs: "h-8 w-8",
    sm: "h-9 w-9",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-14 w-14",
};

const baseIcon = "m-auto";
const baseIconBefore = "m-auto group-data-[state=on]:scale-75 group-data-[state=on]:opacity-0";
const baseIconAfter =
    "absolute inset-0 m-auto scale-75 opacity-0 transition duration-200 group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100";

const iconSizes = {
    xs: "h-[1.125rem] w-[1.125rem]",
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-10 w-10",
};

const getIcon = (size: string) => {
    return `${baseIcon} ${iconSizes[size]}`;
};

const getIconAfter = (color: string, colors: any = iconAfterColors) => {
    return baseIconAfter + " " + colors[color];
};

const getRootSize = (size: string) => {
    return `${baseRoot.base} ${baseRoot.appearances[config.appearance]} ${rootSizes[size]}`;
};

const getIconBeforeSize = (size: string) => {
    return `${baseIconBefore} ${iconSizes[size]}`;
};

const getIconAfterSizes = (color: string, sizes: any = iconSizes) => {
    return {
        xs: `${getIconAfter(color)} ${sizes.xs}`,
        sm: `${getIconAfter(color)} ${sizes.sm}`,
        md: `${getIconAfter(color)} ${sizes.md}`,
        lg: `${getIconAfter(color)} ${sizes.lg}`,
        xl: `${getIconAfter(color)} ${sizes.xl}`,
    };
};

const root = {
    xs: getRootSize("xs"),
    sm: getRootSize("sm"),
    md: getRootSize("md"),
    lg: getRootSize("lg"),
    xl: getRootSize("xl"),
};

const icon = {
    xs: getIcon("xs"),
    sm: getIcon("sm"),
    md: getIcon("md"),
    lg: getIcon("lg"),
    xl: getIcon("xl"),
};

const iconBefore = {
    xs: getIconBeforeSize("xs"),
    sm: getIconBeforeSize("sm"),
    md: getIconBeforeSize("md"),
    lg: getIconBeforeSize("lg"),
    xl: getIconBeforeSize("xl"),
};

export {
    baseRoot,
    root,
    rootSizes,
    getRootSize,
    icon,
    iconSizes,
    iconBefore,
    getIconAfter,
    getIconAfterSizes,
};
