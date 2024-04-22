import { tv } from "tailwind-variants";

export const toast = tv({
    slots: {
        root: "relative feedback-shadow rounded-[--feedback-radius] p-[--toast-padding] feedback-bg  data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut",
        title: "font-medium text-sm text-[--title-text-color]",
        description: "text-sm text-[--body-text-color]",
        viewport:
            "[--viewport-padding:_24px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-2.5 w-[26rem] max-w-[100vw] m-0 list-none z-[2147483647] outline-none",
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
            },
        },
        withAction: {
            true: {
                root: "grid items-center gap-x-3 gap-y-[3px] [grid-template-columns:1fr_auto]",
            },
        },
    },
});

export type ToastProps = {
    fancy?: boolean;
    mixed?: boolean;
    withAction?: boolean;
};
