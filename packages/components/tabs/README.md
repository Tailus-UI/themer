# Tabs Theme

## Overview

The tabs component theme is a collection of Tailwindcss utilities that can be used to create tabs components with different colors, styles, and variants. Tabs components are used to allow users to navigate between different sections of content.

## Installation

To install the tabs component theme, run the following command:

```bash
npm install @tailus/themer-tabs
```

## Variants

The tabs component theme provides four variants:

-   `default`: The default tabs variant.
-   `outlined`: The outlined tabs variant.
-   `soft`: The soft tabs variant.
-   `bottomIndicator`: The bottom indicator tabs variant.

## Importation

To import the tabs component theme, you can use the following import:

```tsx
import { tabs } from "@tailus/themer-tabs";
import { outlinedTabs } from "@tailus/themer-tabs";
import { softTabs } from "@tailus/themer-tabs";
import { bottomIndicatorTabs } from "@tailus/themer-tabs";
```

## Object Structure

### Default variant

The object structure for the default variants is as follows:

```js
tabs: {
  list: {
    soft,
    outlined
  },
  indicator: {
    elevated,
    outlined
  },
  trigger: {
    parent,
    icon,
  },
  content,
}
```

### Bottom Indicator Variant

The object structure for the bottom indicator variants is as follows:

```js
tabs: {
  list,
  indicator,
  trigger: {
    parent,
    icon,
  },
  content,
}
```

### Soft and Outlined variants

The object structure for the soft and outlined variants is as follows:

```js
tabs: {
    list: {
        xs,
        sm,
        md,
        lg,
        xl,
        xxl,
        xxxl,
    },
    trigger: {
        parent: {
            primary,
            secondary,
            accent,
            gray,
            neutral,
        },
        icon: {
            xs,
            sm,
            md,
            lg,
            xl,
            xxl,
            xxxl,
        },
    },
    content,
}
```

## Usage

To use the tabs component theme, simply import the appropriate variant and add the appropriate variant object to the tabs element and its child elements. For example, to create a default tabs component, you would import the `tabs` variant and add the tabs object properties to the tabs element.

### Radix UI

```tsx
import * as Tabs from "@radix-ui/react-tabs";
import { tabs as tabsTheme } from "@tailus/themer-tabs";

function moveTabIndicator(): void {}

moveTabIndicator();

const TabsAppUI = () => (
    <Tabs.Root
        className="w-[22rem] flex flex-col"
        defaultValue="nike"
        onValueChange={moveTabIndicator}
    >
        <Tabs.List className={tabsTheme.list.soft + " w-max"} aria-label="stores" id="ecommerce">
            <span id="indicator" className={tabsTheme.indicator.elevated} aria-hidden="true"></span>
            <Tabs.Trigger className={tabsTheme.trigger.parent} value="nike">
                Nike
            </Tabs.Trigger>
            <Tabs.Trigger className={tabsTheme.trigger.parent} value="adidas">
                Adidas
            </Tabs.Trigger>
            <Tabs.Trigger className={tabsTheme.trigger.parent} value="puma">
                Puma
            </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className={tabsTheme.content} value="nike">
            Nike
        </Tabs.Content>
        <Tabs.Content className={tabsTheme.content} value="adidas">
            Adidas
        </Tabs.Content>
        <Tabs.Content className={tabsTheme.content} value="puma">
            Puma
        </Tabs.Content>
    </Tabs.Root>
);

export default TabsAppUI;
```

## Customization

The following properties can be customized for all variants:

-   `listBg`
-   `borderColor`
-   `rounded.list`
-   `rounded.softVariant`
-   `rounded.bottomIndicatorVariant`
-   `dark.borderColor`
-   `dark.listBg`
-   `dark.triggerBg`
-   `dark.indicatorBg`

```js
tailus: {
    components: {
        tabs: {
          borderColor: "200",
          listBg: "100",
          rounded: {
            list: "md",
            softVariant: "md",
            bottomIndicatorVariant: "md",
          },
          dark: {
            borderColor: "800",
            listBg: "800",
            triggerBg: "900",
            indicatorBg:"950"
          }
        }
    },
},
```
