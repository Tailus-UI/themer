import { tv } from "tailwind-variants";

const status =
    "before:absolute before:z-[1] before:right-px before:size-2.5 before:rounded-full before:border-2 before:border-white dark:before:border-gray-950";
export const image = tv({
    base: "size-full object-full rounded-[--avatar-radius]",
});
export const avatar = tv({
    base: "block relative rounded-[--avatar-radius]",
    variants: {
        size: {
            xxs: "text-xs size-6",
            xs: "text-xs size-7",
            sm: "text-sm size-8",
            md: "text-base size-9",
            lg: "text-base size-10",
            xl: "text-base size-12",
            "2xl": "text-lg size-16",
            "3xl": "text-2xl size-20",
        },
        status: {
            online: "before:bg-success-600 dark:before:bg-success-400",
            offline: "before:bg-gray-600 dark:before:bg-gray-400",
            away: "before:bg-warning-600 dark:before:bg-warning-400",
            busy: "before:bg-danger-600 dark:before:bg-danger-400",
        },
        topStatus: {
            true: `${status} before:top-px`,
        },
        bottomStatus: {
            true: `${status} before:bottom-px`,
        },
    },
    compoundVariants: [
        {
            topStatus: true,
            size: ["xxs", "xs", "sm"],
            class: "before:size-2 before:border-[1px]",
        },
        {
            topStatus: true,
            size: "xxs",
            class: "before:size-1.5",
        },
        {
            topStatus: true,
            size: ["lg"],
            class: "before:top-0.5 before:right-0.5",
        },
        {
            topStatus: true,
            size: "xl",
            class: "before:top-[3px] before:right-[3px]",
        },
        {
            topStatus: true,
            size: ["2xl"],
            class: "before:size-3 before:top-1 before:right-1",
        },
        {
            topStatus: true,
            size: ["3xl"],
            class: "before:size-3.5 before:top-1.5 before:right-1.5",
        },
        {
            bottomStatus: true,
            size: ["xxs", "xs", "sm"],
            class: "before:size-2 before:border-[1px]",
        },
        {
            bottomStatus: true,
            size: "xxs",
            class: "before:size-1.5",
        },
        {
            bottomStatus: true,
            size: ["lg"],
            class: "before:bottom-0.5 before:right-0.5",
        },
        {
            bottomStatus: true,
            size: "xl",
            class: "before:bottom-[3px] before:right-[3px]",
        },
        {
            bottomStatus: true,
            size: ["2xl"],
            class: "before:size-3 before:bottom-1 before:right-1",
        },
        {
            bottomStatus: true,
            size: ["3xl"],
            class: "before:size-3.5 before:bottom-1.5 before:right-1.5",
        },
    ],
});

export const solid = tv({
    base: "absolute inset-0 m-auto flex items-center justify-center rounded-[--avatar-radius] font-medium text-white",
    variants: {
        intent: {
            primary: "bg-primary-600",
            secondary: "bg-secondary-600",
            accent: "bg-accent-600",
            danger: "bg-danger-600",
            success: "bg-success-600",
            warning: "bg-warning-400 text-warning-950",
            info: "bg-info-600",
            gray: "bg-gray-600",
        },
    },
});

export const soft = tv({
    extend: solid,
    variants: {
        intent: {
            primary: "bg-primary-200 text-primary-800 dark:bg-primary-500/15 dark:text-primary-300",
            secondary:
                "bg-secondary-200 text-secondary-800 dark:bg-secondary-500/15 dark:text-secondary-300",
            accent: "bg-accent-200 text-accent-800 dark:bg-accent-500/15 dark:text-accent-300",
            danger: "bg-danger-200 text-danger-800 dark:bg-danger-500/15 dark:text-danger-300",
            success: "bg-success-200 text-success-800 dark:bg-success-500/15 dark:text-success-300",
            warning: "bg-warning-200 text-warning-800 dark:bg-warning-500/15 dark:text-warning-300",
            info: "bg-info-200 text-info-800 dark:bg-info-500/15 dark:text-info-300",
            gray: "bg-gray-200 text-gray-800 dark:bg-gray-500/15 dark:text-gray-300",
        },
    },
});

export const fallback = {
    solid,
    soft,
};

export type AvatarRootProps = {
    size?: keyof typeof avatar.variants.size;
    status?: keyof typeof avatar.variants.status;
    topStatus?: boolean;
    bottomStatus?: boolean;
};
export type AvatarFallbackProps = {
    variant?: keyof typeof fallback;
    intent?: keyof typeof solid.variants.intent;
};
