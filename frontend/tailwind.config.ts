import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // Primary color to be used with primary CTA buttons
      'primary': {
        // 50 for BG of Secondary BTN on hover
        50: '#fff4e6',
        // 100 for Disabled class on primary btns
        100: '#ffdcb0',
        // 200 as the border color of Focused class on primary btns
        200: '#ffcb8a',
        // 300 for Hover class on primary btns
        300: '#ffb355',
        // 500 is the default primary color
        DEFAULT: '#ff8e01',
        // 600 for Active class on primary btns
        600: '#e88101',
      },
      // Secondary color to be used for "add", "bookmark" and "scroll up" buttons
      'secondary': {
        // 100 for Disabled class on btns
        100: '#e6edfa',
        // 200 as the border color of Focused class on btns
        200: '#dae5f8',
        // 300 for Hover class on btns
        300: '#c9d9f5',
        // 500 is the default secondary color
        DEFAULT: '#afc6f0',
        // 700 for Active class on btns
        700: '#7c8daa',
      },
      // Neutral color to be used on header/footer bg as well as edit, user dashboard and menu icons
      'neutral': {
        // 200 as the border color of Focused class on edit btns
        200: '#f0f4f5',
        // 400 is the default neutral color
        DEFAULT: '#e5ebed',
        // 500 as bg for pencil within edit btn on Active class
        500: '#dfe6e9',
        // 600 as bg for edit btn on Hover and Active classes
        600: '#cbd1d4',
      },
      // Error color to be used for delete btn icons
      'error': {
        // 100 for Disabled class on delete btns
        100: '#fdd3d0',
        // 200 as the border color of Focused class on delete btns
        200: '#fcbdb9',
        // 300 for Hover class on delete btns
        300: '#fb9f98',
        // 600 is the default error color
        DEFAULT: '#e3665d',
        // 700 for Active class on delete btns
        700: '#b15048',
      },
      // Success color to be used for the checked checkboxes on the user's task list items within the dropdown
      'success': {
        // 200 is the default success color
        DEFAULT: '#a1ecc6',
        // 600 as the border color of the checked checkbox
        600: '#2ec277',
      },
      // Background is the default bg color of the site
      'background': {
        // 400 is the default background color
        DEFAULT: '#f9f8f3',
      },
      // Black to be used as default text color
      'black': {
        // 200 for the non-selected tertiary btn within the followers page
        // also used for border color of edit btn's Focused class and icon of Disabled class
        200: '#8a8a8a',
        // 400 is the default black color
        DEFAULT: '#333333',
      },
      // White to be used as color on elements and icons with dark bg such as the delete icon
      'white': {
        // 400 is the default white color
        DEFAULT: '#ffffff',
      },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-nunito)"],
        body: ["var(--font-open-sans)"],
      },
      fontSize: {
        'display2XL': ['72px', {
          lineHeight: '90px',
          letterSpacing: '-2%',
        }],
        'displayXL': ['60px', {
          lineHeight: '72px',
          letterSpacing: '-2%',
        }],
        'displayLG': ['48px', {
          lineHeight: '60px',
          letterSpacing: '-2%',
        }],
        'displayMD': ['36px', {
          lineHeight: '44px',
          letterSpacing: '-2%',
        }],
        'displaySM': ['30px', {
          lineHeight: '38px',
        }],
        'displayXS': ['24px', {
          lineHeight: '32px',
        }],
        'bodyXL': ['20px', {
          lineHeight: '30px',
        }],
        'bodyLG': ['18px', {
          lineHeight: '28px',
        }],
        'bodyMD': ['16px', {
          lineHeight: '24px',
        }],
        'bodySM': ['14px', {
          lineHeight: '20px',
        }],
        'bodyXS': ['12px', {
          lineHeight: '18px',
        }],
      },
      gridTemplateColumns: {
        // The base 4 column grid to be used to format all pages
        'base': 'repeat(4, minmax(0, 1fr))',
      },
      gap: {
        // The base gap for the 12 column grid on all pages
        'base': '4px',
      },
      borderRadius: {
        // Border radius for images
        'img': '8px',
        // Border radius for buttons, input fields and card elements
        'base': '20px',
        // Specific border radius for the burger menu
        'menu-rounded': '0px 0px 0px 20px',
        // Border radius for avatar images
        'profile': '9999px',
      },
      borderColor: {
        // Specific border colors of component elements
        // "Neumorphic" are the elements which look pressable
        'neumorphic': '#E5EBED',
        // Used with the dropdown task items which are editable within the user task lists
        'task-edit': '#F9F8F3',
        // Used with the checked checkboxes within the user task list
        'checked': '#2EC277',
        // Used with the empty checkboxes within the user task list
        'unchecked': '#333333',
        // Used for the secondary buttons
        'primary-btn': '#ff8e01',
      },
      spacing: {
        // All set to pexels for clarity
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '56px',
        '4xl': '64px',
        'sm-btn': '30px',
        'md-btn': '40px',
      },
      height: {
        // Custom height for the burger menu
        'burger-menu': '70vh',
      },
      width: {
        // Custom height for the burger menu
        'burger-menu': '60vw',
      },
    },
  },
  plugins: [],
};

export default config;
