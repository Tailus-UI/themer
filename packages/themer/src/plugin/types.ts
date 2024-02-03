import { Opacity, ShadowSizes } from "../config/types";
import {
    AccordionConfig,
    AlertConfig,
    AnnonceConfig,
    AvatarConfig,
    BadgeConfig,
    ButtonConfig,
    CardConfig,
    FeedbackConfig,
    FieldConfig,
    FlagConfig,
    MenuConfig,
    PopoverConfig,
    SelectConfig,
    SwitchConfig,
    TabsConfig,
    ToastConfig,
    TooltipConfig,
    UiConfig,
} from "./../config/";

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
         * @default "xl"
         */
        size?: ShadowSizes;
        /**
         * The opacity of the shadow accepts value from `1` to `100`.
         * @default 10
         */
        opacity?: Opacity;
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
         * - rounded
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
        /**
         * The config of the feedback components.
         * Customizable props:
         * - borderColor
         * - shadow : size, opacity
         * - dark : borderColor, bg
         */
        feedback?: FeedbackConfig;
        /**
         * The config of the flag component.
         * Customizable props:
         * - rounded
         * - padding
         */
        flag?: FlagConfig;
        /**
         * ### Field components
         * The config of the field components: `TextField` and `TextArea`.
         * #### Customizable props:
         * - rounded
         * - borderColor
         * - softBg
         * - softBgFocus
         * - dark : borderColor, softBg, softBgFocus
         */
        field?: FieldConfig;
        /**
         * The config of the popover component.
         * Customizable props:
         * - rounded
         * - padding
         */
        popover?: PopoverConfig;
        /**
         * The config of the switch component.
         * Customizable props:
         * - rounded
         */
        switch?: SwitchConfig;
        /**
         * The config of the ui group components : card, annonce, accordion and separator.
         * Customizable props:
         * - borderColor
         * - hoverBorderColor
         * - dark : borderColor, hoverBorderColor
         */
        ui?: UiConfig;
        /**
         * The config of the toast component.
         * Customizable props:
         * - rounded
         */
        toast?: ToastConfig;
        /**
         * The config of the tooltip component.
         * Customizable props:
         * - rounded
         */
        tooltip?: TooltipConfig;
        /**
         * The config of the tabs component.
         * Customizable props:
         * - rounded : list, soft, bottomIndicator
         * - bordreColor
         * - listBg
         * - dark : borderColor, listBg, triggerBg, indicatorBg
         */
        tabs?: TabsConfig;
        /**
         * The config of the select component.
         * Customizable props:
         * - dark : bg
         */
        select?: SelectConfig;
    };
};

export type Shadows = {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    none: string;
};
