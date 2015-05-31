fs         = require "fs"
path       = require "path"
requireAll = require "require-all"

class SpurString

  constructor:()->
    @pluginsPath = path.join(__dirname, "./plugins")
    @helpersPath = path.join(__dirname, "./helpers")

    @plugins = []
    @loadPlugins(@helpersPath)
    @loadPlugins(@pluginsPath)

  loadPlugins: (folderPath)->
    if fs.existsSync(folderPath)
      pluginsObject = requireAll({
        dirname: folderPath
        filter:  /(.+)\.coffee$/
      })
      @loadPluginsByObject(pluginsObject)
    else
      console.error "Plugin path \"#{folderPath}\" was not found"

  loadPluginsByObject:(pluginsObject)->
    for pluginName, plugin of pluginsObject
      do(pluginName, plugin) =>
        if typeof plugin is 'function'
          @[pluginName] = plugin.bind(@)
          @plugins.push(pluginName)

module.exports = new SpurString()
