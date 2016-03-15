import fs from "fs"
import path from "path"
import requireAll from "require-all"

class SpurString {
  constructor() {
    this.pluginsPath = path.join(__dirname, "./plugins")
    this.helpersPath = path.join(__dirname, "./helpers")
    this.plugins = []
    this.loadPlugins(this.helpersPath)
    this.loadPlugins(this.pluginsPath)
  }

  loadPlugins(folderPath) {
    if (fs.existsSync(folderPath)) {
      const pluginsObject = requireAll({
        dirname: folderPath,
        filter: /(.+)\.js$/
      })
      this.loadPluginsByObject(pluginsObject)
    }

    console.error(`Plugin path "${folderPath}" was not found`)
  }

  loadPluginsByObject(pluginsObject) {
    for (const pluginName in pluginsObject) {
      if (pluginsObject.hasOwnProperty(pluginName)) {
        const plugin = pluginsObject[pluginName]
        if (typeof plugin === "function") {
          this[pluginName] = plugin.bind(this)
          this.plugins.push(pluginName)
        }
      }
    }
  }
}

module.exports = new SpurString()
