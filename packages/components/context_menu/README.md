# Context Menu themes

## Overview

The context menu component theme is a collection of Tailwind utilities that can be used to create context menus with different variants and colors. The default variant is solid, but there is also a soft variant. Each variant has a number of properties that can be customized, including the shadow, border colors, background opacity, backdrop blur, radius, and separator colors.

## Installation

To install the context menu component theme, run the following command:

```bash
npm install @tailus/themer-context-menu
```

## Importation

To import the context menu component theme, you can use one of the following imports:

```tsx
import { contextMenu } from "@tailus/themer-context-menu";
import { softContextMenu } from "@tailus/themer-context-menu";
```

## Example

### Radix UI

```tsx
import * as ContextMenu from "@radix-ui/react-context-menu";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { contextMenu as contextTheme } from "@tailus/themer-context-menu";

const ContextMenuUI = () => {
    return (
        <ContextMenu.Root>
            <div className="-mt-12">
                <span className="text-gray-700 dark:text-gray-300">Right click the logo.</span>

                <ContextMenu.Trigger>
                    <div className="mt-12 mx-auto w-fit rounded-[--menu-border-radius] px-4 py-2 transition duration-300 hover:bg-gray-100 dark:hover:bg-white/5">
                        <img className="w-16 h-16 mx-auto" src="/tls/x512.png" alt="" />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            tailus-logo.png
                        </span>
                    </div>
                </ContextMenu.Trigger>
            </div>

            <ContextMenu.Portal>
                <ContextMenu.Content className={contextTheme.content}>
                    <ContextMenu.Item className={contextTheme.item.primary}>
                        Scale <div className={contextTheme.command}>⌘+S</div>
                    </ContextMenu.Item>
                    <ContextMenu.Item className={contextTheme.item.primary}>
                        Set to Primary <div className={contextTheme.command}>⌘+P</div>
                    </ContextMenu.Item>
                    <ContextMenu.Separator className={contextTheme.separator} />
                    <ContextMenu.Item className={contextTheme.item.primary}>Copy </ContextMenu.Item>
                    <ContextMenu.Item className={contextTheme.item.primary}>
                        Share...{" "}
                    </ContextMenu.Item>
                    <ContextMenu.Separator className={contextTheme.separator} />
                    <ContextMenu.Sub>
                        <ContextMenu.SubTrigger className={contextTheme.subTriger.primary}>
                            Download
                            <div className={contextTheme.icon}>
                                <ChevronRightIcon />
                            </div>
                        </ContextMenu.SubTrigger>
                        <ContextMenu.Portal>
                            <ContextMenu.SubContent
                                className={contextTheme.subContent}
                                sideOffset={4}
                                alignOffset={-5}
                            >
                                <ContextMenu.Item className={contextTheme.item.primary}>
                                    Logomark{" "}
                                </ContextMenu.Item>
                                <ContextMenu.Item className={contextTheme.item.primary}>
                                    Logotype{" "}
                                </ContextMenu.Item>
                                <ContextMenu.Separator className={contextTheme.separator} />

                                <ContextMenu.Item className={contextTheme.item.primary}>
                                    All{" "}
                                </ContextMenu.Item>
                            </ContextMenu.SubContent>
                        </ContextMenu.Portal>
                    </ContextMenu.Sub>
                    <ContextMenu.Separator className={contextTheme.separator} />
                    <ContextMenu.Item className={contextTheme.item.warning}>
                        Archive <div className={contextTheme.command}>⌘+D</div>
                    </ContextMenu.Item>
                    <ContextMenu.Item className={contextTheme.item.danger}>
                        Delete <div className={contextTheme.command}>⌘+D</div>
                    </ContextMenu.Item>
                </ContextMenu.Content>
            </ContextMenu.Portal>
        </ContextMenu.Root>
    );
};

export default ContextMenuUI;
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

**Note :** The context menu shares the customizations of the menu components. To customize the context menu, you must customize the menu components trough `menu` object.

```js
tailus: {
    components: {
        menu: {
            rounded: "3xl",
            borderColor: "200",
            bgOpacity: 99,
            backdropBlur: "3",
            shadow: {
                size: "md",
                opacity:3,
            },
            dark: {
                bg: "950",
                borderColor: "800",
                bgOpacity: 50,
                backdropBlur: "5",
            }
        },
    },
},
```
