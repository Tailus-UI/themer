import type { Accordion } from "../accordion.types";
import config from "./../../accordion.config";
import * as baseAccordion from "./base";

const item = {
    base: `${baseAccordion.item} px-6 rounded-[--accordion-border-radius] border data-[state=open]:accordion-shadow`,
    appearances: {
        light: "bg-white border-[--ui-light-border-color] hover:border-[--ui-light-border-hover-color]",
        dark: "bg-[--accordion-dark-bg] border-[--ui-dark-border-color] hover:border-[--ui-dark-border-hover-color] data-[state=open]:bg-[--card-dark-bg]",
        both: "bg-white dark:bg-[--accordion-dark-bg] border-[--ui-light-border-color] hover:border-[--ui-light-border-hover-color] dark:border-[--ui-dark-border-color] dark:hover:border-[--ui-dark-border-hover-color] dark:data-[state=open]:bg-[--card-dark-bg]",
    },
};

const outlinedElevatedVariant: Accordion = {
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
