# Context Menu themes

## Overview

The context menu component theme is a collection of Tailwind utilities that can be used to create context menus with different variants and colors. The default variant is solid, but there is also a soft variant. Each variant has a number of properties that can be customized, including the shadow, border colors, background opacity, backdrop blur, radius, and separator colors.

## Installation

To install the context menu component theme, run the following command:

`npm install @tailus/themer-context-menu`

## Importation

To import the context menu component theme, you can use one of the following imports:

```
import { contextMenu } from "@tailus/themer-context-menu";
import { softContextMenu } from "@tailus/themer-context-menu";
```

## Variants

The following variants are available:

-   `solid`: The default variant.
-   `soft`: A softer variant with rounded corners and a lighter background color.

## Colors

The following colors are available for the solid variant:

-   `primary`
-   `warning`
-   `danger`
-   `gray`
-   `neutral`

The soft variant has all of the same colors as the solid variant except for the neutral color.

## Properties

The following properties can be customized:

-   `contextMenu.content`: The Tailwind css utilities for the content of the context menu.
-   `contextMenu.separator`: The Tailwind css utilities for the separator line between items in the context menu.
-   `contextMenu.icon`:` The Tailwind css utilities for the icons that appear next to items in the context menu.
-   `contextMenu.command`: The Tailwind css utilities for the command items in the context menu.
-   `contextMenu.subTrigger.primary`: The Tailwind css utilities for primary items in the context menu.
-   `contextMenu.subTrigger.warning`: The Tailwind css utilities for warning items in the context menu.
-   `contextMenu.subTrigger.danger`: The Tailwind css utilities for danger items in the context menu.
-   `contextMenu.subTrigger.gray`: The Tailwind css utilities for gray items in the context menu.
-   `contextMenu.subTrigger.neutral`: The Tailwind css utilities for neutral items in the context menu.
-   `contextMenu.item.primary`: The Tailwind css utilities for primary items in the context menu.
-   `contextMenu.item.warning`: The Tailwind css utilities for warning items in the context menu.
-   `contextMenu.item.danger`: The Tailwind css utilities for danger items in the context menu.
-   `contextMenu.item.gray`: The Tailwind css utilities for gray items in the context menu.
-   `contextMenu.item.neutral`: The Tailwind css utilities for neutral items in the context menu.

## Customization

The following properties can be customized:

-   shadow
-   light border color
-   dark border color
-   light background opacity
-   dark background
-   light backdrop blur
-   dark backdrop blur
-   context menu border radius
-   separator light color
-   separator dark color

To customize the context menu component theme, you can override The Tailwind css utilitieses in your own tailwind.config file.

```
tailus: {
    components: {
        contextMenu: {
            borderRadius: "2xl",
            borderColor : "200",
            separator : "200",
            backgroundOpacity : "90%",
            shadow : {
                size : "lg",
                opacity : "10"
            },
            dark : {
                borderColor : "800",
                separator : "800",
                background : "950",
                backgroundOpacity : "90%",
            }
        },
    },
},
```
