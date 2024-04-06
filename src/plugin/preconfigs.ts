import { Preconfigs } from "../config";
import { Config } from "./types";
import merge from "lodash.merge";

/**
 *
 * @param preconfigs
 * @param options
 * @returns Merges preconfigs with options
 */
const setPreconfigs = (preconfigs: Preconfigs, options: Config): Preconfigs => {
    const optionsPreconfigs = {
        appearance: options.appearance,
        palette: options.palette,
        background: options.background,
        border: options.border,
        padding: options.padding,
        radius: options.radius,
        shadow: options.shadow,
    };
    return merge(preconfigs, optionsPreconfigs);
};
export default setPreconfigs;
