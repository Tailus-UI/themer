# Tooltip Theme

## Overview

The tooltip component theme is a collection of Tailwindcss utilities that can be used to create tooltips with a single variant. Tooltips are small boxes that appear when a user hovers over an element to provide additional information.

## Installation

To install the tooltip component theme, run the following command:

```terminal
npm install @tailus/themer-tooltip
```

## Importation

To import the tooltip component theme, you can use the following import:

```tsx
import { tooltip } from "@tailus/themer-tooltip";
```

## Properties

The tooltip object contains the following properties:

-   `content`: The Tailwindcss utilities for the content of the tooltip.
-   `arrow`: The Tailwindcss utilities for the arrow of the tooltip.

# Customization

The following property can be customized:

-   border radius

You can use the `extend` section of your Tailwind CSS config file to customize the tooltip component theme. For example, to add a new border radius to the tooltip component theme, you would add the following code to your `tailwind.config.js` file:

```javascript
tailus: {
    components: {
        tooltip: {
            borderRadius: "md",
        },
    },
},
```

## Usage

To use the tooltip component theme, simply add the appropriate theme object properties to the tooltip element and its child elements.

### Radix UI

```tsx
import * as Tooltip from "@radix-ui/react-tooltip";
import { tooltip as theme } from "@tailus/themer-tooltip";
import { ArchiveIcon } from "@radix-ui/react-icons";
import { iconButton as buttonTheme } from "@tailus/themer-button";

const TooltipArrow = () => {
    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <button className={buttonTheme.warning.md}>
                        <span className="sr-only">Archive</span>
                        <ArchiveIcon className={buttonTheme.icon.md} aria-hidden />
                    </button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className={theme.content} sideOffset={4}>
                        Archive
                        <Tooltip.Arrow className={theme.arrow} />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

export default TooltipArrow;
```
