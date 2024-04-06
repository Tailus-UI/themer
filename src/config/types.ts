type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc["length"]]>;

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;
type HexColor = `#${string & { length: 6 }}`;
type ShadeStrings =
    | "50"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "950";

type PaddingStrings =
    | "1"
    | "1.5"
    | "2"
    | "2.5"
    | "3"
    | "3.5"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "12"
    | "14"
    | "16";

type BlurStrings = "0" | "0.25" | "0.5" | "0.75" | "1" | "1.5" | "2" | "3" | "4" | "5" | "8" | "10";
type BlurNumbers = 0 | 0.25 | 0.5 | 0.75 | 1 | 1.5 | 2 | 3 | 4 | 5 | 8 | 10;
type PaddingNumbers = 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | 16;
type ShadeNumbers = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

type nSpacing = "-px" | "-0.5" | "-1" | "-1.5" | "-2";
type pSpacing = "px" | "0" | "0.5" | "1" | "1.5" | "2";

export type Sizes = "none" | "DEFAULT" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
export type SizesWithoutFull = "none" | "DEFAULT" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export type ShadowSizes = "none" | "default" | "sm" | "md" | "lg" | "xl" | "xxl" | "none";
export type Opacity = IntRange<1, 100>;
export type Shade = ShadeStrings | ShadeNumbers;
export type AvatarStatusInset = nSpacing | pSpacing;
export type ButtonBorderWidth = "0" | "1.5" | "2" | "2.5";
export type PaddingSizes = PaddingStrings | PaddingNumbers;
export type BlurSizes = BlurStrings | BlurNumbers;

export type Intent =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "accent"
    | "gray"
    | "info";

export type Color =
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose"
    | "stone"
    | "neutral"
    | "zinc"
    | "gray"
    | "slate"
    | "greenish"
    | "indigray"
    | "cyanish";
export type Gray = Extract<
    Color,
    "stone" | "neutral" | "zinc" | "gray" | "slate" | "greenish" | "indigray" | "cyanish"
>;
export type Success = Extract<Color, "lime" | "green" | "emerald" | "teal">;
export type Warning = Extract<Color, "amber" | "yellow">;
export type Danger = Extract<Color, "red" | "rose">;
export type Info = Extract<Color, "cyan" | "sky" | "blue">;
export type ColorShades = {
    50: HexColor;
    100: HexColor;
    200: HexColor;
    300: HexColor;
    400: HexColor;
    500: HexColor;
    600: HexColor;
    700: HexColor;
    800: HexColor;
    900: HexColor;
    950: HexColor;
};
