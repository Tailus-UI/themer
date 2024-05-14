import { tv } from "tailwind-variants";

const indicatorBase =
    "bg-[-ui-bg] shadow shadow-gray-950/5 inset-y-[--tabs-list-padding] rounded-[calc(var(--tabs-radius)-var(--tabs-list-padding))] dark:bg-[--ui-bg]";

export const tabs = tv({
    slots: {
        list: "relative flex items-center p-[--tabs-list-padding] rounded-[--tabs-radius]",
        trigger:
            "relative text-[--body-text-color] h-full flex-1 flex items-center justify-center leading-none select-none rounded-[calc(var(--tabs-radius)-0.25rem)] cursor-pointer data-[disabled]:opacity-50",
        indicator: "absolute block transition-[width,left] duration-200 ease-in-out",
    },
    variants: {
        listVariant: {
            soft: {
                list: "bg-[--ui-soft-bg]",
            },
            outlined: {
                list: "bg-[--ui-bg] border dark:bg-[--ui-soft-bg]",
            },
            mixed: {
                list: "border bg-[--ui-soft-bg]",
            },
            plain: {
                list: "[--tabs-list-padding:0]",
            },
            bottomOutlined: {
                list: "border-b rounded-none px-0 pt-0 pb-[--tabs-list-padding]",
            },
        },
        indicatorVariant: {
            bottom: {
                indicator: "bottom-0 h-0.5 rounded-[--tabs-radius]",
            },
            elevated: {
                indicator: indicatorBase,
            },
            mixed: {
                indicator: `border ${indicatorBase}`,
            },
            fancy: {
                indicator: `fancy-border ${indicatorBase}`,
            },
            outlined: {
                indicator: `border ${indicatorBase} shadow-none`,
            },
        },
        triggerVariant: {
            softToSoft: {
                trigger: "bg-[--ui-soft-bg]",
            },
            outlinedToSolid: {
                trigger: "border data-[state=active]:border-transparent",
            },
            softToSolid: {
                trigger: "",
            },
            plain: {
                trigger:
                    "hover:bg-[--ui-soft-bg] data-[state=active]:hover:bg-transparent data-[state=active]:text-[--title-text-color] dark:data-[state=active]:hover:bg-transparent",
            },
        },
        size: {
            sm: {
                list: "h-8 [--tabs-list-padding:theme(spacing[px])]",
                trigger: "text-sm px-2.5",
            },
            md: {
                list: "h-9 [--tabs-list-padding:theme(spacing[0.5])]",
                trigger: "text-base px-3",
            },
            lg: {
                list: "h-10 [--tabs-list-padding:theme(spacing[0.5])]",
                trigger: "text-base px-4",
            },
            xl: {
                list: "h-12 [--tabs-list-padding:theme(spacing[0.5])]",
                trigger: "text-base px-5",
            },
            "2xl": {
                list: "h-14 [--tabs-list-padding:theme(spacing[0.5])]",
                trigger: "text-lg px-6",
            },
        },
        intent: {
            primary: "",
            secondary: "",
            accent: "",
            gray: "",
            neutral: "",
        },
    },
    compoundVariants: [
        {
            indicatorVariant: "bottom",
            intent: "primary",
            class: {
                indicator: "bg-primary-600",
            },
        },
        {
            indicatorVariant: "bottom",
            intent: "secondary",
            class: {
                indicator: "bg-secondary-600",
            },
        },
        {
            indicatorVariant: "bottom",
            intent: "accent",
            class: {
                indicator: "bg-accent-600",
            },
        },
        {
            indicatorVariant: "bottom",
            intent: "gray",
            class: {
                indicator: "bg-gray-600",
            },
        },
        {
            indicatorVariant: "bottom",
            intent: "neutral",
            class: {
                indicator: "bg-gray-950 dark:bg-white",
            },
        },
        {
            triggerVariant: "softToSoft",
            intent: "primary",
            class: {
                trigger:
                    "data-[state=active]:bg-primary-100 data-[state=active]:text-primary-800 dark:data-[state=active]:bg-primary-500/15 dark:data-[state=active]:text-primary-300",
            },
        },
        {
            triggerVariant: "softToSoft",
            intent: "secondary",
            class: {
                trigger:
                    "data-[state=active]:bg-secondary-100 data-[state=active]:text-secondary-800 dark:data-[state=active]:bg-secondary-500/15 dark:data-[state=active]:text-secondary-300",
            },
        },
        {
            triggerVariant: "softToSoft",
            intent: "accent",
            class: {
                trigger:
                    "data-[state=active]:bg-accent-100 data-[state=active]:text-accent-800 dark:data-[state=active]:bg-accent-500/15 dark:data-[state=active]:text-accent-300",
            },
        },
        {
            triggerVariant: "softToSoft",
            intent: "gray",
            class: {
                trigger:
                    "data-[state=active]:bg-gray-100 data-[state=active]:text-gray-800 dark:data-[state=active]:bg-gray-950/15 dark:data-[state=active]:text-gray-300",
            },
        },
        {
            triggerVariant: "softToSoft",
            intent: "neutral",
            class: {
                trigger:
                    "data-[state=active]:bg-gray-100 data-[state=active]:text-gray-800 dark:data-[state=active]:bg-gray-950/15 dark:data-[state=active]:text-gray-300",
            },
        },
        {
            triggerVariant: "outlinedToSolid",
            intent: "primary",
            class: {
                trigger:
                    "hover:text-primary-600 data-[state=active]:bg-primary-600 data-[state=active]:text-white",
            },
        },
        {
            triggerVariant: "outlinedToSolid",
            intent: "secondary",
            class: {
                trigger:
                    "hover:text-secondary-600 data-[state=active]:bg-secondary-600 data-[state=active]:text-white",
            },
        },
        {
            triggerVariant: "outlinedToSolid",
            intent: "accent",
            class: {
                trigger:
                    "hover:text-accent-600 data-[state=active]:bg-accent-600 data-[state=active]:text-white",
            },
        },
        {
            triggerVariant: "outlinedToSolid",
            intent: "gray",
            class: {
                trigger:
                    "hover:text-gray-600 data-[state=active]:bg-gray-600 data-[state=active]:text-white",
            },
        },
        {
            triggerVariant: "outlinedToSolid",
            intent: "neutral",
            class: {
                trigger:
                    "hover:text-gray-950 dark:hover:text-white data-[state=active]:bg-gray-950 dark:data-[state=active]:bg-white data-[state=active]:text-white dark:data-[state=active]:text-gray-950",
            },
        },
        {
            triggerVariant: "softToSolid",
            intent: "primary",
            class: {
                trigger:
                    "text-primary-800 dark:text-primary-300 bg-primary-100 dark:bg-primary-500/15 data-[state=active]:bg-primary-600 data-[state=active]:text-white",
            },
        },
        {
            triggerVariant: "softToSolid",
            intent: "secondary",
            class: {
                trigger:
                    "text-secondary-800 dark:text-secondary-300 bg-secondary-100 dark:bg-secondary-500/15 data-[state=active]:bg-secondary-600 data-[state=active]:text-white",
            },
        },
        {
            triggerVariant: "softToSolid",
            intent: "accent",
            class: {
                trigger:
                    "text-accent-800 dark:text-accent-300 bg-accent-100 dark:bg-accent-500/15 data-[state=active]:bg-accent-600 data-[state=active]:text-white",
            },
        },
        {
            triggerVariant: "softToSolid",
            intent: "gray",
            class: {
                trigger:
                    "text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-500/15 data-[state=active]:bg-gray-600 data-[state=active]:text-white",
            },
        },
        {
            triggerVariant: "softToSolid",
            intent: "neutral",
            class: {
                trigger:
                    "text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-500/15 data-[state=active]:bg-gray-950 data-[state=active]:text-white dark:data-[state=active]:bg-white data-[state=active]:text-gray-950",
            },
        },
        {
            listVariant: "plain",
            triggerVariant: ["softToSoft", "softToSolid", "outlinedToSolid"],
            size: "sm",
            class: {
                list: "gap-1",
            },
        },
        {
            listVariant: "plain",
            triggerVariant: ["softToSoft", "softToSolid", "outlinedToSolid"],
            size: "md",
            class: {
                list: "gap-2",
            },
        },
        {
            listVariant: "plain",
            triggerVariant: ["softToSoft", "softToSolid", "outlinedToSolid"],
            size: "lg",
            class: {
                list: "gap-3",
            },
        },
        {
            listVariant: "plain",
            triggerVariant: ["softToSoft", "softToSolid", "outlinedToSolid"],
            size: "xl",
            class: {
                list: "gap-3.5",
            },
        },
        {
            listVariant: "plain",
            size: "2xl",
            class: {
                list: "gap-4",
            },
        },
    ],
});

export type ListProps = {
    variant?: keyof typeof tabs.variants.listVariant;
    triggerVariant?: keyof typeof tabs.variants.triggerVariant;
    size?: keyof typeof tabs.variants.size;
    intent?: keyof typeof tabs.variants.intent;
};

export type IndicatorProps = {
    variant?: keyof typeof tabs.variants.indicatorVariant;
    intent?: keyof typeof tabs.variants.intent;
};
