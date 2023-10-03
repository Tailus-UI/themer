import { ButtonBorderWidth, Sizes } from "../types";

export type ButtonConfig = {
    /**
     * The border radius of the Button component.
     */
    rounded?: Sizes;
    /**
     * The border width of the Outlined variant Button component.
     * **Note:** The values you provide are converted into `px`, don't add any units.
     * @default "1.5"
     */
    borderWith?: ButtonBorderWidth;
};

export const setButtonConfig = (config?: ButtonConfig): ButtonConfig => {
    return {
        rounded: config.rounded,
        borderWith: config.borderWith,
    };
};

export default setButtonConfig;
