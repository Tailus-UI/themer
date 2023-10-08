# Checkbox Component Theme

## Overview

The checkbox component theme is a collection of Tailwind CSS utilities that can be used to create checkboxes with different variants. Checkboxes are used to allow users to select one or more options from a list.

## Installation

To install the checkbox component theme, run the following command:

```bash
npm install @tailus/themer-checkbox
```

## Importation

To import the checkbox component theme, you can use the following import:

```tsx
import { checkbox, ringVariant } from "@tailus/themer-checkbox";
```

## Variants

The checkbox component theme provides two variants:

-   `checkbox` (default): The default variant.
-   `ringVariant`: A variant with a ring around the indicator.

## Props

The checkbox component theme object contains the following properties:

-   `root`: The Tailwind CSS utilities for the root element of the checkbox component.
-   `indicator`: The Tailwind CSS utilities for the indicator element of the checkbox component.
-   `label`: The Tailwind CSS utilities for the label element of the checkbox component.

## Usage

To use the checkbox component theme, simply import the appropriate variant and add its props to the checkbox element and its child elements. For example, to create a default checkbox component, you would import the `checkbox` variant and add its props to the checkbox element.

### Example (Radix UI)

```tsx
import * as Checkbox from "@radix-ui/react-checkbox";
import { checkbox as theme } from "@tailus/themer-checkbox";

const CheckboxUI = () => (
    <form>
        <Checkbox.Root className={theme.root}>
            <Checkbox.Indicator className={theme.indicator}>// your icon here</Checkbox.Indicator>
            <Checkbox.Label className={theme.label}>Checkbox label</Checkbox.Label>
        </Checkbox.Root>
    </form>
);

export default CheckboxUI;
```

## RingVariant

To create a ring variant checkbox, you would import the `ringVariant` variant and add its props to the checkbox element.

```tsx
import * as Checkbox from "@radix-ui/react-checkbox";
import { ringVariant as theme } from "@tailus/themer-checkbox";

const CheckboxUI = () => (
    <form>
        <Checkbox.Root className={theme.root}>
            <Checkbox.Indicator className={theme.indicator}>// your icon here</Checkbox.Indicator>
            <Checkbox.Label className={theme.label}>Checkbox label</Checkbox.Label>
        </Checkbox.Root>
    </form>
);

export default CheckboxUI;
```

**Note:** The checkbox is only available for the primary color and There is no customization available for the checkbox component theme at this time.
