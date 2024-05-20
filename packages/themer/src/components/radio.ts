import { tv } from "tailwind-variants";

export const radio = tv({
    slots: {
        item: "border bg-white shadow-sm group rounded-full peer flex justify-center items-center size-[1.125rem] outline-2 outline-primary-600 outline-offset-2 hover:brightness-95 focus-visible:outline dark:bg-gray-500/10 data-[state=checked]:border-none disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:opacity-50 disabled:border-gray-300 dark:disabled:border-gray-700 disabled:shadow-none disabled:data-[state=checked]:bg-gray-300 dark:disabled:data-[state=checked]:bg-gray-700 disabled:data-[state=checked]:shadow-none",
        indicator:
            "relative size-full before:shadow before:shadow-gray-950/25 before:absolute before:inset-0 before:m-auto before:transition before:duration-150 before:size-2 before:rounded-full before:bg-white",
    },
    variants: {
        intent: {
            primary: {
                item: "data-[state=checked]:bg-primary-600",
            },
            secondary: {
                item: "data-[state=checked]:bg-secondary-600",
            },
            accent: {
                item: "data-[state=checked]:bg-accent-600",
            },
            gray: {
                item: "data-[state=checked]:bg-gray-600",
            },
            neutral: {
                item: "data-[state=checked]:bg-gray-950 dark:data-[state=checked]:bg-white",
                indicator: "dark:data-[state=checked]:before:bg-gray-950",
            },
        },
    },
    defaultVariants: {
        intent: "primary",
    },
});

export const fancyRadio = tv({
    extend: radio,
    slots: {
        item: "dark:[--radial-opacity:0] data-[state=checked]:[--radial-opacity:0.5] data-[state=checked]:[box-shadow:rgba(255,255,255,0.2)_0px_1px_0px_0px_inset,var(--checkbox-border-color)_0px_0px_0px_1px] data-[state=checked]:hover:brightness-[1.1] data-[state=checked]:[background-image:radial-gradient(76%_151%_at_52%_-52%,rgba(255,255,255,var(--radial-opacity))_0%,transparent_100%)]",
    },
    variants: {
        intent: {
            primary: {
                item: "data-[state=checked]:[--checkbox-border-color:theme(colors.primary.600)]",
            },
            secondary: {
                item: "data-[state=checked]:[--checkbox-border-color:theme(colors.secondary.600)]",
            },
            accent: {
                item: "data-[state=checked]:[--checkbox-border-color:theme(colors.accent.600)]",
            },
            gray: {
                item: "data-[state=checked]:[--checkbox-border-color:theme(colors.gray.600)]",
            },
            neutral: {
                item: "data-[state=checked]:[--checkbox-border-color:theme(colors.gray.950)]",
            },
        },
    },
});

export type RadioProps = {
    intent?: keyof typeof radio.variants.intent;
    fancy?: boolean;
};
