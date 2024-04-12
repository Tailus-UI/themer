import { tv } from "tailwind-variants";

export const fancyBorder =
    "border-[0.5px] dark:border-gray-950 !outline !outline-[0.5px] -outline-offset-[1.5px] !outline-white/5 dark:!outline-[--ui-border-color]";

export const accordion = tv({
    slots: {
        root: "min-w-xs w-96",
        item: "relative px-[calc(var(--accordion-padding)+.5rem)] overflow-hidden transition-[transform,outline] duration-300 data-[state=open]:z-10 outline-2 outline-offset-2 outline-primary-600 has-[:focus-visible]:outline has-[:focus-visible]:z-10",
        header: "flex",
        trigger:
            "group outline-none flex w-full items-center justify-between py-[--accordion-padding] text-gray-950 dark:text-white",
        triggerIcon:
            "size-4 -mr-1 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180 text-gray-600 dark:text-gray-400",
        triggerContent: "flex items-center gap-3",
        content:
            "overflow-hidden *:pb-[--accordion-padding] data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown text-gray-700 dark:text-gray-300",
    },
    variants: {
        variant: {
            default: {
                item: "border-b px-0",
            },
            elevated: {
                item: "group/item data-[state=open]:bg-white dark:data-[state=open]:bg-[--accordion-bg] data-[state=open]:rounded-[--accordion-radius] data-[state=open]:accordion-shadow first:before:hidden before:absolute before:inset-x-[calc(var(--accordion-padding)+.5rem)] before:absolute before:inset-x-[calc(var(--accordion-padding)+.5rem)] before:top-0 before:h-px before:bg-[--ui-border-color] data-[state=open]:before:hidden",
            },
            ghost: {
                item: "group/item data-[state=open]:rounded-[--accordion-radius] data-[state=open]:bg-[--accordion-bg] first:before:hidden before:absolute before:inset-x-[calc(var(--accordion-padding)+.5rem)] before:top-0 before:h-px before:bg-[--ui-border-color] data-[state=open]:before:hidden",
            },
            soft: {
                root: "space-y-2",
                item: "rounded-[--accordion-radius] bg-[--accordion-bg]",
            },
            mixed: {
                root: "space-y-2",
                item: `transition-transform rounded-[--accordion-radius] border data-[state=open]:accordion-shadow bg-white dark:bg-[--accordion-bg]`,
            },
            outlined: {
                root: "space-y-2",
                item: "border rounded-[--accordion-radius]",
            },
        },
        fancy: {
            true: "",
        },
    },
    compoundVariants: [
        {
            variant: "default",
            fancy: true,
            class: {
                item: "border-none first:before:hidden before:absolute before:inset-x-0 before:border-b before:h-0.5 before:bg-white dark:before:bg-gray-950",
            },
        },
        {
            variant: ["ghost", "elevated"],
            fancy: true,
            class: {
                item: "before:h-0.5 before:border-b before:bg-white dark:before:bg-gray-950",
            },
        },
        {
            variant: ["outlined", "mixed"],
            fancy: true,
            class: {
                item: `has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-primary-600 ${fancyBorder}`,
            },
        },
    ],
    defaultVariants: {
        variant: "default",
        fancy: true,
    },
});

export type AccordionProps = {
    variant?: keyof typeof accordion.variants.variant;
    fancy?: boolean;
};
