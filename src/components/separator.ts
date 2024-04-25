import { tv } from "tailwind-variants";

export const separator = tv({
    base: "bg-[--ui-border-color]",
    variants: {
        fancy: {
            true: "bg-white dark:bg-[--ui-fancy-bg] dark:border-[--ui-fancy-border-color]",
        },
        orientation: {
            vertical: "border-l w-0.5 h-full",
            horizontal: "border-b h-0.5 w-full",
        },
    },
    defaultVariants: {
        fancy: false,
        orientation: "horizontal",
    },
});

export type SeparatorProps = {
    fancy?: boolean;
    orientation?: keyof typeof separator.variants.orientation;
};
