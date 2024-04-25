import { tv } from "tailwind-variants";

export const progress = tv({
    slots: {
        root: "[--ui-soft-bg:theme(colors.gray.200)] rounded-full overflow-hidden",
        indicator:
            "ease-[cubic-bezier(0.65,0,0.35,1)] rounded-full size-full transition-transform duration-[660ms]",
    },
    variants: {
        variant: {
            soft: {
                root: "bg-[--ui-soft-bg] dark:bg-gray-500/15",
            },
            outlined: {
                root: "border",
            },
            mixed: {
                root: "bg-[--ui-soft-bg] dark:bg-gray-500/15 border",
            },
            fancy: {
                root: "bg-[--ui-soft-bg] bg-gray-200 dark:bg-gray-500/15 border shadow-inner shadow-gray-950/5 dark:shadow-gray-950/50",
            },
        },
        intent: {
            primary: {
                indicator: "bg-primary-600",
            },
            gradient: {
                indicator: "bg-gradient-to-r",
            },
            accent: {
                indicator: "bg-accent-600",
            },
            danger: {
                indicator: "bg-danger-600",
            },
            gray: {
                indicator: "bg-gray-600",
            },
            info: {
                indicator: "bg-info-600",
            },
            neutral: {
                indicator: "bg-gray-950 dark:bg-white",
            },
            secondary: {
                indicator: "bg-secondary-600",
            },
            success: {
                indicator: "bg-success-600",
            },
            warning: {
                indicator: "bg-warning-600",
            },
        },
        indeterminate: {
            primary: {
                indicator: "data-[state=indeterminate]:bg-primary-600",
            },
            gradient: {
                indicator: "data-[state=indeterminate]:bg-gradient-to-r",
            },
            accent: {
                indicator: "data-[state=indeterminate]:bg-accent-600",
            },
            danger: {
                indicator: "data-[state=indeterminate]:bg-danger-600",
            },
            gray: {
                indicator: "data-[state=indeterminate]:bg-gray-600",
            },
            info: {
                indicator: "data-[state=indeterminate]:bg-info-600",
            },
            neutral: {
                indicator: "data-[state=indeterminate]:bg-gray-950 dark:bg-white",
            },
            secondary: {
                indicator: "data-[state=indeterminate]:bg-secondary-600",
            },
            success: {
                indicator: "data-[state=indeterminate]:bg-success-600",
            },
            warning: {
                indicator: "data-[state=indeterminate]:bg-warning-600",
            },
        },
        complete: {
            primary: {
                indicator: "data-[state=complete]:bg-primary-600",
            },
            gradient: {
                indicator: "data-[state=complete]:bg-gradient-to-r",
            },
            accent: {
                indicator: "data-[state=complete]:bg-accent-600",
            },
            danger: {
                indicator: "data-[state=complete]:bg-danger-600",
            },
            gray: {
                indicator: "data-[state=complete]:bg-gray-600",
            },
            info: {
                indicator: "data-[state=complete]:bg-info-600",
            },
            neutral: {
                indicator: "data-[state=complete]:bg-gray-950 dark:data-[state=complete]:bg-white",
            },
            secondary: {
                indicator: "data-[state=complete]:bg-secondary-600",
            },
            success: {
                indicator: "data-[state=complete]:bg-success-600",
            },
            warning: {
                indicator: "data-[state=complete]:bg-warning-600",
            },
        },
        loading: {
            primary: {
                indicator: "data-[state=loading]:bg-primary-600",
            },
            gradient: {
                indicator: "data-[state=loading]:bg-gradient-to-r",
            },
            accent: {
                indicator: "data-[state=loading]:bg-accent-600",
            },
            danger: {
                indicator: "data-[state=loading]:bg-danger-600",
            },
            gray: {
                indicator: "data-[state=loading]:bg-gray-600",
            },
            info: {
                indicator: "data-[state=loading]:bg-info-600",
            },
            neutral: {
                indicator: "data-[state=loading]:bg-gray-950 dark:data-[state=loading]:bg-white",
            },
            secondary: {
                indicator: "data-[state=loading]:bg-secondary-600",
            },
            success: {
                indicator: "data-[state=loading]:bg-success-600",
            },
            warning: {
                indicator: "data-[state=loading]:bg-warning-600",
            },
        },
        size: {
            xs: {
                root: "h-0.5",
            },
            sm: {
                root: "h-1",
            },
            md: {
                root: "h-1.5",
            },
            lg: {
                root: "h-2.5",
            },
            xl: {
                root: "h-3.5",
            },
            "2xl": {
                root: "h-5",
            },
        },
        withStripes: {
            true: {
                indicator:
                    "relative overflow-hidden before:absolute before:inset-y-0 before:-inset-x-6 before:[--stripes-color:theme(colors.white/0.15)] before:[background-size:14px_14px] before:[background-image:linear-gradient(-45deg,var(--stripes-color)_25%,transparent_25%,transparent_50%,var(--stripes-color)_50%,var(--stripes-color)_75%,_transparent_75%,transparent)] before:animate-stripesSlide data-[state=complete]:before:hidden",
            },
        },
        withHighlight: {
            true: {
                indicator:
                    "relative overflow-hidden before:absolute before:inset-y-0 before:w-3 before:bg-gradient-to-r before:from-transparent before:blur-sm before:via-white/75 before:to-transparent before:animate-highlightSlide data-[state=complete]:before:hidden",
            },
        },
        innerShadow: {
            true: {
                indicator: "shadow-inner shadow-white/50",
            },
        },
    },
    compoundVariants: [
        {
            complete: "neutral",
            class: {
                indicator: "dark:before:[--stripes-color:theme(colors.gray.950/0.15)]",
            },
        },
        {
            intent: "neutral",
            class: {
                indicator: "dark:before:[--stripes-color:theme(colors.gray.950/0.15)]",
            },
        },
        {
            loading: "neutral",
            class: {
                indicator: "dark:before:[--stripes-color:theme(colors.gray.950/0.15)]",
            },
        },
        {
            indeterminate: "neutral",
            class: {
                indicator: "dark:before:[--stripes-color:theme(colors.gray.950/0.15)]",
            },
        },
    ],
    defaultVariants: {
        size: "md",
        variant: "soft",
        intent: "primary",
        indeterminate: "gray",
        complete: "success",
        withStripes: false,
    },
});

export type RootProps = {
    size?: keyof typeof progress.variants.size;
    variant?: keyof typeof progress.variants.variant;
};

export type IndicatorProps = {
    intent?: keyof typeof progress.variants.intent;
    indeterminate?: keyof typeof progress.variants.indeterminate;
    complete?: keyof typeof progress.variants.complete;
    loading?: keyof typeof progress.variants.loading;
    withStripes?: boolean;
    withHighlight?: boolean;
    innerShadow?: boolean;
};
