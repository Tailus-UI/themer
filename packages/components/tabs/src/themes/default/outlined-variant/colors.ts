import config from "../../../tabs.config";
import { Colors } from "../../types";

const colors = {
    primary: "data-[state=active]:bg-primary-600 data-[state=active]:text-white",
    secondary: "data-[state=active]:bg-secondary-600 data-[state=active]:text-white",
    accent: "data-[state=active]:bg-accent-600 data-[state=active]:text-white",
    gray: "data-[state=active]:bg-gray-600 data-[state=active]:text-white",

    neutral: {
        light: "data-[state=active]:bg-gray-900 data-[state=active]:text-white",
        dark: "data-[state=active]:bg-white data-[state=active]:text-gray-900",
        both: "data-[state=active]:bg-gray-900 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-gray-900",
    },
};

const outlinedTabsColors: Colors = {
    primary: colors.primary,
    secondary: colors.secondary,
    accent: colors.accent,
    gray: colors.gray,
    neutral: colors.neutral[config.appearance],
};

export default outlinedTabsColors;
