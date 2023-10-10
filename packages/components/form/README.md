# Form Component Theme

## Overview

The form component theme is a collection of Tailwindcss utilities that can be used to create form components with different colors, styles, and variants.

## Installation

To install the form component theme, run the following command:

```bash
npm install @tailus/themer-form
```

## Importation

To import the form component theme, you can use the following import:

```tsx
import { form } from "@tailus/themer-form";
```

## Variants

The form component theme provides two variants:

-   `outlined`: The default variant.
-   `soft`: A soft variant with rounded corners and lighter border colors.

## Customization

The following properties can be customized:

-   `light-border-color`
-   `dark-border-color`
-   `border-radius`
-   `light-bg`
-   `light-focus-bg`
-   `dark-bg`
-   `dark-focus-bg`

## Properties

The form component theme provides the following props:

-   `field`: The Tailwindcss utilities for the form field.
-   `message`: The Tailwindcss utilities for the form message. The message can have one of the following variants: `gray`, `warning`, or `danger`.
-   `input`: The Tailwindcss utilities for the form input.
-   `label`: The Tailwindcss utilities for the form label.
-   `textarea`: The Tailwindcss utilities for the form textarea.

### Sizes

The following sizes can added to the `input` and `textarea` components:

-   `xs`
-   `sm`
-   `md`
-   `lg`
-   `xl`

**Example**

```tsx
<input className={form.input.md} type="text" />
<textarea className={form.textarea.md} />
```

The following sizes can be added the the `label` component:

-   `sm`
-   `md`

**Example**

```tsx
<label className={form.label.md}>Label</label>
```

## Usage

To use the form component theme, simply add the appropriate Tailwindcss utilities property to the form element and its child elements. For example, to create a form with the outlined variant, you would import the `outlinedForm` variant from the package and add the `outlinedForm` object properties the form elements.

### Example

#### Radix UI

```tsx
import * as Form from "@radix-ui/react-form";
import { outlinedForm as form } from "@tailus/themer-form";
import { button } from "@tailus/themer-button";
import { card as cardTheme } from "@tailus/themer-card";

const FormUI = () => (
    <Form.Root className={cardTheme}>
        <div className="space-y-4">
            <Form.Field className={form.field} name="email">
                <Form.Label className={form.label.sm}>Email</Form.Label>
                <div className="space-y-1">
                    <Form.Control asChild>
                        <input className={form.input.sm} type="email" required />
                    </Form.Control>
                    <Form.Message className={form.message.warning} match="valueMissing">
                        Please enter your email
                    </Form.Message>
                    <Form.Message className={form.message.danger} match="typeMismatch">
                        Please provide a valid email
                    </Form.Message>
                </div>
            </Form.Field>
            <Form.Field className={form.field} name="question">
                <Form.Label className={form.label.sm}>Question</Form.Label>
                <div>
                    <Form.Control asChild>
                        <textarea className={form.textarea.sm} rows={3} required />
                    </Form.Control>
                    <Form.Message className={form.message.warning} match="valueMissing">
                        Please enter a question
                    </Form.Message>
                </div>
            </Form.Field>
            <Form.Submit asChild>
                <button className={button.primary.md + " w-full"}>
                    <span>Submit</span>
                </button>
            </Form.Submit>
        </div>
    </Form.Root>
);

export default FormUI;
```

## Customization

The following properties can be customized in the form component theme:

-   `borderRadius`
-   `lightBorderColor`
-   `darkBorderColor`
-   `lightBg` : Applied to the soft variant.
-   `lightFocusBg` : Applied to the soft variant.
-   `darkBg` : Applied to the soft variant.
-   `darkFocusBg` : Applied to the soft variant.

All these customizations are made in the `field` object.

```js
tailus: {
    components: {
        field: {
          rounded: "md",
          softBg: "100",
          softBgFocus: "50",
          borderColor: "300",
          dark: {
            softBg: "900",
            softBgFocus: "950",
            borderColor: "800",
          }
        },
    },
},
```
