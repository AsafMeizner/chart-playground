# Graph Examples Project

This project demonstrates various types of graphs using React and Recharts. It includes examples for area, line, bar, pie, and radar charts, showcasing how to configure and customize them.

## Table of Contents
- [Features](#features)
- [Graph Types](#graph-types)
- [Customization Options](#customization-options)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)

## Features
- Responsive Design: Graphs automatically adjust to different screen sizes for optimal viewing on any device.
- Extensive Customization: Tailor each graph type with a variety of options to suit your data visualization needs.
- Interactive Tooltips: Hover over data points to explore detailed information interactively.
- Legends: Easily identify data series through dynamic legends.

## Graph Types
1. **Area Chart**:
   - **Cumulative Data Visualization**: Shows the cumulative value of data points over time or categories, providing a clear view of trends and changes.
   - **Stacked Areas**: Can be configured to display multiple data series stacked on top of each other, making it easy to compare contributions.
   - **Interactive Tooltips**: Provides detailed information about data points when hovered over, enhancing data exploration.

2. **Line Chart**:
   - **Trend Analysis**: Connects data points with straight lines to illustrate trends over time, making it suitable for time-series data.
   - **Multiple Series**: Supports multiple lines for comparing different data sets within the same chart.
   - **Customizable Dots**: Allows for the inclusion of customizable dots at each data point, enhancing visibility.

3. **Bar Chart**:
   - **Comparative Visualization**: Uses rectangular bars to represent different groups, making it easy to compare values across categories.
   - **Orientation Options**: Supports both vertical and horizontal orientations to suit different data presentation needs.
   - **Data Labels**: Can display data values on top of each bar for quick reference, aiding in data interpretation.

4. **Pie Chart**:
   - **Proportional Representation**: Displays data in a circular format, with slices representing proportions of the whole, providing a visual breakdown of components.
   - **Dynamic Legends**: Includes legends that help identify each slice, enhancing clarity and understanding of data distribution.
   - **Customization Options**: Allows for customization of colors, outlines, and tooltip content for better visual appeal.

5. **Radar Chart**:
   - **Multivariate Comparison**: Visualizes multivariate data with a polygonal shape, making it easy to compare multiple items across different metrics.
   - **Custom Labels**: Supports custom labeling of axes for improved readability and context.
   - **Grid Options**: Offers options for grid type (polygon or circle) and visibility, allowing for a tailored visual experience.
   
## Customization Options

### 1. Line Graph
```javascript
export const lineGraphConfig = {
    data: [
        { x: 1, lineA: 50, lineB: 30, lineC: 200 },
        { x: 2, lineA: 20, lineB: 100, lineC: 230 },
        { x: 3, lineA: 150, lineB: 100, lineC: 50 },
        { x: 4, lineA: 200, lineB: 280, lineC: 100 },
        { x: 5, lineA: 40, lineB: 200, lineC: 130 },
    ],
    lines: [
        {
            key: 'lineA',
            label: 'Line A',
            color: '#8884d8',
            showDots: true,
            dotColor: '#5854d8',
            showDotLabels: true,
            linear: true,
        },
        {
            key: 'lineB',
            label: 'Line B',
            color: '#82ca9d',
            showDots: true,
            dotColor: '#52ca6d',
            showDotLabels: true,
            step: true,
        },
        {
            key: 'lineC',
            label: 'Line C',
            color: '#ffc658',
            showDots: true,
            dotColor: '#ffc328',
            showDotLabels: true,
            smooth: true,
        },
    ],
    chartSettings: {
        showGridlines: true,
        gridlineColor: '#444444',
        strokeWidth: 2,
    },
    xKey: 'x',
    yAxisLabel: 'Value',
    xAxisLabel: 'X-Axis',
    yAxisMin: 0,
    yAxisMax: 300,
    showTooltip: true,
    tooltipSettings: {
        backgroundColor: '#333333',
        borderRadius: '8px',
        fontSize: '14px',
        textColor: '#ffffff',
        cursorColor: 'rgba(255, 255, 255, 0.1)',
    },
    showLegend: true,
    legendPosition: 'top',
    responsive: true,
    maintainAspectRatio: true,
    width: 800,
    height: 500,
    title: 'Line Chart Example',
    fontSettings: {
        titleFontSize: 24,
        axisLabelFontSize: 18,
        axisTickFontSize: 16,
        legendFontSize: 16,
        tooltipFontSize: 14,
        dataLabelFontSize: 14,
        defaultLabelColor: '#ffffff',
    },
    margin: { top: 20, right: 20, left: 20, bottom: 20 },
};
```
### 2. Area Graph
```javascript
export const areaGraphConfig = {
    data: [
        { team: 1, scoreTypeA: 90, scoreTypeB: 60, scoreTypeC: 85 },
        { team: 2, scoreTypeA: 70, scoreTypeB: 75, scoreTypeC: 80 },
        { team: 3, scoreTypeA: 95, scoreTypeB: 90, scoreTypeC: 70 },
        { team: 4, scoreTypeA: 88, scoreTypeB: 40, scoreTypeC: 92 },
    ],
    scoringTypes: [
        {
            key: 'scoreTypeA',
            label: 'Type A',
            color: '#1abc9c',
            stacked: true,
            stackInFront: false,
            outlineColor: '#ffffff',
            outlineWidth: 1,
            outlineType: 'solid',
            labelColor: '#ffffff',
        },
        {
            key: 'scoreTypeB',
            label: 'Type B',
            color: '#3498db',
            stacked: true,
            stackInFront: true,
            outlineColor: '#ff0000',
            outlineWidth: 2,
            outlineType: 'dashed',
            labelColor: '#ffffff',
        },
        {
            key: 'scoreTypeC',
            label: 'Type C',
            color: '#e74c3c',
            stacked: true,
            stackInFront: true,
            outlineColor: '#ffffff',
            outlineWidth: 1,
            outlineType: 'solid',
            labelColor: '#ffffff',
        },
    ],
    chartSettings: {
        showGridlines: true,
        gridlineColor: '#444444',
    },
    xKey: 'team',
    yKey: 'score',
    xAxisLabel: 'Team',
    yAxisLabel: 'Score',
    yAxisMin: 0,
    yAxisMax: 300,
    showTooltip: true,
    tooltipSettings: {
        backgroundColor: '#333333',
        borderRadius: '8px',
        fontSize: '14px',
        cursorColor: 'rgba(255, 255, 255, 0.1)',
    },
    showLegend: true,
    interactiveLegend: true,
    legendPosition: 'top',
    annotations: [
        { x: 2, y: 70, text: 'Highest Score', color: '#e74c3c' },
        { x: 3, y: 50, text: 'Lowest Score', color: '#3498db' },
    ],
    responsive: true,
    maintainAspectRatio: true,
    dataLabelPosition: 'top', 
    dataLabelRotation: 0,
    gradientFills: {
        scoreTypeA: { start: '#1abc9c', end: '#16a085' },
        scoreTypeB: { start: '#3498db', end: '#2980b9' },
        scoreTypeC: { start: '#e74c3c', end: '#c0392b' },
    },
    xAxisLabelRotation: -30,
    thresholdLines: [
        { y: 170, label: 'Target Score', color: '#00ff00', thickness: 3 },
    ],
    sortDataBy: 'y',
    width: 800,
    height: 500,
    title: 'Team Scores Overview',
    fontSettings: {
        titleFontSize: 24,
        axisLabelFontSize: 18,
        axisTickFontSize: 16,
        legendFontSize: 16,
        dataLabelFontSize: 14,
        tooltipFontSize: 14,
        thresholdFontSize: 14,
        annotationFontSize: 14,
        defaultLabelColor: '#ffffff',
    },
    margin: { top: 20, right: 20, left: 20, bottom: 20 },
};

```
### 3. Bar Graph
```javascript
export const barGraphConfig = {
  data: [
    { team: 1, scoreTypeA: 90, scoreTypeB: 60, scoreTypeC: 85 },
    { team: 2, scoreTypeA: 70, scoreTypeB: 75, scoreTypeC: 80 },
    { team: 3, scoreTypeA: 95, scoreTypeB: 90, scoreTypeC: 70 },
    { team: 4, scoreTypeA: 88, scoreTypeB: 40, scoreTypeC: 92 },
  ],
  scoringTypes: [
    {
      key: 'scoreTypeA',
      label: 'Type A',
      color: '#1abc9c',
      stacked: true,
      stackInFront: false,
      outlineColor: '#ffffff',
      outlineWidth: 1,
      outlineType: 'solid',
      borderRadius: 5,
      labelColor: '#ffffff',
    },
    {
      key: 'scoreTypeB',
      label: 'Type B',
      color: '#3498db',
      stacked: true,
      stackInFront: true,
      outlineColor: '#ff0000',
      outlineWidth: 2,
      outlineType: 'dashed',
      borderRadius: 5,
      labelColor: '#ffffff',
    },
    {
      key: 'scoreTypeC',
      label: 'Type C',
      color: '#e74c3c',
      stacked: true,
      stackInFront: true,
      outlineColor: '#ffffff',
      outlineWidth: 1,
      outlineType: 'solid',
      borderRadius: 5,
      labelColor: '#ffffff',
    },
  ],
  chartSettings: {
    showGridlines: true,
    gridlineColor: '#444444',
  },
  xKey: 'team',
  yKey: 'score',
  xAxisLabel: 'Team',
  yAxisLabel: 'Score',
  yAxisMin: 0,
  yAxisMax: 300,
  showTooltip: true,
  tooltipSettings: {
    backgroundColor: '#333333',
    borderRadius: '8px',
    fontSize: '14px',
    cursorColor: 'rgba(255, 255, 255, 0.1)',
  },
  showLegend: true,
  interactiveLegend: true,
  legendPosition: 'top',
  annotations: [
    { x: 2, y: 70, text: 'Highest Score', color: '#e74c3c' },
    { x: 3, y: -70, text: 'Lowest Score', color: '#3498db' },
  ],
  responsive: true,
  maintainAspectRatio: true,
  showDataLabels: true,
  dataLabelPosition: 'inside',
  dataLabelRotation: 0,
  gradientFills: {
    scoreTypeA: { start: '#1abc9c', end: '#16a085' },
    scoreTypeB: { start: '#3498db', end: '#2980b9' },
    scoreTypeC: { start: '#e74c3c', end: '#c0392b' },
  },
  xAxisLabelRotation: -30,
  thresholdLines: [
    { y: 170, label: 'Target Score', color: '#00ff00', thickness: 3 },
  ],
  sortDataBy: 'y',
  width: 800,
  height: 500,
  title: 'Team Scores Overview',
  fontSettings: {
    titleFontSize: 24,
    axisLabelFontSize: 18,
    axisTickFontSize: 16,
    legendFontSize: 16,
    dataLabelFontSize: 14,
    tooltipFontSize: 14,
    thresholdFontSize: 14,
    annotationFontSize: 14,
    defaultLabelColor: '#ffffff',
  },
  margin: { top: 20, right: 20, left: 20, bottom: 20 },
};
```
### 4. Pie Graph
```javascript
export const pieGraphConfig = {
    data: [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ],
    dataKey: 'value',
    nameKey: 'name',
    chartSettings: {
        outlineColor: '#ffffff',
        outlineWidth: 2,
        innerRadius: 50,
    },
    showTooltip: true,
    tooltipSettings: {
        backgroundColor: '#333333',
        borderRadius: '8px',
        fontSize: '14px',
        textColor: '#ffffff',
        cursorColor: 'rgba(255, 255, 255, 0.1)',
    },
    showLegend: true,
    responsive: true,
    maintainAspectRatio: true,
    width: 400,
    height: 400,
    title: 'Doughnut Chart Example',
    fontSettings: {
        titleFontSize: 24,
        legendFontSize: 16,
        tooltipFontSize: 14,
        defaultLabelColor: '#ffffff',
    },
    colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
    showLabels: true,
};
```
### 5. Radar Graph
```javascript
const RadarGraph = ({ config }) => {
    const defaultConfig = {
        data: [],
        radars: [],
        radarSettings: {
            strokeWidth: 2,
            dot: true,
        },
        angleKey: 'subject',
        radiusKey: 'value',
        showRadiusAxis: true,
        customLabels: {},
        showGrid: true,
        gridType: 'polygon', // or 'circle'
        fillGrid: false,
        showLegend: true,
        responsive: true,
        width: 800,
        height: 500,
        title: 'Radar Chart',
        fontSettings: {
            titleFontSize: 24,
            labelFontSize: 16,
            legendFontSize: 16,
            defaultLabelColor: '#ffffff',
        },
    };

    const finalConfig = { ...defaultConfig, ...config };

    const {
        data,
        radars,
        radarSettings,
        angleKey,
        showRadiusAxis,
        customLabels,
        showGrid,
        gridType,
        fillGrid,
        showLegend,
        width,
        height,
        title,
        fontSettings,
        responsive,
    } = finalConfig;

    return (
        <div style={{ width: responsive ? '100%' : width, height: responsive ? '100%' : height }}>
            {title && <h2 style={{ fontSize: fontSettings.titleFontSize, textAlign: 'center', marginBottom: 20, color: '#ffffff' }}>{title}</h2>}
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={data}>
                    {showGrid && (
                        <PolarGrid
                            gridType={gridType}
                            stroke={fillGrid ? 'rgba(255, 255, 255, 0.5)' : '#ffffff'}
                            fill={fillGrid ? 'rgba(255, 255, 255, 0.2)' : 'none'}
                            fillOpacity={fillGrid ? 0.6 : 0}
                        />
                    )}
                    <PolarAngleAxis
                        dataKey={angleKey}
                        tick={{ fontSize: fontSettings.labelFontSize, fill: fontSettings.defaultLabelColor }}
                        tickFormatter={tick => customLabels[tick] || tick}
                    />
                    {showRadiusAxis && (
                        <PolarRadiusAxis
                            angle={30}
                            tick={{ fontSize: fontSettings.labelFontSize, fill: fontSettings.defaultLabelColor }}
                        />
                    )}
                    {radars.map(radar => (
                        <Radar
                            key={radar.key}
                            name={radar.label}
                            dataKey={radar.key}
                            stroke={radar.color}
                            fill={radar.color}
                            fillOpacity={radarSettings.dot ? 0.1 : 0}
                            strokeWidth={radarSettings.strokeWidth}
                            dot={radarSettings.dot}
                        />
                    ))}
                    {showLegend && (
                        <Legend
                            wrapperStyle={{ fontSize: fontSettings.legendFontSize, color: '#ffffff' }}
                        />
                    )}
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#333333',
                            borderRadius: '8px',
                            fontSize: fontSettings.labelFontSize,
                            color: '#ffffff',
                        }}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

// Example radar graph configuration
export const radarGraphConfig = {
    data: [
        {
            subject: 'Math', A: 120, B: 110, fullMark: 150,
        },
        {
            subject: 'Chinese', A: 98, B: 130, fullMark: 150,
        },
        {
            subject: 'English', A: 86, B: 130, fullMark: 150,
        },
        {
            subject: 'Geography', A: 99, B: 100, fullMark: 150,
        },
        {
            subject: 'Physics', A: 85, B: 90, fullMark: 150,
        },
        {
            subject: 'History', A: 65, B: 85, fullMark: 150,
        },
    ],
    radars: [
        {
            key: 'A',
            label: 'Student A',
            color: '#8884d8',
        },
        {
            key: 'B',
            label: 'Student B',
            color: '#82ca9d',
        },
    ],
    radarSettings: {
        strokeWidth: 2,
        dot: true,
    },
    angleKey: 'subject',
    showRadiusAxis: false,
    customLabels: {
        Math: 'Mathematics',
        Chinese: 'Chinese Language',
        English: 'English Language',
        Geography: 'Geography Studies',
        Physics: 'Physics Studies',
        History: 'History Studies',
    },
    showGrid: true,
    gridType: 'polygon', // Options: 'polygon', 'circle'
    fillGrid: true,
    showLegend: true,
    responsive: true,
    width: 800,
    height: 500,
    title: 'Radar Chart Example',
    fontSettings: {
        titleFontSize: 24,
        labelFontSize: 16,
        legendFontSize: 16,
        defaultLabelColor: '#ffffff',
    },
};
```

## Installation
1. Clone the repository: 
    `git clone https://github.com/AsafMeizner/chart-playground.git`
    `cd chart-playground`
2. Install dependencies:
    `npm install`
3. Start the development server:
    `npm start`
## Usage
* Open your browser and navigate to http://localhost:3000 to view the graph examples.
* Modify the configuration in the files to customize the appearance and data of each graph type as needed.

## Contribution
Contributions are welcome! Feel free to submit a pull request or open an issue if you have any suggestions or feedback.
