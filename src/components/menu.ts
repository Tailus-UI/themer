import { tv } from "tailwind-variants";

const itemClasses =
    "relative flex select-none items-center text-sm text-gray-700 dark:text-gray-300 rounded-[calc(var(--menu-radius)-0.25rem)] data-[highlighted]:text-white gap-2 px-3 h-8 leading-none outline-none data-[disabled]:text-gray-600 dark:data-[disabled]:text-gray-400 data-[disabled]:opacity-50";
const openState = "data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-500/10";

export const solid = tv({
    slots: {
        trigger: `block ${openState}`,
        content:
            "overflow-hidden rounded-[--menu-radius] menu-shadow p-1 feedback-bg data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade will-change-[opacity,transform]",
        item: itemClasses,
        subTrigger: `${itemClasses} ${openState}`,
        command: "text-xs ml-auto",
        icon: "size-4",
    },
    variants: {
        intent: {
            primary: {
                item: "data-[highlighted]:bg-primary-600",
                subTrigger: "data-[state=open]:data-[highlighted]:bg-primary-600",
            },
            warning: {
                item: "text-warning-700 dark:text-warning-400 data-[highlighted]:bg-warning-400 data-[highlighted]:text-warning-950",
                subTrigger:
                    "text-warning-700 dark:text-warning-400 data-[highlighted]:bg-warning-400 data-[highlighted]:text-warning-950 data-[state=open]:data-[highlighted]:bg-warning-400",
            },
            danger: {
                item: "text-danger-600 dark:text-danger-400 data-[highlighted]:bg-danger-600",
                subTrigger:
                    "text-danger-600 dark:text-danger-400 data-[highlighted]:bg-danger-600 data-[state=open]:data-[highlighted]:bg-danger-600",
            },
            gray: {
                item: "data-[highlighted]:bg-gray-600",
                subTrigger: "data-[state=open]:data-[highlighted]:bg-gray-600",
            },
            neutral: {
                item: "data-[highlighted]:bg-gray-950 dark:data-[highlighted]:bg-white dark:data-[highlighted]:text-gray-950",
                subTrigger:
                    "data-[highlighted]:bg-gray-950 dark:data-[highlighted]:bg-white dark:data-[highlighted]:text-gray-950 data-[state=open]:data-[highlighted]:bg-gray-950 dark:ata-[state=open]:data-[highlighted]:bg-white",
            },
        },
        mixed: {
            true: {
                content: "border",
            },
        },
        fancy: {
            true: {
                content: "fancy-border",
            },
        },
    },
    defaultVariants: {
        intent: "gray",
    },
});

export const soft = tv({
    extend: solid,
    variants: {
        intent: {
            primary: {
                item: "data-[highlighted]:bg-primary-100 data-[highlighted]:text-primary-800 dark:data-[highlighted]:bg-primary-500/10 dark:data-[highlighted]:text-primary-300",
                subTrigger:
                    "data-[highlighted]:bg-primary-100 data-[highlighted]:text-primary-800 dark:data-[highlighted]:bg-primary-500/10 dark:data-[highlighted]:text-primary-300 data-[state=open]:data-[highlighted]:bg-primary-100 dark:data-[state=open]:data-[highlighted]:bg-primary-500/10",
            },
            warning: {
                item: "data-[highlighted]:bg-warning-100 data-[highlighted]:text-warning-800 dark:data-[highlighted]:bg-warning-500/10 dark:data-[highlighted]:text-warning-300",
                subTrigger:
                    "data-[highlighted]:bg-warning-100 data-[highlighted]:text-warning-800 dark:data-[highlighted]:bg-warning-500/10 dark:data-[highlighted]:text-warning-300 data-[state=open]:data-[highlighted]:bg-warning-100 dark:data-[state=open]:data-[highlighted]:bg-warning-500/10",
            },
            danger: {
                item: "data-[highlighted]:bg-danger-100 data-[highlighted]:text-danger-800 dark:data-[highlighted]:bg-danger-500/10 dark:data-[highlighted]:text-danger-300",
                subTrigger:
                    "data-[highlighted]:bg-danger-100 data-[highlighted]:text-danger-800 dark:data-[highlighted]:bg-danger-500/10 dark:data-[highlighted]:text-danger-300 data-[state=open]:data-[highlighted]:bg-danger-100 dark:data-[state=open]:data-[highlighted]:bg-danger-500/10",
            },
            gray: {
                item: "data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-800 dark:data-[highlighted]:bg-gray-500/10 dark:data-[highlighted]:text-gray-300",
                subTrigger:
                    "data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-800 dark:data-[highlighted]:bg-gray-500/10 dark:data-[highlighted]:text-gray-300 data-[state=open]:data-[highlighted]:bg-gray-100 dark:data-[state=open]:data-[highlighted]:bg-gray-500/10",
            },
            neutral: {
                item: "data-[highlighted]:bg-gray-950 data-[highlighted]:text-white dark:data-[highlighted]:bg-white dark:data-[highlighted]:text-gray-950",
                subTrigger:
                    "data-[highlighted]:bg-gray-950 data-[highlighted]:text-white dark:data-[highlighted]:bg-white dark:data-[highlighted]:text-gray-950 data-[state=open]:data-[highlighted]:bg-gray-950 dark:data-[state=open]:data-[highlighted]:bg-white",
            },
        },
    },
});

export const separator = tv({
    base: "block my-1.5 mx-3 h-px bg-[--ui-border-color]",
    variants: {
        fancy: {
            true: "h-0.5 border-b bg-transparent dark:bg-[--ui-fancy-bg] dark:border-[--ui-fancy-border-color]",
        },
        dashed: {
            true: "bg-transparent border-b border-dashed dark:bg-transparent",
        },
    },
});

export const menu = {
    solid,
    soft,
};

export const defaultMenuProps: MenuProps = {
    variant: "soft",
    intent: "gray",
    mixed: false,
    fancy: false,
};

export type SeparatorProps = {
    fancy?: boolean;
    dashed?: boolean;
};

export type MenuProps = {
    variant?: keyof typeof menu;
    intent?: keyof typeof solid.variants.intent;
    mixed?: boolean;
    fancy?: boolean;
};
