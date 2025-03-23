import { StyleSheet } from 'react-native';

export type LightTheme = {
    colors: {
        text: string;
        background: string;
        primary: string;
        secondary: string;
    };
}

export type DarkTheme = {
    colors: {
        text: string;
        background: string;
        primary: string;
        secondary: string;
    };
}

export const lightTheme: LightTheme = {
    colors: {
        text: '#000000',
        background: '#ffffff',
        primary: '#007bff',
        secondary: '#6c757d',
    },
};

export const darkTheme: DarkTheme = {
    colors: {
        text: '#FFFFFF',
        primary: '#1E88E5',
        background: '#121212',
        secondary: '#B0BEC5',
    },
};

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export const createGlobalStyles = (theme = lightTheme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 16,
    },
    text: {
        fontSize: 18,
        color: theme.colors.text,
    },
    button: {
        backgroundColor: theme.colors.primary,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export const themeSizes = {
    textSmall: 12,
    textMedium: 14,
    titleSmall: 16,
    titleMedium: 18,
    titleLarge: 20,
    titleDisplay: 24,
    buttonHeight: 56,
    buttonBorderRadius: 32,
}