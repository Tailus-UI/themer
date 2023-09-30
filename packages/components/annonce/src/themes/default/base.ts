import colors from "./colors";
import config from "./../../annonce.config";
import { Colors } from "../annonce.types";

const root =
    "block w-fit flex gap-2 justify-between items-center pr-3 p-1.5 transition duration-200 rounded-[--annonce-border-radius]";

const baseConcerm =
    "block text-sm px-2 py-0.5 rounded-[calc(var(--annonce-border-radius)-0.375rem)]";

const concern: Colors = {
    primary: baseConcerm + " " + colors.primary,
    secondary: baseConcerm + " " + colors.secondary,
    accent: baseConcerm + " " + colors.accent,
    danger: baseConcerm + " " + colors.danger,
    success: baseConcerm + " " + colors.success,
    warning: baseConcerm + " " + colors.warning,
    info: baseConcerm + " " + colors.info,
    gray: baseConcerm + " " + colors.gray,
    neutral: baseConcerm + " " + colors.neutral,
};

const baseMessage = {
    base: "text-sm font-medium block",
    appearances: {
        light: "text-gray-700",
        dark: "text-gray-300",
        both: "text-gray-700 dark:text-gray-300",
    },
};

const message = baseMessage.base + " " + baseMessage.appearances[config.appearance];

export { root, concern, message };
