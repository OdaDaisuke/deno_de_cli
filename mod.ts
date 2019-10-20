import * as flags from "https://deno.land/std@v0.17.0/flags/mod.ts"
import * as path from "https://deno.land/std@v0.17.0/fs/path.ts"
import { AppConfig, IAppConfig } from "./config.ts"

type Flags = {
  h?: boolean;
  help?: boolean;
}

const dec= new TextDecoder()

class App {
  config: IAppConfig

  public run(): void {
    try {
      this.parseFlags()
      this.setConfig()
      console.log(this.config.isDev)
    } catch (e) {
      console.error(e)
    }
  }

  private setConfig(): void {
    const envPath = ".env.json"
    const configStr = dec.decode(Deno.readFileSync(path.resolve(envPath)))
    try {
      this.config = new AppConfig(JSON.parse(configStr) as IAppConfig)
    } catch (e) {
      throw e
    }
  }

  private parseFlags(): void {
    const { h, help } = flags.parse(Deno.args) as Flags
    if (h || help) {
      console.log("Usage: hello")
      return
    }
    console.log("Hello")
  }
}

new App().run()
