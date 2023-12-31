import { AvatarStatusInset, Sizes } from "../types";

export type AvatarConfig = {
    /**
     * The border radius of the avatar.
     * @default "full"
     */
    rounded?: Sizes;
    /**
     * The inset of the avatar status, accepts all the `spacing` values.
     * @default "px"
     */
    statusInset?: AvatarStatusInset;
};

export default AvatarConfig;
