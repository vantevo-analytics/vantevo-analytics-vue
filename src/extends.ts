import { VantevoOptions } from "vantevo-analytics-tracker";


declare module '@nuxt/types' {
    // module configuration in nuxt.config.ts
    interface NuxtVantevoOptions {
        vantevo?: VantevoOptions
    }
}