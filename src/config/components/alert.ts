import { Opacity, ShadowSizes, SizesWithoutFull } from "../types";

export type AlertConfig = {
    /**
     * The border radius of the dialog and alert-dialog components.
     */
    rounded?: SizesWithoutFull;
    /**
     * The shadow of the dialog and alert-dialog components.
     */
    shadow?: {
        /**
         * The size of the shadow.
         * **Note:** The `2xl` value is not supported, use `xxl` instead !.
         */
        size?: ShadowSizes;
        /**
         * The opacity of the shadow accepts value between `1` and `100`.
         */
        opacity?: Opacity;
    };
};

export default AlertConfig;
