import {
    AccordionConfig,
    AlertConfig,
    AnnonceConfig,
    AvatarConfig,
    BadgeConfig,
    ButtonConfig,
    CardConfig,
    MenuConfig,
} from "./../config/components";

export type Config = {
    /**
     * The appearance of the theme.
     * **Note:** Independant of tailwindcss `darkMode`. This props is used to generate the appearance of your theme.
     * - `light` : Generate a light theme only.
     * - `dark` : Generate a dark theme only.
     * - `both` : Generate both light and dark themes.
     * @default "both"
     */
    appearance?: "light" | "dark" | "both";
    /**
     * The border radius of the the following components :
     * - accordion
     * - alert
     * - annonce
     * - button
     * - card
     * - flag
     * - field
     * - popover
     * - tooltip
     * - menu
     * - switch
     * - toast
     * - tabs
     * @default "smoothest"
     */
    radius?: "boxy" | "sharp" | "smooth" | "smoothest";
    /**
     * The shadow of the following components :
     * - accordion : elevated and outlined-elevated variants
     * - alert
     * - card
     * - feedback : flag and toast components
     * - menu : context menu, dropdown menu, select menu and popover components
     */
    shadow?: {
        /**
         * The size of the shadow.
         * **Note:** The `2xl` value is not supported, use `xxl` instead !.
         * @default "xl"
         */
        size: "none" | "default" | "sm" | "md" | "lg" | "xl" | "xxl";
        /**
         * The opacity of the shadow accepts value from `1` to `100`.
         * @default 10
         */
        opacity: number;
    };
    /**
     * The border of the following components :
     * - ui : accordion, annonce, card, separator and navigation menu components
     * - feedback : alert-dialog, dialog, flag and toast components
     * - menu : context menu, dropdown menu, select and popover components
     * - tabs : tabs-list and tabs-indicator elements
     * - field : soft variant
     * - card : soft variant
     *
     * @default "light"
     */
    border?: "lighter" | "light" | "high" | "higher";
    /**
     * The background of the following components :
     * - accordion : soft, ghost elevated(dark) variants
     * - feedback : alert-dialog, dialog, flag components
     * - menu : context menu, dropdown menu, and popover components
     * - tabs : tabs-list and tabs-indicator elements
     * - select
     *
     * @default "light"
     */
    background?: "light" | "lighter" | "high" | "higher";
    /**
     * The padding of the following components :
     * - card
     * - flag
     * - popover
     *
     * @default "larger"
     */
    padding?: "small" | "medium" | "large" | "larger" | "largest";
    /**
     * Specific components configurations.
     */
    components?: {
        /**
         * The config of the accordion component.
         * Customizable props:
         * - rounded
         * - softBg
         * - ghostBg
         * - shadow : size, opacity
         * - dark : softBg, ghostBg, elevatedBg
         */
        accordion?: AccordionConfig;
        /**
         * The config of the alert component.
         * Customizable props:
         * - rounded
         * - shadow : size, opacity
         */
        alert?: AlertConfig;
        /**
         * The config of the annonce component.
         * Customizable props:
         * - rounded
         */
        annonce?: AnnonceConfig;
        /**
         * The config of the avatar component.
         * Customizable props:
         * - rounded
         * - statusInset
         */
        avatar?: AvatarConfig;
        /**
         * The config of the badge component.
         * Customizable props:
         * - rounded
         */
        badge?: BadgeConfig;
        /**
         * The config of the button component.
         * Customizable props:
         * - rounded
         * - borderWidth : applied only to the outlined variant
         */
        button?: ButtonConfig;
        /**
         * The config of the card component.
         * Customizable props:
         * - rounded
         * - padding
         * - softBg
         * - shadow : size, opacity
         * - dark : bg, softBg
         */
        card?: CardConfig;
        /**
         * The config of the menu component.
         * Customizable props:
         * - rounded : @type string
         * - borderColor
         * - bgOpacity,
         * - backdropBlur
         * - shadow : size, opacity
         * - dark :
         *      - borderColor
         *      - bg
         *      - bgOpacity
         *      - backdropBlur
         *
         */
        menu?: MenuConfig;
    };
};

export type Shadows = {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    none: string;
};
