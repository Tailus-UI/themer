# Popover Theme

## Overview

The popover component theme is a collection of Tailwindcss utilities that can be used to create popover components with a single variant. Popover components are modal windows that appear in front of app content to provide critical information or ask for a decision.

## Installation

To install the popover component theme, run the following command:

```bash
npm install @tailus/themer-popover
```

## Importation

To import the popover component theme, you can use the following import:

```tsx
import { popover } from "@tailus/themer-popover";
```

## Properties

The popover object contains the following properties:

-   `content`: The Tailwindcss utility for the content of the popover.
-   `arrow`: The Tailwindcss utility for the arrow of the popover.
-   `title`: The Tailwindcss utility for the title of the popover.
-   `description`: The Tailwindcss utility for the description of the popover.
-   `close`: The Tailwindcss utility to add to the close button of the popover.

## Example

### Radix UI

```tsx
import * as Popover from "@radix-ui/react-popover";
import { InfoCircledIcon, Cross2Icon } from "@radix-ui/react-icons";
import { popover } from "@tailus/themer-popover";
import { softIconButton, ghostIconButton } from "@tailus/themer-button";

const PopoverUI = () => (
    <Popover.Root>
        <Popover.Trigger>
            <button className={softIconButton.gray.md}>
                <span className="sr-only">Learn more</span>
                <InfoCircledIcon className={softIconButton.icon.md} />
            </button>
        </Popover.Trigger>
        <Popover.Portal>
            <Popover.Content className={popover.content}>
                <div className={popover.title}>Title</div>
                <p className={popover.description}>
                    Inventore perspiciatis atque consequatur? Autem reiciendis nemo error, rerum
                    tempora.
                </p>
                <Popover.Close asChild>
                    <button className={ghostIconButton.gray.md + " !absolute top-1 right-1"}>
                        <span className="sr-only">Dismiss dialog</span>
                        <Cross2Icon className={ghostIconButton.icon.md} aria-hidden />
                    </button>
                </Popover.Close>
            </Popover.Content>
        </Popover.Portal>
    </Popover.Root>
);

export default PopoverUI;
```

## Customization

The following properties can be customized:

-   border radius
-   padding

```js
tailus: {
    components: {
        popover: {
            rounded : "md",
            padding : "4",
        },
    },
},

```

Customization that will be applied to other components (menu components):

-   light border color
-   dark border color
-   dark bg
-   shadow size
-   shadow opacity

```js
tailus: {
    components: {
        menu: {
            borderRadius: "md",
            borderColor : "200",
            shadow : {
                size : "lg",
                opacity : "10"
            },
            dark : {
                borderColor : "800",
                background : "950",
            }
        }
    },
},

```
