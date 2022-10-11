module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.tsx',
          'src/components/Alert/Alert.tsx',
          'src/components/Dropdown/Dropdown.tsx',
          'src/components/DropdownToggle/DropdownToggle.tsx',
          'src/components/DropdownMenu/DropdownMenu.tsx',
          'src/components/DropdownItem/DropdownItem.tsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'TypeScript Design System'
};
