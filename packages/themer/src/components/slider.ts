import { tv } from "tailwind-variants";

export const slider = tv({
    slots: {
        root: "[--ui-soft-bg:theme(colors.gray.200)] relative group flex items-center select-none touch-none outline-2 outline-primary-600 outline-offset-2 focus-visible:outline data-[disabled]:cursor-not-allowed",
        thumb: "block duration-200 active:scale-110 outline-2 outline-primary-600 outline-offset-2 focus:outline-none focus-visible:outline",
        track: "relative grow rounded-full bg-[--ui-soft-bg] data-[disabled]:opacity-50",
        range: "absolute rounded-full h-full data-[disabled]:opacity-50 data-[disabled]:bg-gray-200 dark:data-[disabled]:bg-gray-500/10",
    },
    variants: {
        intent: {
            primary: {
                range: "bg-primary-600",
            },
            secondary: {
                range: "bg-secondary-600",
            },
            accent: {
                range: "bg-accent-600",
            },
            gray: {
                range: "bg-gray-600 dark:bg-gray-400",
            },
            neutral: {
                range: "bg-gray-950 dark:bg-gray-200",
            },
        },
        size: {
            sm: {
                root: "h-4",
                thumb: "w-4 h-4",
                track: "h-1",
            },
            md: {
                root: "h-5",
                thumb: "w-5 h-5",
                track: "h-2",
            },
            lg: {
                root: "h-6",
                thumb: "w-6 h-6",
                track: "h-3",
            },
        },
        variant: {
            solid: {
                thumb: "rounded-full shadow-md shadow-gray-950/20 ",
            },
            raised: {
                thumb: "bg-white rounded-full shadow shadow-gray-950/25",
            },
            outlined: {
                thumb: "rounded-full border-2 bg-white dark:bg-gray-950",
            },
            fancy: {
                thumb: "rounded bg-white border cursor-ew-resize shadow shadow-gray-950/5 border-gray-300 dark:border-gray-950",
            },
        },
        trackVariant: {
            soft: {
                track: "bg-[--ui-soft-bg] dark:bg-gray-500/15",
            },
            outlined: {
                track: "border",
            },
            mixed: {
                track: "bg-[--ui-soft-bg] border dark:bg-gray-500/15",
            },
            fancy: {
                track: "bg-[--ui-soft-bg] border dark:bg-gray-500/15 shadow-inner shadow-gray-950/5 dark:shadow-gray-950/50",
            },
        },
    },
    compoundVariants: [
        {
            size: "sm",
            variant: "fancy",
            class: {
                thumb: "rounded-sm w-2",
            },
        },
        {
            size: "md",
            variant: "fancy",
            class: {
                thumb: "rounded-sm w-2.5",
            },
        },
        {
            size: "lg",
            variant: "fancy",
            class: {
                thumb: "w-3",
            },
        },
        {
            variant: "solid",
            intent: "primary",
            class: {
                thumb: "bg-primary-600",
            },
        },
        {
            variant: "solid",
            intent: "secondary",
            class: {
                thumb: "bg-secondary-600",
            },
        },
        {
            variant: "solid",
            intent: "accent",
            class: {
                thumb: "bg-accent-600",
            },
        },
        {
            variant: "solid",
            intent: "gray",
            class: {
                thumb: "bg-gray-600",
            },
        },
        {
            variant: "solid",
            intent: "neutral",
            class: {
                thumb: "bg-gray-950 dark:bg-white",
            },
        },
        {
            variant: "outlined",
            intent: "primary",
            class: {
                thumb: "border-primary-600",
            },
        },
        {
            variant: "outlined",
            intent: "secondary",
            class: {
                thumb: "border-secondary-600",
            },
        },
        {
            variant: "outlined",
            intent: "accent",
            class: {
                thumb: "border-accent-600",
            },
        },
        {
            variant: "outlined",
            intent: "gray",
            class: {
                thumb: "border-gray-600",
            },
        },
        {
            variant: "outlined",
            intent: "neutral",
            class: {
                thumb: "border-gray-950 dark:border-white",
            },
        },
    ],
    defaultVariants: {
        variant: "solid",
        size: "md",
        intent: "primary",
        trackVariant: "soft",
    },
});

export type SliderProps = {
    variant?: keyof typeof slider.variants.variant;
    size?: keyof typeof slider.variants.size;
    intent?: keyof typeof slider.variants.intent;
};

export type SliderTrackProps = {
    variant?: keyof typeof slider.variants.trackVariant;
};
