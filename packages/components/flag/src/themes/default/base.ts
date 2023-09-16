const root = {
    base: "relative flex max-w-md items-center gap-1 rounded-[--alert-border-radius] border px-4 py-2 feedback-shadow",
    appearances: {
        light: "border-[--feedback-light-border-color] bg-white",
        dark: "border-[--feedback-dark-border-color] bg-[--feedback-dark-bg]",
        both: "border-[--feedback-light-border-color] bg-white border-[--feedback-dark-border-color] bg-[--feedback-dark-bg]",
    },
};

const link = {
    base: "hover:underline",
    appearances: {
        light: "text-info-600",
        dark: "text-info-400",
        both: "text-info-600 dark:text-info-400",
    },
};

const icon = {
    parent: "flex w-8",
    icon: "h-6 w-6",
};

const title = "text-sm font-medium";

const message = {
    base: "mt-2 text-sm leading-tight",
    appearances: {
        light: "text-gray-700",
        dark: "text-gray-300",
        both: "text-gray-700 dark:text-gray-300",
    },
};

const actions = "mt-4 flex items-center gap-4";

const iconColors = {
    success: {
        light: "text-success-600",
        dark: "text-success-400",
        both: "text-success-600 dark:text-success-400",
    },
    info: {
        light: "text-info-600",
        dark: "text-info-400",
        both: "text-info-600 dark:text-info-400",
    },
    warning: {
        light: "text-warning-600",
        dark: "text-warning-400",
        both: "text-warning-600 dark:text-warning-400",
    },
    danger: {
        light: "text-danger-600",
        dark: "text-danger-400",
        both: "text-danger-600 dark:text-danger-400",
    },
    gray: {
        light: "text-gray-600",
        dark: "text-gray-400",
        both: "text-gray-600 dark:text-gray-400",
    },
};

const titleColors = {
    success: {
        light: "text-success-950",
        dark: "text-white",
        both: "text-success-950 dark:text-white",
    },
    info: {
        light: "text-info-950",
        dark: "text-white",
        both: "text-info-950 dark:text-white",
    },
    warning: {
        light: "text-warning-950",
        dark: "text-white",
        both: "text-warning-950 dark:text-white",
    },
    danger: {
        light: "text-danger-950",
        dark: "text-white",
        both: "text-danger-950 dark:text-white",
    },
    gray: {
        light: "text-gray-950",
        dark: "text-white",
        both: "text-gray-950 dark:text-white",
    },
};

export { root, link, icon, title, message, actions, iconColors, titleColors };
