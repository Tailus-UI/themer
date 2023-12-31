import type { Accordion } from "../accordion.types";
import { appearance } from "@tailus/themer";
import * as baseAccordion from "./base";

const item = {
    base: `${baseAccordion.item} px-6 rounded-[--accordion-border-radius]`,
    appearances: {
        light: "bg-[--accordion-soft-light-bg]",
        dark: "bg-[--accordion-soft-dark-bg]",
        both: "bg-[--accordion-soft-light-bg] dark:bg-[--accordion-soft-dark-bg]",
    },
};

const softVariant: Accordion = {
    root: "space-y-4",
    item: item.base + " " + item.appearances[appearance],
    trigger: {
        parent:
            baseAccordion.trigger.parent.base +
            " " +
            baseAccordion.trigger.parent.appearances[appearance],
        content: baseAccordion.trigger.content,
        icon: baseAccordion.trigger.icon.base + " " + baseAccordion.trigger.icon.motion,
    },
    content:
        baseAccordion.content.base +
        " " +
        baseAccordion.content.motion +
        " " +
        baseAccordion.content.appearances[appearance],
};

export default softVariant;
export { softVariant };
