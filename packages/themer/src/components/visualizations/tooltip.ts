import { tv } from "tailwind-variants";

export const tooltip = tv({
    slots: {
        root: 'min-w-[12rem] p-[--feedback-padding] feedback-bg feedback-shadow rounded-[--feedback-radius]',
        title: 'block text-sm font-medium text-[--title-text-color]',
        separator: 'my-4 h-px bg-[--ui-border-color]',
        content: 'space-y-2',
        entry: 'flex items-center justify-between gap-8',
        entryValue: 'text-sm text-[--body-text-color]',
        entryNameContainer: 'flex gap-3 items-center',
        entryName: 'text-sm text-[--caption-text-color]',
        entryIndicator: ''
    },
    variants: {
        mixed: {
            true: {
                root: 'border'
            }
        },
        fancy: {
            true: {
                root: 'fancy-border',
                separator: 'h-0.5 border-b bg-transparent dark:bg-[--ui-fancy-bg] dark:border-[--ui-fancy-border-color]'
            }
        },
        indicator: {
            ring: {
                entryIndicator: 'size-1.5 rounded-full ring-[1.5px] ring-[--entry-indicator-color]'
            },
            circle: {
                entryIndicator: 'size-2.5 rounded-full border-2 border-white bg-[--entry-indicator-color] shadow dark:border-transparent dark:shadow-gray-950/15'
            },
            square: {
                entryIndicator: 'size-2.5 rounded-sm bg-[--entry-indicator-color]'
            },
            line: {
                entryIndicator: 'h-3 w-1 bg-[--entry-indicator-color]'
            }
        },
        singleEntry: {
            true: {
                root: 'p-2'
            }
        }
    },
    defaultVariants: {
        indicator: 'circle',
        singleEntry: false
    }
});

export type TooltipProps = {
    mixed?: boolean;
    fancy?: boolean;
    singleEntry?: boolean;
    indicator? : keyof typeof tooltip.variants.indicator
}