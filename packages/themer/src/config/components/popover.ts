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

export const setPopoverConfig = (config?: PopoverConfig): PopoverConfig => {
    return {
        rounded: config.rounded,
        padding: config.padding,
    };
};

export default setPopoverConfig;
