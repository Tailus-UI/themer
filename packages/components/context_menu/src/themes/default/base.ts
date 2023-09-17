const appearance = "light";

const content = {
    base: "min-w-[10rem] overflow-hidden rounded-[--context-border-radius] border p-2 shadow-xl shadow-gray-950/10",
    motion: "data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade will-change-[opacity,transform]",
    appearance: {
        light: "border-gray-950/5 bg-white",
        dark: "border-white/5 bg-gray-900/80 backdrop-blur",
        both: "border-gray-950/5 bg-white dark:border-white/5 dark:bg-gray-900/80 dark:backdrop-blur",
    },
};

const item = {
    base: "relative flex select-none items-center rounded-[calc(var(--context-border-radius)-0.5rem)] gap-2 px-3 py-2 text-sm leading-none outline-none data-[disabled]:cursor-not-allowed",
    disabled: {
        light: "data-[disabled]:text-gray-300",
        dark: "data-[disabled]:text-gray-700",
        both: "data-[disabled]:text-gray-300 dark:data-[disabled]:text-gray-700",
    },
};

const baseAppearance = {
    light: "text-gray-700",
    dark: "text-gray-300",
    both: "text-gray-700 dark:text-gray-300",
};

const variants = {
    solid: {
        base: "data-[highlighted]:text-white",
        features: {
            warning: {
                base: "data-[highlighted]:bg-warning-600 data-[highlighted]:text-white",
                appearance: {
                    light: "text-warning-700",
                    dark: "text-warning-400",
                    both: "text-warning-700 dark:text-warning-400",
                },
            },
            danger: {
                base: "data-[highlighted]:bg-danger-600 data-[highlighted]:text-white",
                appearance: {
                    light: "text-danger-700",
                    dark: "text-danger-400",
                    both: "text-danger-700 dark:text-danger-400",
                },
            },
            info: {
                base: "data-[highlighted]:bg-info-600 data-[highlighted]:text-white",
                appearance: {
                    light: "text-info-700",
                    dark: "text-info-400",
                    both: "text-info-700 dark:text-info-400",
                },
            },
            success: {
                base: "data-[highlighted]:bg-success-600 data-[highlighted]:text-white",
                appearance: {
                    light: "text-success-700",
                    dark: "text-success-400",
                    both: "text-success-700 dark:text-success-400",
                },
            },
        },
    },
    soft: {
        base: {
            light: "data-[highlighted]:text-primary-700 data-[highlighted]:bg-primary-500/10",
            dark: "data-[highlighted]:text-primary-300 data-[highlighted]:bg-primary-500/10",
            both: "data-[highlighted]:text-primary-700 dark:data-[highlighted]:text-primary-300 data-[highlighted]:bg-primary-500/10",
        },
        features: {
            warning: {
                light: "text-warning-700 data-[highlighted]:text-warning-700 data-[highlighted]:bg-warning-100",
                dark: "text-warning-300 data-[highlighted]:text-warning-300 data-[highlighted]:bg-warning-500/10",
                both: "text-warning-700 dark:text-warning-300 data-[highlighted]:text-warning-700 data-[highlighted]:bg-warning-100 dark:data-[highlighted]:text-warning-300 dark:data-[highlighted]:bg-warning-500/10",
            },
            danger: {
                light: "text-danger-700 data-[highlighted]:text-danger-700 data-[highlighted]:bg-danger-500/10",
                dark: "text-danger-300 data-[highlighted]:text-danger-300 data-[highlighted]:bg-danger-500/10",
                both: "text-danger-700 dark:text-danger-300 data-[highlighted]:text-danger-700 dark:data-[highlighted]:text-danger-300 data-[highlighted]:bg-danger-500/10",
            },
            info: {
                light: "text-info-700 data-[highlighted]:text-info-700 data-[highlighted]:bg-info-500/10",
                dark: "text-info-300 data-[highlighted]:text-info-300 data-[highlighted]:bg-info-500/10",
                both: "text-info-700 dark:text-info-300 data-[highlighted]:text-info-700 dark:data-[highlighted]:text-info-300 data-[highlighted]:bg-info-500/10",
            },
            success: {
                light: "text-info-700 data-[highlighted]:text-success-700 data-[highlighted]:bg-success-500/10",
                dark: "text-info-300 data-[highlighted]:text-success-300 data-[highlighted]:bg-success-500/10",
                both: "text-info-700 dark:text-info-300 data-[highlighted]:text-success-700 dark:data-[highlighted]:text-success-300 data-[highlighted]:bg-success-500/10",
            },
        },
    },
};

const base = item.base + " " + item.disabled[appearance];
const softBase = base + " " + baseAppearance[appearance];
const solidItem =
    base +
    " " +
    variants.solid.base +
    " " +
    baseAppearance[appearance] +
    "  data-[highlighted]:bg-primary-600";
const softItem = softBase + " " + variants.soft.base[appearance];

const itemFeatures: any = {
    solid: {
        warning:
            base +
            " " +
            variants.solid.features.warning.base +
            " " +
            variants.solid.features.warning.appearance[appearance],
        danger:
            base +
            " " +
            variants.solid.features.danger.base +
            " " +
            variants.solid.features.danger.appearance[appearance],
        info:
            base +
            " " +
            variants.solid.features.info.base +
            " " +
            variants.solid.features.info.appearance[appearance],
        success:
            base +
            " " +
            variants.solid.features.success.base +
            " " +
            variants.solid.features.success.appearance[appearance],
    },
    soft: {
        warning: softBase + " " + variants.soft.features.warning[appearance],
        danger: softBase + " " + variants.soft.features.danger[appearance],
        info: softBase + " " + variants.soft.features.info[appearance],
        success: softBase + " " + variants.soft.features.success[appearance],
    },
};
let theme = {
    content: content.base + " " + content.appearance[appearance] + " " + content.motion,
    item: softItem,
    warningItem: itemFeatures.solid.warning,
    dangerItem: itemFeatures.solid.danger,
    infoItem: itemFeatures.solid.info,
    successItem: itemFeatures.solid.success,
};

function setVariant(variant: string) {
    variant = variant.toLowerCase();
    variant as keyof typeof variants;
    return (theme = {
        content: theme.content,
        item: variant === "solid" ? solidItem : softItem,
        warningItem: itemFeatures[variant].warning,
        dangerItem: itemFeatures[variant].danger,
        infoItem: itemFeatures[variant].info,
        successItem: itemFeatures[variant].success,
    });
}

setVariant("solid");

export default theme;
