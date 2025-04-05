import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

interface ReportWidgetProps {
  children: React.ReactNode;
  title: string;
  backgroundColor: string;
}

const ReportWidget: React.FC<ReportWidgetProps> = ({ children, title, backgroundColor }) => {
  const { theme } = useTheme();
  const widgetStyles = StyleSheet.create({
    widgetContainer: {
      backgroundColor,
      borderRadius: 10,
      padding: 15,
      marginVertical: 8,
      marginHorizontal: 10,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'rgba(25, 33, 38, 0.1)',
    },
    title: {
      fontSize: 16,
      marginBottom: 8,
      color: theme.colors.reportWidgetTitle,
    },
    contentContainer: {
      alignItems: 'center',
    },
  });

  return (
    <View style={widgetStyles.widgetContainer}>
      {title && <Text style={widgetStyles.title}>{title}</Text>}
      <View style={widgetStyles.contentContainer}>{children}</View>
    </View>
  );
};

export default ReportWidget;
