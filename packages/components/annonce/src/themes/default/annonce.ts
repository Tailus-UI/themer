import * as baseAnnonce from "./base";
import config from "./../../annonce.config";
import colors from "./colors";

const concern = {
    primary: baseAnnonce.concern + " " + colors.primary[config.appearance],
    secondary: baseAnnonce.concern + " " + colors.secondary[config.appearance],
    accent: baseAnnonce.concern + " " + colors.accent[config.appearance],
    danger: baseAnnonce.concern + " " + colors.danger[config.appearance],
    success: baseAnnonce.concern + " " + colors.success[config.appearance],
    warning: baseAnnonce.concern + " " + colors.warning[config.appearance],
    gray: baseAnnonce.concern + " " + colors.gray[config.appearance],
    neutral: baseAnnonce.concern + " " + colors.neutral[config.appearance],
};

const annonce = {
    root: baseAnnonce.root.base + " " + baseAnnonce.root.appearances[config.appearance],
    concern,
    message: baseAnnonce.message.base + " " + baseAnnonce.message.appearances[config.appearance],
};

export default annonce;
export { annonce };
