import plugin from 'tailwindcss/plugin';

export const content = ['./src/**/*.{html,js}'];
export const theme = {
  extend: {},
};
export const plugins = [
  require('tailwindcss-animate'), // Ensure this line is included
];