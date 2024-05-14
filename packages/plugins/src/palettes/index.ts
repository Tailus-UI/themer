import { grays } from "./grays";
import { defaultFeedbackColors } from "./defaultFeedbackColors";
import colors from "tailwindcss/colors";

export const palettes = {
    passion: {
        ...defaultFeedbackColors,
        primary: colors.red,
        secondary: colors.orange,
        accent: colors.amber,
        gray: grays.neutral,
    },

    mystery: {
        ...defaultFeedbackColors,
        primary: colors.purple,
        secondary: colors.fuchsia,
        accent: colors.pink,
        gray: grays.slate,
    },
    oz: {
        ...defaultFeedbackColors,
        primary: colors.indigo,
        secondary: colors.cyan,
        accent: colors.fuchsia,
        success: colors.lime,
        danger: colors.rose,
        gray: grays.indigray,
    },
    romance: {
        ...defaultFeedbackColors,
        primary: colors.rose,
        secondary: colors.red,
        accent: colors.orange,
        gray: grays.zinc,
    },
    energy: {
        ...defaultFeedbackColors,
        primary: colors.amber,
        secondary: colors.yellow,
        accent: colors.lime,
        gray: grays.stone,
    },
    winter: {
        ...defaultFeedbackColors,
        primary: colors.cyan,
        secondary: colors.sky,
        accent: colors.emerald,
        danger: colors.rose,
        warning: colors.amber,
        info: colors.cyan,
        gray: grays.cyanish,
    },
    spring: {
        ...defaultFeedbackColors,
        primary: colors.lime,
        secondary: colors.green,
        accent: colors.yellow,
        gray: grays.greenish,
    },
    nature: {
        ...defaultFeedbackColors,
        primary: colors.green,
        secondary: colors.lime,
        accent: colors.teal,
        gray: grays.greenish,
    },
    trust: {
        ...defaultFeedbackColors,
        primary: colors.blue,
        secondary: colors.purple,
        accent: colors.lime,
        gray: grays.slate,
    },
};

export { grays } from "./grays";
export { defaultFeedbackColors } from "./defaultFeedbackColors";
