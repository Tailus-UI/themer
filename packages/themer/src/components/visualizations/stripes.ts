import { tv } from 'tailwind-variants';

export const stripes = tv({
    variants: {
        intent: {
            primary: 'var(--dv-primary)',
            secondary: 'var(--dv-secondary)',
            accent: 'var(--dv-accent)',
            info: 'var(--dv-info)',
            sucess: 'var(--dv-sucess)',
            danger: 'var(--dv-danger)',
            warning: 'var(--dv-warning)',
            gray: 'var(--dv-gray)',
            neutral: 'var(--dv-neutral)'
        }
    },
    defaultVariants: {
        intent: 'primary'
    }
});

export type StripesIntent = keyof typeof stripes.variants.intent;