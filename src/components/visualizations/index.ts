import { tv } from "tailwind-variants";

export const cartesianGrid = tv({
    base: "text-[--ui-border-color]",
});

export const axis = tv({
    base: "text-[--caption-text-color]",
});

export { tooltip, type TooltipProps } from "./tooltip";
