type LabelSizes = "xs" | "sm" | "md";
type InputSize = "xs" | "sm" | "md" | "lg" | "xl";
type InputVariant = "outlined" | "soft";
type InputVariants = {
    outlined: string;
    soft: string;
};

const baseInputSizes = {
    xs: "text-xs h-7 px-2",
    sm: "text-sm h-8 px-2.5",
    md: "text-base h-9 px-3",
    lg: "text-base h-10 px-3.5",
    xl: "text-base h-12 px-4",
};

const baseTextareaSizes = {
    xs: "text-xs py-1 px-2",
    sm: "text-sm py-1.5 px-2.5",
    md: "text-base py-2 px-3",
    lg: "text-base py-2.5 px-3.5",
    xl: "text-base py-3 px-4",
};

const baseLabelSizes = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
};

/**
 * Creates a string containing tailwindcss utilities for an input element with the specified size and variant.
 *
 * @param size The size of the input element. Can be one of the following values:
 *     * `xs`
 *     * `sm`
 *     * `md`
 *     * `lg`
 *     * `xl`
 * @param variants The object containing the variants of the input element.
 *
 * @param variant The variant of the input element. Can be one of the following values:
 *     * `outlined` (default)
 *     * `soft`
 *
 * @returns Tailwindcss utilities for the input element.
 */
function getInput(
    size: InputSize,
    sizes: Record<InputSize, string> = baseInputSizes,
    variants: InputVariants,
    variant: InputVariant = "outlined"
): string {
    return variants[variant] + " " + sizes[size];
}

/**
 * Creates a string containing tailwindcss utilities for a label element with the specified size.
 *
 * @param label The label element.
 * @param size The size of the label element. Can be one of the following values:
 *    * `xs`
 *   * `sm`
 *  * `md`
 * @returns Tailwindcss utilities for the label element.
 */

function getLabel(label: string, size: LabelSizes): string {
    return label + " " + baseLabelSizes[size];
}

export { getInput, InputSize, getLabel, baseTextareaSizes, baseInputSizes };
