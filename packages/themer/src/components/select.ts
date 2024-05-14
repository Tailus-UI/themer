import { tv } from "tailwind-variants";

export const trigger = tv({
    slots: {
        parent: "relative w-full px-[--input-px] bg-transparent flex gap-3 items-center transition-[outline] placeholder-[--placeholder-text-color] text-[--title-text-color] rounded-[--input-radius] data-[disabled]:opacity-50",
        icon: "text-[--body-text-color] -mr-0.5",
    },
    variants: {
        variant: {
            outlined: {
                parent: "outline-2 focus:outline-primary-600 -outline-offset-1 focus:outline border data-[invalid]:border-danger-600 focus:data-[invalid]:outline-danger-600 dark:data-[invalid]:border-danger-500 dark:focus:data-[invalid]:outline-danger-500 data-[valid]:border-success-600 focus:data-[valid]:outline-success-600 dark:data-[valid]:border-success-500 dark:focus:data-[valid]:outline-success-500",
            },
            soft: {
                parent: "outline-none bg-[--input-bg] dark:bg-[--ui-soft-bg] focus:brightness-95 dark:focus:brightness-105 data-[invalid]:[--input-bg:theme(colors.danger.100)] dark:data-[invalid]:[--input-bg:theme(colors.danger.800/0.25)] data-[valid]:[--input-bg:theme(colors.success.100)] dark:data-[valid]:[--input-bg:theme(colors.success.800/0.25)]",
            },
            mixed: {
                parent: "shadow-sm shadow-gray-950/5 outline-2 focus:outline-primary-600 focus:outline -outline-offset-1 border dark:bg-[--input-bg] dark:shadow-gray-950/35 data-[invalid]:border-danger-600 focus:data-[invalid]:outline-danger-600 dark:data-[invalid]:border-danger-500 dark:focus:data-[invalid]:outline-danger-500 data-[valid]:border-success-600 focus:data-[valid]:outline-success-600 dark:data-[valid]:border-success-500 dark:focus:data-[valid]:outline-success-500",
            },
            plain: {
                parent: "outline-none hover:bg-[--input-bg] dark:hover:bg-[--ui-soft-bg] bg-transparent invalid:text-danger-600 dark:invalid:text-danger-400 data-[state=open]:bg-[--input-bg]",
            },
            bottomOutlined: {
                parent: "rounded-none transition-[border] px-0 focus:outline-none border-b focus:border-b-2 focus:border-primary-600 data-[invalid]:border-danger-400 dark:data-[invalid]:border-danger-600 data-[valid]:border-success-400 dark:data-[valid]:border-success-600",
            },
        },
        size: {
            sm: {
                parent: "[--input-px:theme(spacing[2.5])] text-sm h-8",
                icon: "size-2.5",
            },
            md: {
                parent: "text-sm h-9 [--input-px:theme(spacing[3])]",
                icon: "size-3.5",
            },
            lg: {
                parent: "text-base h-10 [--input-px:theme(spacing[4])]",
                icon: "4",
            },
            xl: {
                parent: "text-base h-12 [--input-px:theme(spacing[5])]",
                icon: "5",
            },
        },
    },
});

export const solid = tv({
    slots: {
        item: "relative flex select-none items-center text-sm text-gray-700 dark:text-gray-300 rounded-[calc(var(--menu-radius)-0.25rem)] data-[highlighted]:text-white gap-2 px-6 h-8 leading-none outline-none data-[disabled]:text-gray-600 dark:data-[disabled]:text-gray-400 data-[disabled]:opacity-50",
        itemIndicator: "size-4 absolute left-1.5 inline-flex items-center justify-center",
        separator: "block my-3 mx-6 h-px bg-[--ui-border-color]",
        button: "py-2 feedback-bg flex justify-center",
        label: "block my-1.5 ml-6",
        content:
            "overflow-hidden rounded-[--menu-radius] menu-shadow p-1 feedback-bg data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade will-change-[opacity,transform]",
    },
    variants: {
        intent: {
            primary: {
                item: "data-[highlighted]:bg-primary-600",
            },
            secondary: {
                item: "data-[highlighted]:bg-secondary-600",
            },
            accent: {
                item: "data-[highlighted]:bg-accent-600",
            },
            gray: {
                item: "data-[highlighted]:bg-gray-600",
            },
            neutral: {
                item: "data-[highlighted]:bg-gray-950 dark:data-[highlighted]:bg-white dark:data-[highlighted]:text-gray-950",
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
                separator:
                    "h-0.5 border-b bg-transparent dark:bg-[--ui-fancy-bg] dark:border-[--ui-fancy-border-color]",
            },
        },
        dashed: {
            true: {
                separator: "border-b border-dashed bg-transparent dark:bg-transparent",
            },
        },
    },
    defaultVariants: {
        intent: "primary",
        mixed: true,
    },
});

export const soft = tv({
    extend: solid,
    variants: {
        intent: {
            primary: {
                item: "data-[highlighted]:bg-primary-100 data-[highlighted]:text-primary-800 dark:data-[highlighted]:bg-primary-500/10 dark:data-[highlighted]:text-primary-300",
            },
            secondary: {
                item: "data-[highlighted]:bg-secondary-100 data-[highlighted]:text-secondary-800 dark:data-[highlighted]:bg-secondary-500/10 dark:data-[highlighted]:text-secondary-300",
            },
            accent: {
                item: "data-[highlighted]:bg-accent-100 data-[highlighted]:text-accent-800 dark:data-[highlighted]:bg-accent-500/10 dark:data-[highlighted]:text-accent-300",
            },
            gray: {
                item: "data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-800 dark:data-[highlighted]:bg-gray-500/10 dark:data-[highlighted]:text-gray-300",
            },
            neutral: {
                item: "data-[highlighted]:bg-gray-950 data-[highlighted]:text-white dark:data-[highlighted]:bg-white dark:data-[highlighted]:text-gray-950",
            },
        },
    },
});

export const select = {
    solid,
    soft,
};

export type TriggerProps = {
    variant?: keyof typeof trigger.variants.variant;
    size?: keyof typeof trigger.variants.size;
};

export type SelectProps = {
    variant?: keyof typeof select;
    intent?: keyof typeof solid.variants.intent;
    fancy?: boolean;
    mixed?: boolean;
};

export type SeparatorProps = {
    fancy?: boolean;
    dashed?: boolean;
};
