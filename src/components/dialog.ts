import { tv } from "tailwind-variants";

export const dialog = tv({
    slots: {
        content:
            "rounded-[--feedback-radius] p-[--feedback-padding] feedback-bg feedback-shadow data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] translate-x-[-50%] translate-y-[-50%]",
        overlay:
            "fixed inset-0 bg-[--overlay-bg] backdrop-blur-[--overlay-backdrop-blur] data-[state=open]:animate-overlayShow",
        actions: "flex justify-end gap-3 mt-[--feedback-padding]",
        close: "absolute top-1 right-1",
    },
    variants: {
        mixed: {
            true: {
                content: "border border-[--feedback-border-color]",
            },
        },
        fancy: {
            true: {
                content: "fancy-border",
            },
        },
    },
});

export type DialogProps = {
    mixed?: boolean;
    fancy?: boolean;
};
