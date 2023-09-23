# Dropdown Menu themes

## Overview

The dropdown menu component theme is a collection of Tailwind utilities that can be used to create dropdown menus with different variants and colors. The default variant is solid, but there is also a soft variant. Each variant has a number of properties that can be customized, including the shadow, border colors, background opacity, backdrop blur, radius, and separator colors.

## Installation

To install the dropdown menu component theme, run the following command:

```bash
npm install @tailus/themer-dropdown-menu
```

## Importation

To import the dropdown menu component theme, you can use one of the following imports:

```tsx
import { dropdownMenu } from "@tailus/themer-dropdown-menu";
import { softDropdownMenu } from "@tailus/themer-dropdown-menu";
```

## Example

### Radix-UI

```tsx
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
    Pencil1Icon,
    ArchiveIcon,
    TrashIcon,
    FileIcon,
    DotsVerticalIcon,
} from "@radix-ui/react-icons";
import { dropdownMenu as theme } from "@tailus/themer-dropdown-menu";
import { ghostIconButton as buttonTheme } from "@tailus/themer-button";

const DropdownMenuUI = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className={buttonTheme.gray.md}>
                    <span className="sr-only">Dismiss dialog</span>
                    <DotsVerticalIcon className={buttonTheme.icon.md} />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className={theme.content} sideOffset={5}>
                    <DropdownMenu.Item className={theme.item.primary}>
                        <Pencil1Icon className={theme.icon} />
                        Edit
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className={theme.item.primary}>
                        <FileIcon className={theme.icon} />
                        Duplicate
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className={theme.separator} />
                    <DropdownMenu.Item className={theme.item.primary} disabled>
                        <ArchiveIcon className={theme.icon} />
                        Archive
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className={theme.item.danger}>
                        <TrashIcon className={theme.icon} />
                        Delete
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default DropdownMenuUI;
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

-   `dropdownMenu.content`: The Tailwind css utilities for the content of the dropdown menu.
-   `dropdownMenu.separator`: The Tailwind css utilities for the separator line between items in the dropdown menu.
-   `dropdownMenu.icon`: The Tailwind css utilities for the icons that appear before the items text in the dropdown menu.
-   `dropdownMenu.rightIcon`:` The Tailwind css utilities for the icons that appear next to items in the dropdown menu.
-   `dropdownMenu.subTrigger.primary`: The Tailwind css utilities for primary items in the dropdown menu.
-   `dropdownMenu.subTrigger.warning`: The Tailwind css utilities for warning items in the dropdown menu.
-   `dropdownMenu.subTrigger.danger`: The Tailwind css utilities for danger items in the dropdown menu.
-   `dropdownMenu.subTrigger.gray`: The Tailwind css utilities for gray items in the dropdown menu.
-   `dropdownMenu.subTrigger.neutral`: The Tailwind css utilities for neutral items in the dropdown menu.
-   `dropdownMenu.item.primary`: The Tailwind css utilities for primary items in the dropdown menu.
-   `dropdownMenu.item.warning`: The Tailwind css utilities for warning items in the dropdown menu.
-   `dropdownMenu.item.danger`: The Tailwind css utilities for danger items in the dropdown menu.
-   `dropdownMenu.item.gray`: The Tailwind css utilities for gray items in the dropdown menu.
-   `dropdownMenu.item.neutral`: The Tailwind css utilities for neutral items in the dropdown menu.

## Customization

The following properties can be customized:

-   shadow
-   light border color
-   dark border color
-   light background opacity
-   dark background
-   light backdrop blur
-   dark backdrop blur
-   dropdown menu border radius
-   separator light color
-   separator dark color

To customize the dropdown menu component theme, you can override The Tailwind css utilitieses in your own tailwind.config file.

```js
tailus: {
    components: {
        menu: {
            borderRadius: "2xl",
            borderColor : "200",
            separator : "200",
            backgroundOpacity : "90%",
            backdropBlur : "xl",
            shadow : {
                size : "lg",
                opacity : "10"
            },
            dark : {
                borderColor : "800",
                separator : "800",
                background : "950",
                backgroundOpacity : "90%",
                backdropBlur : "2xl",
            }
        },
    },
},
```
