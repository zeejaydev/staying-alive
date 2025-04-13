import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import Svg, { Circle } from 'react-native-svg';
import { createGlobalStyles } from '../theme/themes';

interface ReportWidgetProps {
  children?: React.ReactNode;
  title: string;
  backgroundColor: string;
  type: 'default' | 'bar' | 'pie';
  currentValue?: number;
  targetValue?: number;
  unit?: string;
  icon?: React.ReactNode; // Changed from Svg to ReactNode for flexibility
}

const createStyles = (theme: any, backgroundColor: string) => StyleSheet.create({
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
    width: '100%',
  },
  progressContainer: {
    width: '100%',
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  progressBarContainer: {
    width: '100%',
    height: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FFD700',
    borderRadius: 5,
  },
  pieContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
  },
  pieValue: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
  },
  pieUnit: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});

const ReportWidget: React.FC<ReportWidgetProps> = ({
  children, title, backgroundColor, type = 'default', currentValue, targetValue, unit, icon,
}) => {
  const { theme } = useTheme();
  const widgetStyles = createStyles(theme, backgroundColor);
  const styles = createGlobalStyles(theme);

  const renderContent = () => {
    if (type === 'bar') {
      if (currentValue === undefined || targetValue === undefined) {
        return null;
      }
      const progress = Math.min(currentValue / targetValue, 1);
      return (
        <View style={widgetStyles.progressContainer}>
          <Text style={widgetStyles.progressText}>{currentValue}/{targetValue}</Text>
          <View style={widgetStyles.progressBarContainer}>
            <View style={[widgetStyles.progressBar, { width: `${progress * 100}%` }]} />
          </View>
        </View>
      );
    }
    else if (type === 'pie') {
      if (currentValue === undefined || targetValue === undefined) {
        return null;
      }

      const progress = Math.min(currentValue / targetValue, 1);
      const size = 80;
      const strokeWidth = 10;
      const radius = (size - strokeWidth) / 2;
      const circumference = 2 * Math.PI * radius;
      const strokeDashoffset = circumference * (1 - progress);

      return (
        <View style={widgetStyles.pieContainer}>
          <Svg width={size} height={size}>
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="rgba(0, 0, 0, 0.1)"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#8A70D6"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              rotation="-90"
              origin={`${size / 2}, ${size / 2}`}
            />
          </Svg>
          <Text style={widgetStyles.pieValue}>
            {currentValue}{unit && <Text style={widgetStyles.pieUnit}>{unit}</Text>}
          </Text>
        </View>
      );
    }
    else {
      return children;
    }
  };

  return (
    <View style={widgetStyles.widgetContainer}>
      <View style={styles.widgetRow}>
        {icon && <View>{icon}</View>}
        <Text style={widgetStyles.title}>{title}</Text>
      </View>
      <View style={widgetStyles.contentContainer}>
        {renderContent()}
      </View>
    </View>
  );
};

export default ReportWidget;
