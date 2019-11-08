const help = (command, subCommand) => {
  const menus = {
    main: `
    papaya [command] <options>

    version ............ show package version
    help ............... show help menu for a command`,
    generate: `
    papaya generate <options>

    --source, -s ................. markdown text file
    --template, -t ............... html template file
    --output, -o ................. pdf output file`,
  }


  if(subCommand) {
    console.log(menus[subCommand])
    return
  }

  console.log(menus['main'])
}

export { help }
