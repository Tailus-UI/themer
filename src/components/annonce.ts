import { tv } from "tailwind-variants";

export const annonceRoot = tv({
    base: "block text-[--title-text-color] group w-fit flex gap-3 items-center rounded-[--annonce-radius]",
    variants: {
        size: {
            xs: "py-0.5 pl-0.5 pr-3 [&>span]:rounded-[calc(var(--annonce-radius)-2px)]",
            sm: "py-1 pl-1 pr-4 [&>span]:rounded-[calc(var(--annonce-radius)-4px)]",
            md: "py-1.5 pl-1.5 pr-5 [&>span]:rounded-[calc(var(--annonce-radius)-6px)]",
            lg: "py-2 pl-2 pr-6 [&>span]:rounded-[calc(var(--annonce-radius)-8px)]",
        },
        variant: {
            plain: "",
            outlined: "border",
            soft: "bg-[--ui-soft-bg]",
            mixed: "border bg-white shadow-sm shadow-gray-950/5 dark:shadow-gray-950/25 dark:bg-[--ui-bg]",
        },
    },
});

export const annonceConcern = tv({
    base: "block text-white px-2 py-0.5",
    variants: {
        size: {
            xs: "text-xs",
            sm: "text-sm",
            md: "text-sm px-2.5",
            lg: "text-sm px-3 py-1",
        },
        intent: {
            primary: "bg-primary-600",
            secondary: "bg-secondary-600",
            accent: "bg-accent-600",
            danger: "bg-danger-600",
            success: "bg-success-600",
            info: "bg-info-600",
            warning: "bg-warning-400 text-warning-950",
            gray: "bg-gray-600",
            gradient: "bg-gradient-to-r from-primary-600 to-accent-400",
            neutral: "bg-gray-950 dark:bg-white dark:text-gray-950",
        },
    },
});

export type AnnonceRootProps = {
    size?: keyof typeof annonceRoot.variants.size;
    variant?: keyof typeof annonceRoot.variants.variant;
};
export type AnnonceConcernProps = {
    size?: keyof typeof annonceConcern.variants.size;
    intent?: keyof typeof annonceConcern.variants.intent;
};
