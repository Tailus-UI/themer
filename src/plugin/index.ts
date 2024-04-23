import plugin from "tailwindcss/plugin";
import { palettePlugin } from "./palette";
import { animationsPlugin } from "./animations";
import { componentsPlugin } from "./components";

/**
 * ### Tailus Themer plugin 🪄.
 * @returns The plugin.
 */
export const themer = plugin(
    () => {
        return ({ matchUtilities }) => {
            matchUtilities({
                perspective: (value) => ({
                    perspective: value,
                }),
            });
        };
    },

    {
        plugins: [palettePlugin, animationsPlugin, componentsPlugin],
    },
);
