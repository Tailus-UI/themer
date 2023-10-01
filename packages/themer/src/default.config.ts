export default {
    appearance: "both", // light | dark | both
    radius: "boxy", // boxy | sharp | smooth | smoothest
    shadow: "soft", // soft | hard | softer | harder | softest | hardest
    border: "lighter", // lighter | light | dark | darker | darkest

    components: {
        accordion: {
            borderRadius: "xl",
            borderColor: "gray.200",
            borderHoverColor: "gray.300",
            background: "gray.100",
            backgroundHover: "gray.200",
            shadow: {
                size: "lg",
                opacity: "10",
            },
            dark: {
                borderColor: "gray.800",
                borderHoverColor: "gray.700",
                background: "gray.900",
                backgroundHover: "gray.800",
            },
        },
        alertDialog: {
            borderRadius: "",
            borderColor: "",
            alertBackground: "",
            overlayBackground: "",
            shadow: {
                size: "",
                opacity: "",
            },
            dark: {
                borderColor: "",
                alertBackground: "",
                overlayBackground: "",
            },
        },
    },
};
