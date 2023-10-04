import { PaddingSizes, SizesWithoutFull } from "../types";

export type PopoverConfig = {
    /**
     * The border radius of the Popover component.
     */
    rounded?: SizesWithoutFull;
    /**
     * The padding of the Popover component.
     */
    padding?: PaddingSizes;
};

export default PopoverConfig;
