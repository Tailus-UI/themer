export type ButtonConfig = {
    /**
     * The border radius of the Button component.
     */
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    /**
     * The border width of the Outlined variant Button component.
     * **Note:** The values you provide are converted into `px`, don't add any units.
     * @default "1.5"
     */
    borderWith?: string | number;
};

export const setButtonConfig = (config?: ButtonConfig): ButtonConfig => {
    return {
        rounded: config.rounded,
        borderWith: config.borderWith,
    };
};

export default setButtonConfig;
