import config from "../../../tabs.config";
import { Colors } from "../../types";

const colors = {
    primary: {
        base: "data-[state=active]:bg-primary-600 data-[state=active]:text-white",
        appearances: {
            light: "text-primary-700 bg-primary-100 hover:bg-primary-200/75",
            dark: "text-primary-300 bg-primary-500/10 hover:bg-primary-500/20",
            both: "text-primary-700 dark:text-primary-300 bg-primary-100 hover:bg-primary-200/75 dark:bg-primary-500/10 dark:hover:bg-primary-500/20 hover:data-[state=active]:bg-primary-600 ",
        },
    },
    secondary: {
        base: "data-[state=active]:bg-secondary-600 data-[state=active]:text-white",
        appearances: {
            light: "text-secondary-700 bg-secondary-100 hover:bg-secondary-200/75",
            dark: "text-secondary-300 bg-secondary-500/10 hover:bg-secondary-500/20",
            both: "text-secondary-700 dark:text-secondary-300 bg-secondary-100 hover:bg-secondary-200/75 dark:bg-secondary-500/10 dark:hover:bg-secondary-500/20 hover:data-[state=active]:bg-secondary-600 ",
        },
    },
    accent: {
        base: "data-[state=active]:bg-accent-600 data-[state=active]:text-white",
        appearances: {
            light: "text-accent-700 bg-accent-100 hover:bg-accent-200/75",
            dark: "text-accent-300 bg-accent-500/10 hover:bg-accent-500/20",
            both: "text-accent-700 dark:text-accent-300 bg-accent-100 hover:bg-accent-200/75 dark:bg-accent-500/10 dark:hover:bg-accent-500/20 hover:data-[state=active]:bg-accent-600 ",
        },
    },
    gray: {
        base: "data-[state=active]:bg-gray-600 data-[state=active]:text-white",
        appearances: {
            light: "text-gray-700 bg-gray-100 hover:bg-gray-200/75",
            dark: "text-gray-300 bg-gray-500/10 hover:bg-gray-500/20",
            both: "text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200/75 dark:bg-gray-500/10 dark:hover:bg-gray-500/20 hover:data-[state=active]:bg-gray-600 ",
        },
    },
    neutral: {
        light: "text-gray-700 bg-gray-100 hover:bg-gray-200/75 data-[state=active]:bg-gray-900 data-[state=active]:text-white",
        dark: "text-gray-300 bg-gray-500/10 hover:bg-gray-500/20 data-[state=active]:bg-white data-[state=active]:text-gray-900",
        both: "text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200/75 dark:bg-gray-500/10 dark:hover:bg-gray-500/20 data-[state=active]:bg-gray-900 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-gray-900",
    },
};

const softTabsColors: Colors = {
    primary: colors.primary.base + " " + colors.primary.appearances[config.appearance],
    secondary: colors.secondary.base + " " + colors.secondary.appearances[config.appearance],
    accent: colors.accent.base + " " + colors.accent.appearances[config.appearance],
    gray: colors.gray.base + " " + colors.gray.appearances[config.appearance],
    neutral: colors.neutral[config.appearance],
};

export default softTabsColors;
