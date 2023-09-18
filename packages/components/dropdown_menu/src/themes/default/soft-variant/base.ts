import { softColors } from "./colors";
import { getItem } from "./../base";

const getSoftItem = (color: string) => {
    return getItem(color, softColors);
};

export { getSoftItem };
export { content, separator } from "./../base";
