import { softColors, softSubTrigerColors } from "./colors";
import { getItem, getSubTrigger } from "./../base";

const getSoftItem = (color: string) => {
    return getItem(color, softColors);
};

const getSoftSubTrigger = (color: string) => {
    return getSubTrigger(color, softColors, softSubTrigerColors);
};

export { getSoftItem, getSoftSubTrigger };
export { content, separator, icon, rightIcon, subContent } from "./../base";
