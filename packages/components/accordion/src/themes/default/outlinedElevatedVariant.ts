import config from "./../../accordion.config";
import * as baseAccordion from "./base";

const item = {
    base: `${baseAccordion.item} px-6 rounded-[--accordion-border-radius] border data-[state=open]:shadow-xl`,
    appearances: {
        light: "border-gray-200 hover:border-gray-300 data-[state=open]:shadow-gray-950/5",
        dark: "border-gray-800 hover:border-gray-700 data-[state=open]:bg-gray-900",
        both: "border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700 data-[state=open]:shadow-gray-950/5 dark:data-[state=open]:bg-gray-900",
    },
};

const outlinedElevatedVariant = {
    root: "space-y-4",
    item: item.base + " " + item.appearances[config.appearance],
    trigger: {
        parent:
            baseAccordion.trigger.parent.base +
            " " +
            baseAccordion.trigger.parent.appearances[config.appearance],
        content: baseAccordion.trigger.content,
        icon: baseAccordion.trigger.icon.base + " " + baseAccordion.trigger.icon.motion,
    },
    content:
        baseAccordion.content.base +
        " " +
        baseAccordion.content.motion +
        " " +
        baseAccordion.content.appearances[config.appearance],
};

export default outlinedElevatedVariant;
export { outlinedElevatedVariant };
