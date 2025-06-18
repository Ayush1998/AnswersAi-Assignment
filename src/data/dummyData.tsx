export const graphData = [
  { month: 'Apr', value: 35000 },
  { month: 'May', value: 50000 },
  { month: 'Jun', value: 42000 },
  { month: 'Jul', value: 88000 },
  { month: 'Aug', value: 60000 },
  { month: 'Sep', value: 48000 },
  { month: 'Oct', value: 58000 },
];

export const kpiCards = [
  {
    title: "Infrastructure Units",
    description: "This describes variable two and what the shown data means.",
    value: "€421.07",
    tooltip: "Total infrastructure investment value.",
  },
  {
    title: "Charging Growth",
    description: "This describes variable two and what the shown data means.",
    value: "33.07",
    tooltip: "Increase in number of charging stations.",
  },
  {
    title: "Localization change",
    description: "This describes variable two and what the shown data means.",
    value: "21.9%",
    tooltip: "Change in charging station location efficiency.",
  },
  {
    title: "Fleet growth",
    description: "This describes variable two and what the shown data means.",
    value: "7.03%",
    tooltip: "Year-over-year growth in electric fleet size.",
  },
];

export const categorizedVariableData = [
  {
    category: 'Variable Category 1',
    variables: [
      {
        id: 'carbon1',
        label: 'Carbon 1',
        description: 'Represents the carbon emission factor for a particular vehicle type or charging method.'
      },
      {
        id: 'co2_distribution',
        label: 'Co2 Distribution',
        description: "But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you're a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle."
      },
      {
        id: 'fleet_sizing',
        label: 'Fleet Sizing',
        description: 'Determines the total number of vehicles or units deployed in a scenario.'
      }
    ]
  },
  {
    category: 'Variable Category 2',
    variables: [
      {
        id: 'parking_rate',
        label: 'Parking Rate',
        description: 'Defines the hourly or daily parking cost associated with each station or area.'
      },
      {
        id: 'border_rate',
        label: 'Border Rate',
        description: 'Penalty rate for crossing boundaries between designated zones or regions.'
      },
      {
        id: 'request_rate',
        label: 'Request Rate',
        description: 'Average number of service or trip requests received per unit time.'
      }
    ]
  },
  {
    category: 'Variable Category 3',
    variables: [
      {
        id: 'variable1_a',
        label: 'Variable 1',
        description: 'A generic tunable parameter used for fine-tuning secondary effects or testing scenarios.'
      },
      {
        id: 'variable1_b',
        label: 'Variable 1',
        description: 'Another instance of Variable 1 used in a different context or sub-model.'
      },
      {
        id: 'variable1_c',
        label: 'Variable 1',
        description: 'Supports simulation accuracy by managing edge cases or fallback behaviors.'
      }
    ]
  }
];

export const variableSections = [
  {
    title: 'Primary Variables',
    id: 'primary-variables',
    variables: [
      { id: 'var1', label: 'Variable 1', description: 'Description for Variable 1' },
      { id: 'var2', label: 'Variable 2', description: 'Description for Variable 2' },
      { id: 'var3', label: 'Variable 3', description: 'Description for Variable 3' }
    ]
  },
  {
    title: 'Secondary Variables',
    id: 'secondary-variables',
    variables: [
      { id: 'var4', label: 'Variable 4', description: 'Description for Variable 4' },
      { id: 'var5', label: 'Variable 5', description: 'Description for Variable 5' }
    ]
  }
]
