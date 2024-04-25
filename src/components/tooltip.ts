import { tv } from "tailwind-variants";

export const tooltip = tv({
    slots: {
        content:
            "rounded-[--btn-radius] shadow text-[--title-text-color] shadow-gray-500/5 text-sm py-1.5 px-3 border feedback-bg data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade will-change-[transform,opacity]",
        arrow: "fill-[--ui-bg]",
    },
    variants: {
        inverted: {
            true: {
                content:
                    "border-gray-950 bg-gray-900 text-white dark:bg-white dark:border-gray-200 dark:text-gray-900",
                arrow: "fill-gray-900 dark:fill-white",
            },
        },
        fancy: {
            true: {
                content:
                    "fancy-border bg-white/75 dark:shadow-lg dark:shadow-gray-950/15 dark:bg-gray-900/75 backdrop-blur-xl",
                arrow: "fill-white dark:fill-gray-900",
            },
        },
    },
    defaultVariants: {
        fancy: true,
    },
});

export type TooltipProps = {
    inverted?: boolean;
    fancy?: boolean;
};
