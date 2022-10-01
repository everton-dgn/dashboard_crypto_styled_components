import StatisticsChart from 'components/organisms/StatisticsChart'

export default {
  translations: {
    language: 'en-US',
    currency: 'USD',
    pages: {
      home: {
        titlePage: 'Home Page'
      },
      error: {
        titlePage: 'Error Page',
        titleImageError404: 'Error 404',
        titleImageNotFoundRobot: 'Broken robot',
        buttonReturn: 'Go to Home Page'
      }
    },
    verticalMenu: {
      listMenu: [
        'Home',
        'Analytics',
        'Settings',
        'Safety',
        'Calendar',
        'Support',
        'Log out'
      ],
      titleHelp: 'Need Help?',
      descriptionHelp: 'Virtual Assistant Will Help You',
      begin: 'Begin',
      switchTheme: 'Switch to',
      themeLight: 'light',
      themeDark: 'dark'
    },
    wallets: {
      title: 'WALLETS',
      buttonAdd: 'Add',
      descriptionImageCredCard: 'Credit card'
    },
    optionsMenu: {
      list: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      description: 'Options menu'
    },
    chartData: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
    statisticsChart: {
      title: 'STATISTICS'
    }
  }
}
