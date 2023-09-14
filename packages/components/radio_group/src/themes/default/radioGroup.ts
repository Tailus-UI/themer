import * as baseRadio from "./base";
import config from "./../../radio.config";

const radioGroup = {
    item: baseRadio.item.base + " " + baseRadio.item.appearances[config.appearance],
    label: baseRadio.label.base + " " + baseRadio.label.appearances[config.appearance],
    indicator: baseRadio.indicator.base + " " + baseRadio.indicator.appearances[config.appearance],
};

export { radioGroup };
