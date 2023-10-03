export type AvatarConfig = {
    /**
     * The border radius of the avatar.
     * @default "full"
     */
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    /**
     * The inset of the avatar status, accepts all the `spacing` values.
     * @default "px"
     */
    statusInset?: string;
};
export const setAvatarConfig = (config?: AvatarConfig): AvatarConfig => {
    return {
        rounded: config.rounded,
        statusInset: config.statusInset,
    };
};
export default setAvatarConfig;
