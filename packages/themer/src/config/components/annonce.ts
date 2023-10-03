import { SizesWithoutFull } from "../types";

export type AnnonceConfig = {
    /**
     * The border radius of the annonce component.
     */
    rounded?: SizesWithoutFull;
};

export const setAnnonceConfig = (config?: AnnonceConfig): AnnonceConfig => {
    return {
        rounded: config.rounded,
    };
};

export default setAnnonceConfig;
