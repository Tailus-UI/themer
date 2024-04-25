import { palette } from "./palette";
import { components } from "./components";
import { withTV } from "tailwind-variants/dist/transformer";
import { animations } from "./animations";
import { shade } from "./shade";
import { rounded } from "./rounded";

/** @type {import('tailwindcss').Config} */

export default withTV({
    content: [],
    plugins: [palette, components, animations, shade, rounded],
});
