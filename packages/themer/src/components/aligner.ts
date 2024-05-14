import { tv } from "tailwind-variants";

export const aligner = tv({
    base: "grid items-center gap-x-3 gap-y-1 [grid-template-columns:auto_1fr]",
    variants: {
        fromRight: {
            true: "[grid-template-columns:1fr_auto]",
        },
    },
});

export type AlignerProps = {
    fromRight?: boolean;
};
