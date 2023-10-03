export type AnnonceConfig = {
    /**
     * The border radius of the annonce component.
     */
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
};

export const setAnnonceConfig = (config?: AnnonceConfig): AnnonceConfig => {
    return {
        rounded: config.rounded,
    };
};

export default setAnnonceConfig;
