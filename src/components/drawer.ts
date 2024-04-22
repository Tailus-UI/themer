import { tv } from "tailwind-variants";
export const drawer = tv({
    slots: {
        content: "p-[--feedback-padding] feedback-bg feedback-shadow fixed",
        overlay:
            "fixed inset-0 bg-[--overlay-bg] backdrop-blur-[--overlay-backdrop-blur] data-[state=open]:animate-overlayShow",
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
        direction: {
            bottom: {
                content: "bottom-0 inset-x-0 rounded-t-[--feedback-radius]",
            },
            top: {
                content: "top-0 inset-x-0 rounded-b-[--feedback-radius]",
            },
            left: {
                content: "left-0 inset-y-0",
            },
            right: {
                content: "right-0 inset-y-0",
            },
        },
        withControler: {
            true: {
                content:
                    "pt-[calc(var(--feedback-padding)*2)] before:inset-x-0 before:h-1.5 before:w-14 before:mx-auto before:absolute before:top-[calc(var(--feedback-padding)/2)] before:bg-[--ui-border-color] before:rounded-full",
            },
        },
    },
    compoundVariants: [
        {
            direction: "bottom",
            withControler: true,
            class: {
                content: "",
            },
        },
    ],
    defaultVariants: {
        direction: "bottom",
        withControler: true,
    },
});

export type DrawerProps = {
    mixed?: boolean;
    fancy?: boolean;
    direction?: typeof drawer.defaultVariants.direction;
    withControler?: boolean;
};
