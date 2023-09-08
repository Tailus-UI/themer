import config from "../../accordion.config";
import * as baseAccordion from "./base";

const item = {
    base: `${baseAccordion.item} group/item px-6 data-[state=open]:rounded-[--accordion-border-radius] data-[state=open]:border-transparent`,
    appearances: {
        light: "data-[state=open]:bg-gray-100",
        dark: "data-[state=open]:bg-gray-900",
        both: "data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-900",
    },
};
const parentAppearances = {
    light: "border-gray-200 data-[state=open]:border-transparent",
    dark: "border-gray-800 data-[state=open]:border-transparent",
    both: "border-gray-200 dark:border-gray-800 data-[state=open]:border-transparent dark:data-[state=open]:border-transparent",
};
const triggerParent = {
    base: baseAccordion.trigger.parent.base + " " + "border-b group-last/item:border-none",
    appearance:
        baseAccordion.trigger.parent.appearances[config.appearance] +
        " " +
        parentAppearances[config.appearance],
};

const ghostVariant = {
    root: "",
    item: item.base + " " + item.appearances[config.appearance],
    trigger: {
        parent: triggerParent.base + " " + triggerParent.appearance,
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

export default ghostVariant;
export { ghostVariant };
