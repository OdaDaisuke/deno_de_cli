export interface IAppConfig {
    env: string
    isDev: boolean
}

export class AppConfig implements IAppConfig {
    env: string

    constructor (props: IAppConfig) {
      this.env = props.env
    }
  
    /**
     * Weather current env is dev or not.
     */
    get isDev(): boolean {
      return this.env === "dev"
    }
}