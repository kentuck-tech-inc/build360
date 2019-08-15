const fs = require('fs')
const Path = require('path')

function generateComponent(name) {
  const componentString =
`
import React from 'react'
import './${name}.css'

class ${name} extends React.Component {
  render() {
    return (
      <p className="${name}">
        Content here!
      </p>
    )
  }
}

export {${name}}
`
  const cssString = 
`
.${name} {

}
`
  return {componentString, cssString}
}

function writeComponent() {
  const args = process.argv.slice(2)
  if(args.length === 0) {
    console.log('Usage:')
    console.log('\tnode generate-component.js ComponentName')
    return
  }

  const componentName = args[0]
  const {componentString, cssString} = generateComponent(componentName)

  const componentsDir = Path.resolve(__dirname, '../src/components')
  const componentDir = Path.join(componentsDir, componentName);
  fs.mkdirSync(componentDir)
  fs.writeFileSync(Path.join(componentDir, `${componentName}.js`), componentString)
  fs.writeFileSync(Path.join(componentDir, `${componentName}.css`), cssString)
}

module.exports = generateComponent

if(require.main === module) {
  writeComponent()
}