import { tv } from "tailwind-variants";

const focusVisible = "outline-2 outline-primary-600 outline-offset-2 focus-visible:outline";

export const calendar = tv({
    slots: {
        months: "",
        month: "space-y-6",
        caption: "mb-4 flex justify-center relative items-center",
        caption_label: "text-sm font-medium text-[--title-text-color]",
        nav: "absolute inset-x-0 gap-6 justify-between flex items-center",
        nav_button: `size-8 rounded-[--calendar-radius] flex justify-center items-center text-gray-800 hover:bg-gray-100 active:bg-gray-200/75 dark:text-gray-300 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15 disabled:opacity-50 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent ${focusVisible}`,
        nav_button_previous: "absolute left-0",
        nav_button_next: "absolute right-0",
        table: "w-full border-collapse space-y-1",
        head_row: "flex gap-1",
        head_cell: "text-gray-700 dark:text-gray-300 rounded-md w-9 font-normal text-sm",
        row: "flex w-full mt-1 gap-1 first:mt-4",
        cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
        day: `size-9 rounded-[--calendar-radius] text-gray-800 hover:bg-gray-100 active:bg-gray-200/75 dark:text-gray-300 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15 flex items-center justify-center font-normal aria-selected:opacity-100 ${focusVisible}`,
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "!text-white aria-selected:text-white aria-selected:border-transparent",
        day_today: "size-9 !font-medium rounded-[--calendar-radius] border",
        day_outside: "day-outside opacity-50 aria-selected:bg-gray-500/50 aria-selected:opacity-30",
        day_disabled: "opacity-50",
        day_range_middle: "aria-selected:rounded-none",
        day_hidden: "invisible",
    },
    variants: {
        range: {
            true: {
                months: "flex flex-col sm:flex-row gap-8",
                month: "relative last:before:hidden before:hidden sm:before:block before:absolute before:-inset-y-[--feedback-padding] before:-right-4 before:w-px before:border-r before:bg-white dark:before:bg-[--ui-fancy-bg] before:mx-auto",
                table: "space-y-0",
                head_cell: "gap-0",
                head_row: "gap-0",
                row: "mt-0 gap-0",
                cell: "[&>.day-range-end]:rounded-l-none [&>.day-range-start]:rounded-r-none [&>.day-range-start.day-range-end]:rounded-[--calendar-radius]",
            },
        },
        intent: {
            primary: {
                day_selected:
                    "bg-primary-600 text-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600",
                day_today:
                    "border-primary-300 text-primary-600 dark:border-primary-500 dark:text-primary-300",
                day_range_middle:
                    "aria-selected:!text-primary-600 aria-selected:bg-primary-50 dark:aria-selected:!text-primary-400 dark:aria-selected:bg-primary-500/5 dark:hover:bg-primary-500/15 dark:active:bg-primary-500/10",
            },
            secondary: {
                day_selected: "bg-secondary-600 hover:bg-secondary-600 dark:hover:bg-secondary-600",
                day_today:
                    "border-secondary-300 text-secondary-600 dark:border-secondary-500 dark:text-secondary-300",
                day_range_middle:
                    "aria-selected:!text-secondary-600 aria-selected:bg-secondary-50 dark:aria-selected:!text-secondary-400 dark:aria-selected:bg-secondary-500/5 dark:hover:bg-secondary-500/15 dark:active:bg-secondary-500/10",
            },
            accent: {
                day_selected: "bg-accent-600 hover:bg-accent-600 dark:hover:bg-accent-600",
                day_today:
                    "border-accent-300 text-accent-600 dark:border-accent-500 dark:text-accent-300",
                day_range_middle:
                    "aria-selected:!text-accent-600 aria-selected:bg-accent-50 dark:aria-selected:!text-accent-400 dark:aria-selected:bg-accent-500/5 dark:hover:bg-accent-500/15 dark:active:bg-accent-500/10",
            },
            neutral: {
                day_selected:
                    "bg-gray-950 hover:bg-gray-950 dark:aria-selected:text-gray-950 dark:!text-gray-950 dark:bg-white dark:hover:bg-white",
                day_today: "border-gray-300 text-gray-950 dark:border-gray-500/30 dark:text-white",
                day_range_middle:
                    "aria-selected:!text-gray-600 aria-selected:bg-gray-100 dark:aria-selected:!text-gray-300 dark:aria-selected:bg-gray-500/10",
            },
        },
        handDrawn: {
            true: {
                day_selected:
                    "relative text-gray-950 !font-medium bg-transparent rounded-full dark:bg-transparent dark:text-white hover:bg-transparent dark:hover:bg-transparent before:absolute before:inset-0 before:[-webkit-mask-image:url('/circle.svg')] before:[mask-image:url('/circle.svg')]",
            },
        },
        fancy: {
            true: {
                month: "before:w-0.5",
            },
        },
    },
    compoundVariants: [
        {
            handDrawn: true,
            intent: "primary",
            class: {
                day_selected: "!text-primary-950 dark:!text-white before:bg-primary-600",
            },
        },
        {
            handDrawn: true,
            intent: "secondary",
            class: {
                day_selected: "!text-secondary-950 dark:!text-white before:bg-secondary-600",
            },
        },
        {
            handDrawn: true,
            intent: "accent",
            class: {
                day_selected: "!text-accent-950 dark:!text-white before:bg-accent-600",
            },
        },
        {
            handDrawn: true,
            intent: "neutral",
            class: {
                day_selected: "before:bg-gray-950 dark:before:bg-white dark:!text-white",
            },
        },
    ],
    defaultVariants: {
        intent: "primary",
    },
});

export type CalendarProps = {
    intent?: keyof typeof calendar.variants.intent;
    range?: boolean;
    handDrawn?: boolean;
    fancy?: boolean;
};
