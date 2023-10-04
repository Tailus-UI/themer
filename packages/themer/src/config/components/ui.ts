import { Shade } from "../types";

export type UiConfig = {
    /**
     * The border gray color shade of the UI Group components : accordion, card, separator and annonce.
     */
    borderColor?: Shade;
    /**
     * The border gray color shade of the UI Group components on hover : accordion, card, separator and annonce.
     */
    hoverBorderColor?: Shade;
    /**
     * Colors on dark mode
     */
    dark?: {
        /**
         * The border gray color shade of the UI Group components on dark mode : accordion, card, separator and annonce.
         */
        borderColor?: Shade;
        /**
         * The border gray color shade of the UI Group components on hover on dark mode : accordion, card, separator and annonce.
         */
        hoverBorderColor?: Shade;
    };
};

export default UiConfig;
