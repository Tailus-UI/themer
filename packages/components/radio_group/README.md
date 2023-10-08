# Radio Group Component Theme

## Overview

The radio group component theme is a collection of Tailwind CSS utilities that can be used to create radio groups with different variants. Radio groups are used to allow users to select a single option from a list.

## Installation

To install the radio group component theme, run the following command:

```bash
npm install @tailus/themer-radio-group
```

## Importation

To import the radio group component theme, you can use the following import:

```tsx
import { radioGroup, shadowVariant } from "@tailus/themer-radio-group";
```

## Variants

The radio group component theme provides two variants:

-   `Default` (default): The default variant.
-   `ShadowVariant`: A variant with an inner shadow.

## Props

The radio group component theme object contains the following properties:

-   `root`: The Tailwind CSS utilities for the root element of the radio group component.
-   `indicator`: The Tailwind CSS utilities for the indicator element of the radio group component.
-   `label`: The Tailwind CSS utilities for the label element of the radio group component.

## Usage

To use the radio group component theme, simply import the appropriate variant and add its properties to the radio group element and its child elements. For example, to create a default radio group component, you would import the `radioGroup` variant and add its properties to the radio group element.

### Example (Radix UI)

```tsx
import * as RadioGroup from "@radix-ui/react-radio-group";
import { radioGroup as radioTheme } from "@tailus/themer-radio-group";

const RadioGroupUI = () => (
    <form>
        <RadioGroup.Root
            className="flex flex-col gap-2.5"
            defaultValue="problem"
            aria-label="View density"
        >
            <div className="flex items-center">
                <RadioGroup.Item className={radioTheme.item} value="understanding" id="rr1">
                    <RadioGroup.Indicator className={radioTheme.indicator} />
                </RadioGroup.Item>
                <label className={radioTheme.label} htmlFor="rr1">
                    Easy to understand
                </label>
            </div>
            <div className="flex items-center">
                <RadioGroup.Item className={radioTheme.item} value="problem" id="rr2">
                    <RadioGroup.Indicator className={radioTheme.indicator} />
                </RadioGroup.Item>
                <label className={radioTheme.label} htmlFor="rr2">
                    Solved my problem
                </label>
            </div>
            <div className="flex items-center">
                <RadioGroup.Item className={radioTheme.item} value="other" id="rr3">
                    <RadioGroup.Indicator className={radioTheme.indicator} />
                </RadioGroup.Item>
                <label className={radioTheme.label} htmlFor="rr3">
                    Other
                </label>
            </div>
        </RadioGroup.Root>
    </form>
);

export default RadioGroupUI;
```

## ShadowVariant

To create a shadow variant radio group, you would import the `shadowVariant` variant and add its properties to the radio group element.

```tsx
import * as RadioGroup from "@radix-ui/react-radio-group";
import { shadowVariant as radioTheme } from "@tailus/themer-radio-group";

const RadioGroupShadowVariant = () => (
    <form>
        <RadioGroup.Root
            className="flex flex-col gap-2.5"
            defaultValue="understanding"
            aria-label="View density"
        >
            <div className="flex items-center">
                <RadioGroup.Item className={radioTheme.item} value="understanding" id="srr1">
                    <RadioGroup.Indicator className={radioTheme.indicator} />
                </RadioGroup.Item>
                <label className={radioTheme.label} htmlFor="srr1">
                    Easy to understand
                </label>
            </div>
            <div className="flex items-center">
                <RadioGroup.Item className={radioTheme.item} value="problem" id="srr2">
                    <RadioGroup.Indicator className={radioTheme.indicator} />
                </RadioGroup.Item>
                <label className={radioTheme.label} htmlFor="srr2">
                    Solved my problem
                </label>
            </div>
            <div className="flex items-center">
                <RadioGroup.Item className={radioTheme.item} value="other" id="srr3">
                    <RadioGroup.Indicator className={radioTheme.indicator} />
                </RadioGroup.Item>
                <label className={radioTheme.label} htmlFor="srr3">
                    Other
                </label>
            </div>
        </RadioGroup.Root>
    </form>
);

export default RadioGroupShadowVariant;
```

**Note:** There is no customization available for the radio group component theme at this time.
