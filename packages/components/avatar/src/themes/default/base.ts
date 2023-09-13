const root = "relative block rounded-[--avatar-border-radius]";

const sizes = {
    xs: "text-sm h-6 w-6",
    sm: "text-base h-8 w-8",
    md: "text-lg h-10 w-10",
    lg: "text-lg h-12 w-12",
    xl: "text-xl h-14 w-14",
};

const colors = {
    primary: {
        light: "text-primary-900 bg-primary-200",
        dark: "text-primary-200 bg-primary-900",
        both: "text-primary-900 dark:text-primary-200 bg-primary-200 dark:bg-primary-900",
    },
    secondary: {
        light: "text-secondary-900 bg-secondary-200",
        dark: "text-secondary-200 bg-secondary-900",
        both: "text-secondary-900 dark:text-secondary-200 bg-secondary-200 dark:bg-secondary-900",
    },
    accent: {
        light: "text-accent-900 bg-accent-200",
        dark: "text-accent-200 bg-accent-900",
        both: "text-accent-900 dark:text-accent-200 bg-accent-200 dark:bg-accent-900",
    },
    danger: {
        light: "text-danger-900 bg-danger-200",
        dark: "text-danger-200 bg-danger-900",
        both: "text-danger-900 dark:text-danger-200 bg-danger-200 dark:bg-danger-900",
    },
    success: {
        light: "text-success-900 bg-success-200",
        dark: "text-success-200 bg-success-900",
        both: "text-success-900 dark:text-success-200 bg-success-200 dark:bg-success-900",
    },
    warning: {
        light: "text-warning-900 bg-warning-200",
        dark: "text-warning-200 bg-warning-900",
        both: "text-warning-900 dark:text-warning-200 bg-warning-200 dark:bg-warning-900",
    },
    info: {
        light: "text-info-900 bg-info-200",
        dark: "text-info-200 bg-info-900",
        both: "text-info-900 dark:text-info-200 bg-info-200 dark:bg-info-900",
    },
    gray: {
        light: "text-gray-900 bg-gray-200",
        dark: "text-gray-200 bg-gray-900",
        both: "text-gray-900 dark:text-gray-200 bg-gray-200 dark:bg-gray-900",
    },
    neutral: {
        light: "bg-gray-900 text-white",
        dark: "bg-white text-gray-900",
        both: "bg-gray-900 text-white dark:bg-white dark:text-gray-900",
    },
};

const image = "h-full w-full rounded-[--avatar-border-radius] object-cover";

const avatarStatus = {
    base: "before:absolute before:z-[1] before:right-[--avatar-status-position] before:h-3 before:w-3 before:rounded-full before:border-2",
    appearances: {
        light: "before:border-white",
        dark: "before:border-gray-950",
        both: "before:border-white dark:before:border-gray-950",
    },
};

const statusColors = {
    online: "before:bg-success-500",
    offline: "before:bg-gray-500",
    away: "before:bg-warning-600",
    busy: "before:bg-danger-500",
};

const fallback =
    "absolute inset-0 m-auto h-full flex items-center justify-center rounded-[--avatar-border-radius] w-full font-medium";

export { root, image, sizes, colors, avatarStatus, statusColors, fallback };
