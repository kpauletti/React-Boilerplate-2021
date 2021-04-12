import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        background: {
            default: '#f8f8f8'
        },
        type: 'light',
        primary: {
            main: '#b0bec5',
            light: '#e2f1f8',
            dark: '#808e95'
        },
        secondary: {
            main: '#03a9f4',
            light: '#67daff',
            dark: '#007ac1'
        }
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none'
            }
        }
    }
});
