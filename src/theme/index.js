"use client"
import { createTheme } from '@mui/material';
import ComponentsOverrides from './overrides';
// Override component styles
const theme = createTheme({
});

theme.components = { ...theme.components, ...ComponentsOverrides(theme) };

export default theme;