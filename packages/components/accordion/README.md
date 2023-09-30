# Accordion Component Theme Documentation

## Overview

The accordion component theme is a collection of Tailwindcss utilities that can be used to create accordion components with different styles, and variants. Accordion components are used to display a list of content sections that can be expanded and collapsed individually.

## Installation

To install the accordion component theme, run the following command:

```bash
npm install @tailus/themer-accordion
```

## Importation

To import the accordion component theme, you can use the following import:

```tsx
import {
    accordion,
    outlinedAccordion,
    softAccordion,
    ghostAccordion,
    outlinedElevatedAccordion,
} from "@tailus/themer-accordion";
```

## Variants

The accordion component theme provides four variants:

-   `accordion` (default): The default variant.
-   `outlined`: An outlined variant with rounded corners and lighter border colors.
-   `soft`: A soft variant with rounded corners and lighter background colors.
-   `ghost`: A ghost variant with no borders or background colors.
-   `outlinedElevated`: An outlined variant with elevated borders.

## Reference

The accordion component theme contains the following properties:

```ts
accordion = {
    root: string;
    item: string;
    trigger: {
        parent: string;
        content: string;
        icon: string;
    };
    content: string;
};
```

-   `root`: The Tailwindcss utility for the root element of the accordion component.
-   `item`: The Tailwindcss utility for the accordion item.
-   `trigger`: An object containing the Tailwindcss utilities for the trigger element, which is used to expand and collapse the accordion item.
    -   `parent`: The Tailwindcss utility for the parent element of the trigger element.
    -   `content`: The Tailwindcss utility for the content of the trigger element.
    -   `icon`: The Tailwindcss utility for the icon of the trigger element.
-   `content`: The Tailwindcss utility for the content of the accordion item.

## Usage

To use the accordion component theme, simply import the appropriate variant and add the appropriate Tailwindcss utilities to the accordion element and its child elements. For example, to create a default accordion component, you would import the `accordion` variant and add its properties to the accordion element.

## Example

### Radix-UI

```tsx
import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { accordion as accordionTheme } from "@tailus/themer-accordion";

const AccordionUI = () => (
    <Accordion.Root
        className="w-full min-w-[28rem] max-w-md"
        type="single"
        defaultValue="item-1"
        collapsible
    >
        <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible? </AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
                Yes. It's unstyled by default, giving you freedom over the look and feel.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent>
                Yes! You can animate the Accordion with CSS or JavaScript.
            </AccordionContent>
        </AccordionItem>
    </Accordion.Root>
);

const AccordionItem = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Item
        className={classNames(accordionTheme.item, className)}
        {...props}
        ref={forwardedRef}
    >
        {children}
    </Accordion.Item>
));

const AccordionTrigger = React.forwardRef(
    ({ children, className, ...props }: any, forwardedRef) => (
        <Accordion.Header className="flex">
            <Accordion.Trigger
                className={classNames(accordionTheme.trigger.parent, className)}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <ChevronDownIcon
                    className={classNames(accordionTheme.trigger.icon, className)}
                    aria-hidden
                />
            </Accordion.Trigger>
        </Accordion.Header>
    )
);

const AccordionContent = React.forwardRef(
    ({ children, className, ...props }: any, forwardedRef) => (
        <Accordion.Content
            className={classNames(accordionTheme.content, className)}
            {...props}
            ref={forwardedRef}
        >
            <div className="pb-4">{children}</div>
        </Accordion.Content>
    )
);

export default AccordionUI;
```

## Customization

The accordion component theme can be customized using the config file. The following example shows how to customize the accordion component theme:

```js
// tailwind.config.js
tailus: {
    components: {
        accordion: {
            borderRadius: "xl",
            borderColor : "gray.200",
            borderHoverColor : "gray.300",
            background : "gray.100",
            backgroundHover : "gray.200",
            shadow : {
                size : "lg",
                opacity:"10"
            },
            dark : {
                borderColor : "gray.800",
                borderHoverColor : "gray.700",
                background : "gray.900",
                backgroundHover : "gray.800",
            }
        },
    },
},
```
