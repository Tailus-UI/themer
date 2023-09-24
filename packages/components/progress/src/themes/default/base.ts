import { getIndicatorColor } from "./colors";
import config from "./../../progress.config";

const baseRoot = {
    base: "relative h-1.5 overflow-hidden rounded-full",
    appearances: {
        light: "bg-gray-950/10",
        dark: "bg-white/10",
        both: "bg-gray-950/10 dark:bg-white/10",
    },
};

const baseIndicator =
    "ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full transition-transform duration-[660ms]";

const baseLabel = {
    base: "font-medium text-sm",
    appearances: {
        light: "text-gray-800",
        dark: "text-white",
        both: "text-gray-800 dark:text-white",
    },
};

const baseMessage = {
    base: "mt-2 block text-sm",
    appearances: {
        light: "text-gray-600",
        dark: "text-gray-400",
        both: "text-gray-600 dark:text-gray-400",
    },
};

const baseTimer = {
    base: "text-xs tracking-wide gap-1 items-center flex",
    appearances: {
        light: "text-gray-600",
        dark: "text-gray-400",
        both: "text-gray-600 dark:text-gray-400",
    },
};

const indicator = {
    primary: getIndicatorColor("primary"),
    secondary: getIndicatorColor("secondary"),
    success: getIndicatorColor("success"),
    info: getIndicatorColor("info"),
    warning: getIndicatorColor("warning"),
    danger: getIndicatorColor("danger"),
    gray: getIndicatorColor("gray"),
    neutral: getIndicatorColor("neutral"),
    gradient: getIndicatorColor("gradient"),
};

const root = baseRoot.base + " " + baseRoot.appearances[config.appearance];
const header = "items-center mb-4 flex justify-between";
const label = baseLabel.base + " " + baseLabel.appearances[config.appearance];
const message = baseMessage.base + " " + baseMessage.appearances[config.appearance];
const timer = baseTimer.base + " " + baseTimer.appearances[config.appearance];

export { root, header, baseIndicator, indicator, label, message, timer };
