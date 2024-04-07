import { tv } from "tailwind-variants";

export const alertDialog = tv({
    slots: {
        content:
            "rounded-[--feedback-radius] p-[--feedback-padding] feedback-bg feedback-shadow border border-[--feedback-border-color] focus:outline-none data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] translate-x-[-50%] translate-y-[-50%]",
        overlay:
            "fixed inset-0 bg-[--overlay-bg] backdrop-blur-[--overlay-backdrop-blur] data-[state=open]:animate-overlayShow",
        actions: "flex justify-end gap-3 mt-[--feedback-padding]",
    },
});
