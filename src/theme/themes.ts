import { StyleSheet } from 'react-native';

export type LightTheme = {
    colors: {
        text: string;
        background: string;
        primary: string;
        secondary: string;
        todaysPointsWidget: string;
        weeklyPointsWidget: string;
        stepsWidget: string;
        waterWidget: string;
        sleepWidget: string;
        trainingTimeWidget: string;
        activeCaloriesWidget: string;
        targetCaloriesWidget: string;
        proteinWidget: string;
        carbsWidget: string;
        fatWidget: string;
        reportWidgetTitle: string;
    };
}

export type DarkTheme = {
    colors: {
        text: string;
        background: string;
        primary: string;
        secondary: string;
        todaysPointsWidget: string;
        weeklyPointsWidget: string;
        stepsWidget: string;
        waterWidget: string;
        sleepWidget: string;
        trainingTimeWidget: string;
        activeCaloriesWidget: string;
        targetCaloriesWidget: string;
        proteinWidget: string;
        carbsWidget: string;
        fatWidget: string;
        reportWidgetTitle: string;
    };
}

export const lightTheme: LightTheme = {
    colors: {
        text: '#000000',
        background: '#ffffff',
        primary: '#007bff',
        secondary: '#6c757d',
        todaysPointsWidget: '#D5FBFF',
        weeklyPointsWidget: '#E9FFD3',
        stepsWidget: '#FFE8C6',
        waterWidget: '#D8E6EC',
        sleepWidget: '#EFE2FF',
        trainingTimeWidget: '#EAECFF',
        activeCaloriesWidget: '#FFF8C6',
        targetCaloriesWidget: '#FFD7D8',
        proteinWidget: '#D5FFAB',
        carbsWidget: '#C0F5FF',
        fatWidget: '#F4DEF1',
        reportWidgetTitle: 'rgba(25, 33, 38, 0.5)',
    },
};

export const darkTheme: DarkTheme = {
    colors: {
        text: '#FFFFFF',
        primary: '#1E88E5',
        background: '#121212',
        secondary: '#B0BEC5',
        todaysPointsWidget: '',
        weeklyPointsWidget: '',
        stepsWidget: '',
        waterWidget: '',
        sleepWidget: '',
        trainingTimeWidget: '',
        activeCaloriesWidget: '',
        targetCaloriesWidget: '',
        proteinWidget: '',
        carbsWidget: '',
        fatWidget: '',
        reportWidgetTitle: '',
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
    widgetRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
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
};
