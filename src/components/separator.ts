import { tv } from "tailwind-variants";

export const separator = tv({
    variants: {
        variant: {
            fancy: "data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:h-full data-[orientation=vertical]:border-l data-[orientation=horizontal]:w-full data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:border-b data-[orientation=horizontal]:bg-transparent bg-[--ui-border-color] data-[orientation=vertical]:border-white dark:data-[orientation=horizontal]:bg-[--ui-fancy-bg] dark:data-[orientation=horizontal]:border-[--ui-dark-border-color] dark:data-[orientation=vertical]:bg-[--ui-dark-border-color] dark:data-[orientation=vertical]:border-[--ui-fancy-bg]",
            simple: "data-[orientation=vertical]:w-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full bg-[--ui-border-color]",
        },
    },
});

export type SeparatorProps = {
    variant?: keyof typeof separator.variants.variant;
};
