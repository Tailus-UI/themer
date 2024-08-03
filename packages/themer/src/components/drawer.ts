import { tv } from "tailwind-variants";
export const drawer = tv({
    slots: {
        content: "p-[--feedback-padding] feedback-bg feedback-shadow fixed z-[calc(var(--overlay-backdrop-z)+10)]",
        overlay:
            "fixed inset-0 bg-[--overlay-bg] backdrop-blur-[--overlay-backdrop-blur] z-[--overlay-backdrop-z] data-[state=open]:animate-overlayShow ",
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
                    "before:inset-x-0 before:h-1.5 before:w-14 before:mx-auto before:absolute before:bg-[--ui-border-color] before:rounded-full",
            },
        },
    },
    compoundVariants: [
        {
            direction: "bottom",
            withControler: true,
            class: {
                content:
                    "pt-[calc(var(--feedback-padding)*2)] before:top-[calc(var(--feedback-padding)/2)]",
            },
        },
        {
            direction: "top",
            withControler: true,
            class: {
                content:
                    "pb-[calc(var(--feedback-padding)*2)] before:bottom-[calc(var(--feedback-padding)/2)]",
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
