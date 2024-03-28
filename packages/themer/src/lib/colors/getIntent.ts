import * as themerGrays from "./additionalGrays";

export const getIntentValue = (colors, intent, defaultColor) => {
    if (typeof intent === "string") {
        return colors[intent] || themerGrays[intent];
    } else if (typeof intent === "object") {
        return { ...intent };
    } else {
        return colors[defaultColor];
    }
};
