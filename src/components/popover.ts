import { tv } from "tailwind-variants";

export const popover = tv({
    slots: {
        content:
            "rounded-[--feedback-radius] p-[--feedback-padding] feedback-bg feedback-shadow will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade",
        arrow: "fill-[--ui-bg]",
        close: "absolute top-1 right-1",
    },
    variants: {
        mixed: {
            true: {
                content: "border",
            },
        },
        fancy: {
            true: {
                content: "fancy-border",
            },
        },
    },
});

export type PopoverProps = {
    mixed?: boolean;
    fancy?: boolean;
};
