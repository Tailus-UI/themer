import { tv, type VariantProps } from "tailwind-variants";

export type Button = VariantProps<typeof button.solid> & {
    variant: keyof typeof button | undefined;
};
export type IconType = VariantProps<typeof icon>["type"];

const baseButton = tv({
    base: "group font-medium flex justify-center gap-1.5 items-center rounded-[--btn-border-radius] outline-2 outline-offset-2 focus-visible:outline outline-primary-600 disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none disabled:hover:brightness-100 dark:disabled:bg-gray-500/10 dark:disabled:[background-image:none] dark:disabled:text-gray-700 dark:disabled:shadow-none dark:disabled:border-none",
    variants: {
        size: {
            xs: "text-sm h-7 px-3",
            sm: "text-sm h-8 px-3.5",
            md: "text-base h-9 px-4",
            lg: "text-base h-10 px-5",
            xl: "text-lg h-12 px-6",
        },
        iconOnlyButtonSize: {
            xs: "size-7",
            sm: "size-8",
            md: "size-9",
            lg: "size-10",
            xl: "size-12",
        },
        defaultVariants: {
            intent: "primary",
            size: "md",
        },
    },
});

const solid = tv({
    extend: baseButton,
    base: "[--radial-opacity:0.4] [box-shadow:rgba(255,255,255,0.35)_0px_1px_0px_0px_inset,var(--btn-border-color)_0px_0px_0px_1px] text-white hover:brightness-[1.1] dark:[--radial-opacity:0] [background-image:radial-gradient(76%_151%_at_52%_-52%,rgba(255,255,255,var(--radial-opacity))_0%,transparent_100%)] transition-[filter] duration-150 ease-in-out active:brightness-95 dark:shadow-inner dark:border-t dark:border-t-white/35 dark:shadow-white/20",
    variants: {
        intent: {
            primary: "bg-primary-600 [--btn-border-color:theme(colors.primary.600)]",
            danger: "bg-danger-600 [--btn-border-color:theme(colors.danger.600)]",
            warning:
                "bg-warning-500 text-warning-950 [--btn-border-color:theme(colors.warning.600)]",
            gray: "bg-gray-600 [--btn-border-color:theme(colors.gray.600)]",
            neutral:
                "bg-gray-900 [box-shadow:rgba(255,255,255,0.2)_0px_1px_0px_0px_inset,theme(colors.gray.900)_0px_0px_0px_1px] hover:brightness-125 dark:bg-white dark:text-gray-950",
        },
    },
});

const outlined = tv({
    extend: baseButton,
    base: "[--outline-radial-opacity:0.6] dark:[background-image:none] [--inner-border-color:1] dark:[--inner-border-color:0] dark:[--outline-radial-opacity:0.2] [background-image:radial-gradient(76%_151%_at_52%_-52%,rgba(255,255,255,var(--outline-radial-opacity))_0%,transparent_100%)] [box-shadow:rgba(255,255,255,var(--inner-border-color))_0px_1px_0px_0px_inset,var(--btn-border-color)_0px_0px_0px_1px,0px_1.5px_3px_rgba(0,0,0,0.1)] hover:brightness-[0.98] active:brightness-100 transtion-[filter] ease-in-out duration-150",
    variants: {
        intent: {
            primary:
                "[--btn-border-color:theme(colors.primary.300)] dark:[--btn-border-color:theme(colors.primary.900)] text-primary-800 bg-primary-100 dark:text-primary-300 dark:bg-primary-300/5 dark:hover:bg-primary-300/10 dark:active:bg-primary-300/15",
            danger: "[--btn-border-color:theme(colors.danger.300)] dark:[--btn-border-color:theme(colors.danger.900)] text-danger-800 bg-danger-100 dark:text-danger-300 dark:bg-danger-300/5 dark:hover:bg-danger-300/10 dark:active:bg-danger-300/15",
            warning:
                "[--btn-border-color:theme(colors.warning.300)] dark:[--btn-border-color:theme(colors.warning.900)] text-warning-800 bg-warning-100 dark:text-warning-300 dark:bg-warning-300/5 dark:hover:bg-warning-300/10 dark:active:bg-warning-300/15",
            gray: "[--btn-border-color:theme(colors.gray.300)] dark:[--btn-border-color:theme(colors.gray.800)] text-gray-800 bg-gray-100 dark:text-gray-300 dark:bg-gray-300/5 dark:hover:bg-gray-300/10 dark:active:bg-gray-300/15",
            neutral:
                "[--btn-border-color:theme(colors.gray.400)] dark:[--btn-border-color:theme(colors.gray.800)] text-gray-800 bg-gray-100 dark:text-gray-300 dark:bg-gray-300/5 dark:hover:bg-gray-300/10 dark:active:bg-gray-300/15",
        },
    },
});

const soft = tv({
    extend: baseButton,
    variants: {
        intent: {
            primary:
                "text-primary-800 bg-primary-100 hover:bg-primary-200/75 active:bg-primary-100 dark:text-primary-300 dark:bg-primary-500/10 dark:hover:bg-primary-500/15 dark:active:bg-primary-500/10",
            danger: "text-danger-800 bg-danger-100 hover:bg-danger-200/75 active:bg-danger-100 dark:text-danger-300 dark:bg-danger-500/10 dark:hover:bg-danger-500/15 dark:active:bg-danger-500/10",
            warning:
                "text-warning-800 bg-warning-100 hover:bg-warning-200/75 active:bg-warning-100 dark:text-warning-300 dark:bg-warning-500/10 dark:hover:bg-warning-500/15 dark:active:bg-warning-500/10",
            gray: "text-gray-800 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-gray-300 dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10",
            neutral:
                "text-gray-950 border-gray-950 hover:bg-gray-950 hover:text-white active:text-white active:bg-gray-900 dark:text-gray-300 dark:border-white dark:hover:bg-white dark:hover:text-gray-950 dark:active:bg-gray-200 dark:active:text-gray-950",
        },
    },
});

const ghost = tv({
    extend: baseButton,
    variants: {
        intent: {
            primary:
                "text-primary-800 hover:bg-primary-100 active:bg-primary-200/75 dark:text-primary-300 dark:hover:bg-primary-500/10 dark:active:bg-primary-500/15",
            danger: "text-danger-800 hover:bg-danger-100 active:bg-danger-200/75 dark:text-danger-300 dark:hover:bg-danger-500/10 dark:active:bg-danger-500/15",
            warning:
                "text-warning-800 hover:bg-warning-100 active:bg-warning-200/75 dark:text-warning-300 dark:hover:bg-warning-500/10 dark:active:bg-warning-500/15",
            gray: "text-gray-800 hover:bg-gray-100 active:bg-gray-200/75 dark:text-gray-300 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15",
            neutral:
                "text-gray-950 hover:bg-gray-950 hover:text-white active:text-white active:bg-gray-900 dark:text-white dark:hover:bg-white dark:hover:text-gray-950 dark:active:bg-gray-200 dark:active:text-gray-950",
        },
    },
});

export const icon = tv({
    variants: {
        type: {
            leading: "-ml-1",
            trailing: "-mr-1",
            only: "m-auto",
        },
        size: {
            xs: "size-3.5",
            sm: "size-4",
            md: "size-[1.125rem]",
            lg: "size-5",
            xl: "size-6",
        },
    },
});

export const button = {
    solid,
    outlined,
    soft,
    ghost,
};
