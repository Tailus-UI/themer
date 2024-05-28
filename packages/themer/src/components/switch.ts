import { tv } from "tailwind-variants";
export const switchTheme = tv({
    slots: {
        root: "relative inline-block border-[0.5px] border border-gray-950/5 group rounded-full h-5 w-8 bg-gray-200 transition dark:bg-white/15 outline-2 outline-primary-600 outline-offset-2 overflow-hidden focus-visible:outline disabled:bg-gray-100 dark:border-white/5 data-[state=checked]:border-white/5 dark:disabled:bg-gray-800 disabled:opacity-50 disabled:shadow-none",
        thumb: "absolute inset-x-[1px] inset-y-0 my-auto size-4 rounded-full bg-white shadow-sm shadow-gray-950/25 transition-[transform,width] ease-in-out duration-300 will-change-transform data-[state=checked]:translate-x-3",
    },
    variants: {
        intent: {
            primary: {
                root: "data-[state=checked]:bg-primary-600",
            },
            secondary: {
                root: "data-[state=checked]:bg-secondary-600",
            },
            accent: {
                root: "data-[state=checked]:bg-accent-600",
            },
            gray: {
                root: "data-[state=checked]:bg-gray-600 dark:data-[state=checked]:bg-gray-400",
                thumb: "dark:data-[state=checked]:bg-gray-950",
            },
            neutral: {
                root: "data-[state=checked]:bg-gray-950 dark:data-[state=checked]:bg-white",
                thumb: "dark:bg-gray-950",
            },
        },
    },
    defaultVariants: {
        intent: "primary",
    },
});

export const fancySwitch = tv({
    extend: switchTheme,
    slots: {
        root: "shadow-inner shadow-gray-950/10 data-[state=checked]:border-none dark:shadow-gray-950/50 data-[state=checked]:[--radial-opacity:0.5] data-[state=checked]:[box-shadow:rgba(255,255,255,0.1)_0px_1px_0px_0px_inset,var(--switch-border-color)_0px_0px_0px_1px] data-[state=checked]:[background-image:radial-gradient(76%_151%_at_52%_-52%,rgba(255,255,255,var(--radial-opacity))_0%,transparent_100%)] disabled:[background-image:none]",
        thumb: "data-[state=checked]:translate-x-3.5",
    },
    variants: {
        intent: {
            primary: {
                root: "data-[state=checked]:[--switch-border-color:theme(colors.primary.600)]",
            },
            secondary: {
                root: "data-[state=checked]:[--switch-border-color:theme(colors.secondary.600)]",
            },
            accent: {
                root: "data-[state=checked]:[--switch-border-color:theme(colors.accent.600)]",
            },
            gray: {
                root: "data-[state=checked]:[--switch-border-color:theme(colors.gray.600)]",
            },
            neutral: {
                root: "data-[state=checked]:[--radial-opacity:0.5] data-[state=checked]:[--switch-border-color:theme(colors.gray.950)]",
            },
        },
    },
});

export type SwitchProps = {
    intent?: keyof typeof switchTheme.variants.intent;
    fancy?: boolean;
};
