import { tv } from "tailwind-variants";

export const tooltip = tv({
    slots: {
        root: "min-w-[12rem] p-[--feedback-padding] feedback-bg feedback-shadow rounded-[--feedback-radius]",
        title: "block text-sm font-medium text-[--title-text-color]",
        separator: "my-4 h-px bg-[--ui-border-color]",
        content: "space-y-2",
        entry: "flex items-center justify-between gap-8",
        entryValue: "text-sm text-[--caption-text-color]",
        entryNameContainer: "flex gap-3 items-center",
        entryName: "text-sm text-[--body-text-color]",
        entryIndicator: "size-1.5 rounded-full ring-[1.5px] ring-[--entry-indicator-color]",
    },
    variants: {
        mixed: {
            true: {
                root: "border",
            },
        },
        fancy: {
            true: {
                root: "fancy-border",
                separator:
                    "h-0.5 border-b bg-transparent dark:bg-[--ui-fancy-bg] dark:border-[--ui-fancy-border-color]",
            },
        },
    },
});

export type TooltipProps = {
    mixed?: boolean;
    fancy?: boolean;
};
