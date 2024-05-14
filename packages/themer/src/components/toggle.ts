import { tv } from "tailwind-variants";

export const toggle = tv({
    slots: {
        group: "flex gap-px",
        root: "group flex justify-center text-[--body-text-color] items-center rounded-[--btn-radius] outline-2 outline-offset-2 focus-visible:outline outline-primary-600 disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none disabled:hover:brightness-100 dark:disabled:bg-gray-500/10 dark:disabled:[background-image:none] dark:disabled:text-gray-700 dark:disabled:shadow-none dark:disabled:border-none",
        icon: "flex-shrink-0",
    },
    variants: {
        size: {
            xs: {
                root: "h-7 w-7",
                icon: "size-3.5",
            },
            sm: {
                root: "w-8 h-8",
                icon: "size-4",
                group: "gap-0.5",
            },
            md: {
                root: "h-9 w-9",
                icon: "size-[1.125rem]",
                group: "gap-1",
            },
            lg: {
                root: "w-10 h-10",
                icon: "size-5",
                group: "gap-1.5",
            },
            xl: {
                root: "h-12 w-12",
                icon: "size-6",
                group: "gap-2",
            },
        },
        withLabel: {
            true: {
                root: "gap-1.5 text-sm px-3.5 h-9 w-fit",
            },
        },
        variant: {
            plain: {
                root: "hover:bg-[--ui-soft-bg] data-[state=on]:hover:bg-[--soft-toggle-bg] data-[state=on]:text-[--toggle-color]",
            },
            soft: {
                root: "hover:bg-[--ui-soft-bg] data-[state=on]:text-[--soft-toggle-color] data-[state=on]:bg-[--soft-toggle-bg]",
            },
            softToSolid: {
                root: "bg-[--ui-soft-bg] data-[state=on]:text-white data-[state=on]:bg-[--solid-toggle-bg]",
            },
            mixed: {
                root: "shadow-sm shadow-gray-950/5 dark:shadow-gray-950/35 border hover:bg-[--ui-soft-bg] data-[state=on]:border-[--toggle-border] data-[state=on]:text-[--soft-toggle-color] data-[state=on]:bg-[--soft-toggle-bg]",
            },
        },
        intent: {
            primary: {
                root: "[--toggle-color:theme(colors.primary.600)] [--soft-toggle-bg:theme(colors.primary.100)] [--toggle-border:theme(colors.primary.500/.15)] [--solid-toggle-bg:theme(colors.primary.600)] [--soft-toggle-color:theme(colors.primary.800)] dark:[--toggle-color:theme(colors.primary.400)] dark:[--soft-toggle-color:theme(colors.primary.300)] dark:[--soft-toggle-bg:theme(colors.primary.500/.15)]",
            },
            secondary: {
                root: "[--soft-toggle-bg:theme(colors.secondary.100)] [--toggle-color:theme(colors.secondary.600)] [--toggle-border:theme(colors.secondary.500/.15)] [--solid-toggle-bg:theme(colors.secondary.600)] [--soft-toggle-color:theme(colors.secondary.800)] dark:[--toggle-color:theme(colors.secondary.400)] dark:[--soft-toggle-color:theme(colors.secondary.300)] dark:[--soft-toggle-bg:theme(colors.secondary.500/.15)]",
            },
            accent: {
                root: "[--soft-toggle-bg:theme(colors.accent.100)] [--toggle-color:theme(colors.accent.600)] [--toggle-border:theme(colors.accent.500/.15)] [--solid-toggle-bg:theme(colors.accent.600)] [--soft-toggle-color:theme(colors.accent.800)] dark:[--toggle-color:theme(colors.accent.400)] dark:[--soft-toggle-color:theme(colors.accent.300)] dark:[--soft-toggle-bg:theme(colors.accent.500/.15)]",
            },
            gray: {
                root: "[--soft-toggle-bg:theme(colors.gray.100)] [--toggle-color:theme(colors.gray.950)] [--toggle-border:theme(colors.gray.500/.15)] [--solid-toggle-bg:theme(colors.gray.600)] [--soft-toggle-color:theme(colors.gray.950)] dark:[--toggle-color:theme(colors.white)] dark:[--soft-toggle-color:theme(colors.white)] dark:[--soft-toggle-bg:theme(colors.gray.500/.15)]",
            },
            neutral: {
                root: "[--soft-toggle-bg:theme(colors.gray.100)] [--toggle-color:theme(colors.gray.950)] [--toggle-border:theme(colors.gray.500)] [--solid-toggle-bg:theme(colors.gray.950)] [--soft-toggle-color:theme(colors.gray.950)] dark:[--toggle-color:theme(colors.white)] dark:[--soft-toggle-color:theme(colors.white)] dark:[--soft-toggle-bg:theme(colors.gray.500/.15)] dark:[--solid-toggle-bg:theme(colors.white)]",
            },
        },
    },
    compoundVariants: [
        {
            variant: "softToSolid",
            intent: "neutral",
            class: {
                root: "data-[state=on]:text-white dark:data-[state=on]:text-gray-950",
            },
        },
        {
            withLabel: true,
            size: "xs",
            class: {
                root: "text-sm h-7 px-2",
            },
        },
        {
            withLabel: true,
            size: "sm",
            class: {
                root: "text-sm h-8 px-2.5",
            },
        },
        {
            withLabel: true,
            size: "md",
            class: {
                root: "text-base h-9 px-3",
            },
        },
        {
            withLabel: true,
            size: "lg",
            class: {
                root: "text-base h-10 px-4",
            },
        },
        {
            withLabel: true,
            size: "xl",
            class: {
                root: "text-lg h-12 px-5",
            },
        },
    ],
    defaultVariants: {
        intent: "primary",
        size: "md",
        variant: "plain",
    },
});

export type ToggleRootProps = {
    variant?: keyof typeof toggle.variants.variant;
    size?: keyof typeof toggle.variants.size;
    intent?: keyof typeof toggle.variants.intent;
    withLabel?: boolean;
};

export type ToggleIconProps = {
    size?: keyof typeof toggle.variants.size;
};
