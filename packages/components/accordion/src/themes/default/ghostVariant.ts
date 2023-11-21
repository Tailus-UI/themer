import { appearance } from "@tailus/themer";
import type { Accordion } from "../accordion.types";
import * as baseAccordion from "./base";

const item = {
    base: `${baseAccordion.item} group/item px-6 data-[state=open]:rounded-[--accordion-border-radius] data-[state=open]:border-transparent`,
    appearances: {
        light: "data-[state=open]:bg-[--accordion-ghost-light-bg]",
        dark: "data-[state=open]:bg-[--accordion-ghost-dark-bg]",
        both: "data-[state=open]:bg-[--accordion-ghost-light-bg] dark:data-[state=open]:bg-[--accordion-ghost-dark-bg]",
    },
};
const parentAppearances = {
    light: "border-[--ui-light-border-color] data-[state=open]:border-transparent",
    dark: "border-[--ui-dark-border-color] data-[state=open]:border-transparent",
    both: "border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] data-[state=open]:border-transparent dark:data-[state=open]:border-transparent",
};
const triggerParent = {
    base: baseAccordion.trigger.parent.base + " " + "border-b group-last/item:border-none",
    appearance:
        baseAccordion.trigger.parent.appearances[appearance] + " " + parentAppearances[appearance],
};

const ghostVariant: Accordion = {
    root: "",
    item: item.base + " " + item.appearances[appearance],
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
        baseAccordion.content.appearances[appearance],
};

export default ghostVariant;
export { ghostVariant };
