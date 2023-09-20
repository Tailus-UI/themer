# Select Component Theme

## Overview

The select component theme is a collection of Tailwindcss utilities that can be used to create select components with different colors and styles. Select components are used to allow users to select a single value from a list of values.

Installation

To install the select component theme, run the following command:

`npm install @tailus/themer-select`

## Import

To import the select component theme, you can use the following import:

```
import { select } from "@tailus/themer-select";
```

## Example

### Radix UI

```
import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import {select as selectTheme} from "@tailus/themer-select"

const SelectUI = () => (
    <Select.Root>
        <Select.Trigger className={formTheme.input} aria-label="Food">
            <Select.Value placeholder="Select a fruit…" />
            <Select.Icon>
                <ChevronDownIcon className={formTheme.input.icon} />
            </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
            <Select.Content className={selectTheme.content}>
                <Select.ScrollUpButton className={selectTheme.scrollButton}>
                    <ChevronUpIcon />
                </Select.ScrollUpButton>
                <Select.Viewport className={selectTheme.viewport}>
                    <Select.Group>
                        <Select.Label className={selectTheme.label}>Fruits</Select.Label>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </Select.Group>

                    <Select.Separator className={selectTheme.separator} />

                    <Select.Group>
                        <Select.Label className={selectTheme.label}>Vegetables</Select.Label>
                        <SelectItem value="aubergine">Aubergine</SelectItem>
                        <SelectItem value="broccoli">Broccoli</SelectItem>
                        <SelectItem value="carrot" disabled>
                            Carrot
                        </SelectItem>
                        <SelectItem value="courgette">Courgette</SelectItem>
                        <SelectItem value="leek">Leek</SelectItem>
                    </Select.Group>

                    <Select.Separator className={selectTheme.separator} />

                    <Select.Group>
                        <Select.Label className={selectTheme.label}>Meat</Select.Label>
                        <SelectItem value="beef">Beef</SelectItem>
                        <SelectItem value="chicken">Chicken</SelectItem>
                        <SelectItem value="lamb">Lamb</SelectItem>
                        <SelectItem value="pork">Pork</SelectItem>
                    </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton className={selectTheme.scrollButton}>
                    <ChevronDownIcon />
                </Select.ScrollDownButton>
            </Select.Content>
        </Select.Portal>
    </Select.Root>
);

const SelectItem = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => {
    return (
        <Select.Item className={classnames(selectTheme.item, className)} {...props} ref={forwardedRef}>
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className={selectTheme.itemIndicator}>
                <CheckIcon />
            </Select.ItemIndicator>
        </Select.Item>
    );
});

export default SelectUI;

```

## Properties

The select object contains the following properties:

-   `viewport`: The Tailwindcss utility for the viewport of the select component.
-   `content`: The Tailwindcss utility for the content of the select component.
-   `scrollButton`: The Tailwindcss utility for the scroll buttons of the select component.
-   `item`: The Tailwindcss utility for the items in the select component.
-   `itemIndicator`: The Tailwindcss utility for the item indicator in the select component.
-   `separator`: The Tailwindcss utility for the separators between items in the select component.
-   `label`: The Tailwindcss utility for the label of a select fieldset.
-   `triggerIcon`: The Tailwindcss utility for the trigger icon of the select component.

## Customization

Following properties can be customized :

-   dark background : background ont dark theme
-   shadow : same as all `menu` component (context and dropdown),
-   light border color : same as all `menu` component (context and dropdown),
-   dark border color : same as all `menu` component (context and dropdown),

```
tailus: {
    components: {
        flag: {
            darkBackground : "",
        },
    },
},
```
