import { createStitches } from '@stitches/react';

export const { styled, getCssText, globalCss } = createStitches({
    prefix: 'ms',
    theme: {
        colors: {
            azul: '#2563EB',
            azul_60: 'rgba(37, 99, 235, 0.6)',
            azul_30: 'rgba(37, 99, 235, 0.3)',
            lovelyPurple: '#7C3AED',
            lovelyPurple_60: 'rgba(124, 58, 237, 0.6)',
            lovelyPurple_30: 'rgba(124, 58, 237, 0.3)',
            pinkLemonade: '#DB2777',
            pinkLemonade_60: 'rgba(219, 39, 119, 0.6)',
            pinkLemonade_30: 'rgba(219, 39, 119, 0.3)',
            white: '#FFFFFF',
            black: '#000000',
            sucess: '#10B981',
            danger: '#EF4444',
        },
        fontSizes: {
            1: '0.75rem',
            2: '0.875rem',
            3: '1rem',
            4: '1.125rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.875rem',
            8: '2.25rem',
            9: '3rem',
        },
        borderRadius: {
            md: '6px',
            lg: '8px',
            xl: '12px'
        },
        borderWidths: {
            1: '1px',
            2: '2px',
            3: '3px',
        },
        fonts: {
            system: "system-ui"
        },
    }
});

