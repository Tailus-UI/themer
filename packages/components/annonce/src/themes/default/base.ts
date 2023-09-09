import colors from "./colors";
import config from "./../../annonce.config";

const root =
    "block w-fit flex gap-2 justify-between items-center pr-3 p-1.5 transition duration-200 rounded-[--annonce-border-radius]";

const baseConcerm =
    "block text-sm px-2 py-0.5 rounded-[calc(var(--annonce-border-radius)-0.375rem)]";

const concern = {
    primary: baseConcerm + " " + colors.primary[config.appearance],
    secondary: baseConcerm + " " + colors.secondary[config.appearance],
    accent: baseConcerm + " " + colors.accent[config.appearance],
    danger: baseConcerm + " " + colors.danger[config.appearance],
    success: baseConcerm + " " + colors.success[config.appearance],
    warning: baseConcerm + " " + colors.warning[config.appearance],
    gray: baseConcerm + " " + colors.gray[config.appearance],
    neutral: baseConcerm + " " + colors.neutral[config.appearance],
};

const message = {
    base: "text-sm font-medium block",
    appearances: {
        light: "text-gray-700",
        dark: "text-gray-300",
        both: "text-gray-700 dark:text-gray-300",
    },
};

export { root, concern, message };
