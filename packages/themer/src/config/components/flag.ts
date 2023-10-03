import { PaddingSizes, SizesWithoutFull } from "../types";

export type FlagConfig = {
    /**
     * The border radius of the Flag component.
     */
    rounded?: SizesWithoutFull;
    /**
     * The padding of the Flag component.
     */
    padding?: PaddingSizes;
};

export const setFlagConfig = (config?: FlagConfig): FlagConfig => {
    return {
        rounded: config.rounded,
        padding: config.padding,
    };
};

export default setFlagConfig;
