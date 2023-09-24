import config from "./../../toast.config";

const viewport =
    "[--viewport-padding:_24px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-2.5 w-[26rem] max-w-[100vw] m-0 list-none z-[2147483647] outline-none";
const baseRoot = {
    base: "relative items-center feedback-shadow border rounded-[--toast-border-radius] p-5 pt-3",
    motion: "data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade will-change-[opacity,transform]",
    appearances: {
        light: "border-[--feedback-dark-border-color] bg-gray-900",
        dark: "border-[--feedback-light-border-color] bg-white",
        both: "border-[--feedback-dark-border-color] bg-gray-900 dark:border-[--feedback-light-border-color] dark:bg-white",
    },
};

const baseTitle = {
    base: "text-base font-semibold",
    appearances: {
        light: "text-white",
        dark: "text-gray-900",
        both: "text-gray-100 dark:text-gray-900",
    },
};

const baseDescription = {
    base: "text-sm",
    appearances: {
        light: "text-gray-300",
        dark: "text-gray-700",
        both: "text-gray-300 dark:text-gray-700",
    },
};

const actions = "-mr-2.5 flex w-max";
const header = "flex items-center justify-between";
const title = baseTitle.base + " " + baseTitle.appearances[config.appearance];
const description = baseDescription.base + " " + baseDescription.appearances[config.appearance];
const root = baseRoot.base + " " + baseRoot.appearances[config.appearance] + " " + baseRoot.motion;

export { viewport, root, header, title, description, actions };
