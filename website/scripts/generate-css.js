const colorSchemes = [
  {
    name: 'Cyan Magenta Lime',
    primary: '#1BAAE3',
    secondary: '#E31BAA',
    accent: '#AAE31B'

  },
  {
    name: 'Blue Red Green',
    primary: '#1B47E3',
    secondary: '#E31B47',
    accent: '#47E31B'
  },
  {
    name: 'Green Red Blue',
    primary: '#1BE32E',
    secondary: '#E32E1B',
    accent: '#2E1BE3'
  },
  {
    name: 'Green Red Blue Desaturated',
    primary: '#3BCA40',
    secondary: '#CA403B',
    accent: '#403BCA'
  },
  {
    name: 'Asher Test',
    primary: '#5a7327',
    secondary: '#c4adb9',
    accent: '#3d2a2a',
    inputBG: '#a16f4c',
    input: '#c4adb9'
  },
  // {
  //   name: '',
  //   primary: '',
  //   secondary: '',
  //   accent: ''
  // },
]

const fs = require('fs')
const path = require('path')

function outputCss() {
  const options = colorSchemes.map((scheme) => ({
    name: scheme.name,
    value: scheme.name.split(' ').join('-')
  }))
  const output = colorSchemes.map((scheme) => {
    const cssSafeName = scheme.name.split(' ').join('-')
    return (
`.App.${cssSafeName} {
  --primary-color: ${scheme.primary};
  --secondary-color: ${scheme.secondary};
  --accent-color: ${scheme.accent};
}
`
    )
  }).join('\n')

  fs.writeFileSync(path.resolve(__dirname,'../src/generated/colors.css'), output)
  fs.writeFileSync(path.resolve(__dirname,'../src/generated/color-options.json'), JSON.stringify(options))
}

outputCss()