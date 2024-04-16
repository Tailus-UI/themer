import { tv } from "tailwind-variants";

export const banner = tv({
    slots: {
        root: "p-[--feedback-padding] rounded-[--feedback-radius] border",
        icon: "-mt-px size-6 text-[--body-text-color]",
        content: "grid [grid-template-columns:auto_1fr] gap-3",
    },
    variants: {
        intent: {
            warning: {
                root: "[--title-text-color:theme(colors.warning.800)] dark:[--title-text-color:theme(colors.warning.300)] [--body-text-color:theme(colors.warning.700)] dark:[--body-text-color:theme(colors.warning.500)] border-warning-200 bg-warning-50 dark:bg-warning-500/10 dark:border-warning-500/15",
            },
            danger: {
                root: "[--title-text-color:theme(colors.danger.800)] dark:[--title-text-color:theme(colors.danger.300)] [--body-text-color:theme(colors.danger.600)] dark:[--body-text-color:theme(colors.danger.400)] border-danger-200 bg-danger-50 dark:bg-danger-500/10 dark:border-danger-500/15",
            },
            success: {
                root: "[--title-text-color:theme(colors.success.800)] dark:[--title-text-color:theme(colors.success.300)] [--body-text-color:theme(colors.success.600)] dark:[--body-text-color:theme(colors.success.400)] border-success-200 bg-success-50 dark:bg-success-500/10 dark:border-success-500/15",
            },
            info: {
                root: "[--title-text-color:theme(colors.info.800)] dark:[--title-text-color:theme(colors.info.300)] [--body-text-color:theme(colors.info.600)] dark:[--body-text-color:theme(colors.info.400)] border-info-200 bg-info-50 dark:bg-info-500/10 dark:border-info-500/15",
            },
            gray: {
                root: "[--title-text-color:theme(colors.gray.800)] dark:[--title-text-color:theme(colors.white)] [--body-text-color:theme(colors.gray.600)] dark:[--body-text-color:theme(colors.gray.400)] border-gray-200 bg-gray-100 dark:bg-gray-500/10 dark:border-gray-500/15",
            },
        },
    },
    defaultVariants: {
        intent: "info",
    },
});

export type BannerProps = {
    intent?: keyof typeof banner.variants.intent;
};
