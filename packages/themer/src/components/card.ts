import { tv } from "tailwind-variants";

export const card = tv({
    base: "block p-[--card-padding] rounded-[--card-radius] bg-[--ui-bg]",
    variants: {
        variant: {
            outlined: "border",
            elevated: "card-shadow",
            soft: "bg-[--ui-soft-bg]",
            mixed: "border card-shadow",
        },
        fancy: {
            true: "fancy-border",
        },
    },
});

export const gradientCard = tv({
    slots: {
        outer: "bg-gradient-to-b from-[--ui-border-color] to-transparent p-px rounded-[--card-radius]",
        inner: "p-[--card-padding] rounded-[calc(var(--card-radius)-1px)]",
    },
    variants: {
        variant: {
            soft: {
                inner: "bg-[--ui-soft-bg]",
            },
            elevated: {
                inner: "bg-[--ui-bg] card-shadow",
            },
        },
    },
});

export type CardProps = {
    variant?: keyof typeof card.variants.variant;
    fancy?: boolean;
};
export type GradientCardProps = {
    variant?: keyof typeof gradientCard.variants.variant;
};
