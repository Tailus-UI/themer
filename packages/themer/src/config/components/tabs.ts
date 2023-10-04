import { Shade, Sizes } from "../types";

export type TabsConfig = {
    /**
     * The border radius of the Tabs component.
     */
    rounded?: {
        /**
         * The border radius of the Tabs component, applied to the list of the triggers.
         */
        list?: Sizes;
        /**
         * The border radius of the Tab component, applied only to the soft variant.
         */
        softVariant?: Sizes;
        /**
         * The border radius of the Tab component, applied only to the triggers of the bottom indicator variant.
         */
        bottomIndicatorVariant?: Sizes;
    };
    /**
     * The background of the list of the triggers.
     */
    listBg?: Shade;
    /**
     * The border color of the Tabs component.
     */
    borderColor?: Shade;
    /**
     * The dark mode of the Tabs component.
     */
    dark?: {
        /**
         * The background of the list of the triggers on dark mode.
         */
        listBg?: Shade;
        /**
         * The background of the trigger on dark mode, applied to the bottom indicator variant.
         */
        triggerBg?: Shade;
        /**
         * The background of the indicator on dark mode.
         */
        indicatorBg?: Shade;
        /**
         * The border color of the Tabs component on dark mode.
         */
        borderColor?: Shade;
    };
};

export default TabsConfig;
