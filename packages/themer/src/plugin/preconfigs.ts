import { Preconfigs } from "../config";
import { Config } from "./types";

/**
 *
 * @param preconfigs
 * @param options
 * @returns Merges preconfigs with options
 */
const setPreconfigs = (preconfigs: Preconfigs, options: Config) => {
    const optionsPreconfigs = {
        appearance: options.appearance,
        background: options.background,
        border: options.border,
        padding: options.padding,
        radius: options.radius,
        shadow: options.shadow,
    };
    const newPreconfigs = { ...preconfigs, ...optionsPreconfigs };
    return newPreconfigs;
};

export default setPreconfigs;
