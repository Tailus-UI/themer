import config from "../../accordion.config";
import * as baseAccordion from "./base";

const item = {
    base: `${baseAccordion.item} border-b border-gray-200 dark:border-gray-700`,
    appearances: {
        light: "border-gray-200 hover:border-gray-300",
        dark: "border-gray-800 hover:border-gray-700",
        both: "border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700",
    },
};

const accordion = {
    root: "space-y-4",
    item: item.base + " " + item.appearances[config.appearance],
    trigger: {
        parent:
            baseAccordion.trigger.parent.base +
            " " +
            baseAccordion.trigger.parent.appearances[config.appearance],
        icon: baseAccordion.trigger.icon.base + " " + baseAccordion.trigger.icon.motion,
    },
    content:
        baseAccordion.content.base +
        " " +
        baseAccordion.content.motion +
        " " +
        baseAccordion.content.appearances[config.appearance],
};

export default accordion;
export { accordion };
