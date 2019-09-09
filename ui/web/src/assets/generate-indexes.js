const glob = require('glob')
const Path = require('path')
const fs = require('fs')

function pascalCase(str) {
  const words = str.replace(/-/g, ' ').replace(/_/g, ' ').split(' ')
  const [firstWord, ...restWords] = words
  const cappedWords = restWords.map(word => word.slice(0,1).toUpperCase() + word.slice(1))
  return [firstWord, ...cappedWords].join('')
}

const assetFiles = glob.sync(Path.join(__dirname, '**/*.+(jpg|png|svg)'))
const relative = assetFiles.map(file => Path.relative(__dirname, file))
const pathsByDirname = relative.reduce((obj, path) => {
  const dirname = Path.dirname(path)
  const basename = Path.basename(path)

  if(!obj[dirname]) {
    obj[dirname] = []
  }

  obj[dirname].push({
    path,
    basename
  })
  return obj
}, {})
const baseIndexes = Object.entries(pathsByDirname).reduce((obj, [dirname, paths]) => {
  const imports = paths.map(({path, basename}) => ({
    importName: pascalCase(Path.basename(path, Path.extname(path))),
    importPath: './' + basename
  }))
  const indexStr =
`${imports.map(({importName, importPath}) => `import ${importName} from '${importPath}'`).join('\n')}

export { ${imports.map(({importName}) => importName).join(', ')} }
`

  obj[dirname] = indexStr
  return obj
}, {})

Object.entries(baseIndexes).forEach(([dirname, indexStr]) => fs.writeFileSync(Path.join(__dirname, dirname, 'index.js'), indexStr))