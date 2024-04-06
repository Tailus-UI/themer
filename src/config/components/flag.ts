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

export default FlagConfig;
