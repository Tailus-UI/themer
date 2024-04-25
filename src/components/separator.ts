import { tv } from "tailwind-variants";

export const separator = tv({
    base: "bg-[--ui-border-color]",
    variants: {
        fancy: {
            true: "bg-white dark:bg-[--ui-fancy-bg] dark:border-[--ui-fancy-border-color]",
        },
        orientation: {
            vertical: "w-px h-full",
            horizontal: "h-px w-full",
        },
    },
    compoundVariants: [
        {
            fancy: true,
            orientation: "vertical",
            class: "border-r w-0.5",
        },
        {
            fancy: true,
            orientation: "horizontal",
            class: "border-b h-0.5",
        },
    ],
    defaultVariants: {
        fancy: false,
        orientation: "horizontal",
    },
});

export type SeparatorProps = {
    fancy?: boolean;
    orientation?: keyof typeof separator.variants.orientation;
};
