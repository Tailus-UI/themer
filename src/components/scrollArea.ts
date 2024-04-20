import { tv } from "tailwind-variants";

export const scrollArea = tv({
    slots: {
        root: "relative flex overflow-hidden",
        bar: "flex touch-none select-none rounded-full transition-all duration-100 ease-out p-0.5 data-[orientation=horizontal]:mx-2 data-[orientation=vertical]:my-2 data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col hover:data-[orientation=horizontal]:h-3 hover:data-[orientation=vertical]:w-3 hover:bg-gray-950/5 dark:hover:bg-white/10",
        thumb: "relative flex-1 rounded-full before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-12 before:w-full before:min-w-12 before:-translate-x-1/2 before:-translate-y-1/2 bg-gray-300 dark:bg-gray-500",
    },
});
