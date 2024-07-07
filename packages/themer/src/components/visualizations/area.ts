import { tv } from "tailwind-variants";

/**
 * @deprecated The `area` style is deprecated, use `--dv` css variables instead
 */
export const area = tv({
    variants: {
        intent: {
            primary: "text-primary-600",
            secondary: "text-secondary-600",
            accent: "text-accent-600",
            gray: "text-gray-600",
            neutral: "text-gray-950 dark:text-white",
        },
        gradient: {
            false: "",
        },
    },
    compoundVariants: [
        {
            gradient: false,
            intent: "primary",
            class: "fill-primary-500/15",
        },
        {
            gradient: false,
            intent: "secondary",
            class: "fill-secondary-500/15",
        },
        {
            gradient: false,
            intent: "accent",
            class: "fill-accent-500/15",
        },
        {
            gradient: false,
            intent: ["gray", "neutral"],
            class: "fill-gray-500/15",
        },
    ],
    defaultVariants: {
        intent: "primary",
        gradient: false,
    },
});

export const gradientStop = tv({
    variants: {
        intent: {
            primary: "text-primary-200 dark:text-primary-600/50",
            secondary: "text-secondary-200 dark:text-secondary-600/50",
            accent: "text-accent-200 dark:text-accent-600/50",
            info: "text-info-200 dark:text-info-600/50",
            success: "text-success-200 dark:text-success-600/50",
            danger: "text-danger-200 dark:text-danger-600/50",
            warning: "text-warning-200 dark:text-warning-600/50",
            gray: "text-gray-200 dark:text-gray-600/50",
            neutral: "text-gray-500 dark:text-gray-600",
        },
    },
    defaultVariants: {
        intent: "primary",
    },
});

export type AreaProps = {
    intent?: keyof typeof area.variants.intent;
    gradient?: boolean;
};
