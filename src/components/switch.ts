import { tv, type VariantProps } from "tailwind-variants";
export const switchTheme = tv({
    slots: {
        root: "relative inline-block border-[0.5px] border-[--form-border-color] group rounded-full h-5 w-8 bg-gray-300 dark:bg-white/15 outline-2 outline-primary-600 outline-offset-2 overflow-hidden before:absolute before:inset-0 before:rounded-full before:transition-[transform,background,shadow] before:duration-300 before:-translate-x-3 data-[state=checked]:before:-translate-x-0 focus-visible:outline data-[state=checked]:border-transparent disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:opacity-50 disabled:shadow-none disabled:data-[state=checked]:before:bg-gray-300 dark:disabled:data-[state=checked]:before:bg-gray-700 disabled:data-[state=checked]:before:shadow-none",
        thumb: "absolute inset-x-[3px] inset-y-0 my-auto size-3.5 rounded-full bg-white shadow-sm shadow-gray-950/25 transition-[transform,width] ease-in-out duration-300 will-change-transform data-[state=checked]:translate-x-[11px]",
    },
    variants: {
        intent: {
            primary: {
                root: "data-[state=checked]:before:bg-primary-600",
            },
            gray: {
                root: "data-[state=checked]:before:bg-gray-600 dark:before:data-[state=checked]:bg-gray-400",
                thumb: "dark:data-[state=checked]:bg-gray-950",
            },
            neutral: {
                root: "data-[state=checked]:before:bg-gray-950 dark:before:data-[state=checked]:bg-white",
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
        root: "before:inset-px before:transition-transform data-[state=checked]:[--radial-opacity:0.3] before:[box-shadow:rgba(255,255,255,0.1)_0px_1px_0px_0px_inset,var(--switch-border-color)_0px_0px_0px_1px] before:[background-image:radial-gradient(76%_151%_at_52%_-52%,rgba(255,255,255,var(--radial-opacity))_0%,transparent_100%)] disabled:before:[background-image:none]",
    },
    variants: {
        intent: {
            primary: {
                root: "data-[state=checked]:[--switch-border-color:theme(colors.primary.600)]",
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

export type SwitchProps = VariantProps<typeof switchTheme>;
