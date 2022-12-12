# The analytics of your website, but simpler

**Vantevo Analytics** is the alternative platform to Google Analytics that respects privacy, because it does not need cookies not compliant with the GDPR. Easy to use, light and can be integrated into any website and back-end.

For more information visit the website [vantevo.io](https://vantevo.io).

# Official framework Vantevo Analytics for Vue & Nuxtjs

## Installation

`npm install vantevo-analytics-vue`

## Parameters

These are the parameters available for the tracker settings, all fields are optional.

| Option              | Type                 | Description                                                                                                                                                                                                                                           | Default                            |
| ------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| excludePath         | `array` (Optional)   | You can exclude one or more pages from the statistics, [settings](https://vantevo.io/docs/)                                                                                                                                                           | `[]`                               |
| dev                 | `boolean` (Optional) | Tracker will not send data to server, please check browser console to view request information.                                                                                                                                                       | `false`                            |
| hash                | `boolean` (Optional) | Allows tracking based on URL hash changes.                                                                                                                                                                                                            | `false`                            |
| domain              | `string` (Optional)  | Use this option when the script is installed on a different domain than the one entered on Vantevo Analytics. To use this function remember to authorize the domain to be able to save the statistics, for more information [read more](https://vantevo.io/docs/domain-settings/information#authorized-domains).                                                                                                                                        | `null`                             |
| manualPageview      | `boolean` (Optional) | Allows you to track page views automatically, the script uses the `popstate` event to navigate the site.                                                                                                                                              | `false`                            |
| outboundLinks       | `boolean` (Optional) | Allows you to monitor all outbound links from your site automatically, the script uses the `click` and` auxclick` events.                                                                                                                             | `false`                            |
| trackFiles          | `string` (Optional)  | Is a list of extensions, separated by commas, example: zip,mp4,avi,mp3. Whenever a user clicks on a link, the script checks if the file extension is in the list you entered in the parameter and sends a `File Download` event with the value `url`. | `null`                             |
| saveExtensionFiles  | `boolean` (Optional) | Allows you to save in the event detail together with the` url` also the name of the file extension as `meta_key` to get more information and statistics about your files to download.                                                                 | `false`                            |
| trackEcommerce      | `boolean` (Optional) | Add ecommerce monitoring script automatically. **Only vue framework.**                                                                                                                                                                                | `false`                            |
| srcScript           | `string` (Optional)  | You can download the `vantevo.js` file local instead of using the file externally. **Only vue framework.**                                                                                                                                            | `https://vantevo.io/js/vantevo.js` |
| srcScriptEcommerce  | `string` (Optional)  | You can download the `vantevo-ecommerce.js` file local instead of using the file externally. **Only vue framework.**                                                                                                                                  | `https://vantevo.io/js/vantevo-ecommerce.js` |


## Monitoring Ecommerce

In the ecommerce section of Vantevo you can monitor specific actions affecting your ecommerce website and the sources of traffic that lead to sales. 


### Parameters

| Option         | Type                  | Description                                                                              | Default                  |
| -------------- | --------------------- | ---------------------------------------------------------------------------------------- | ------------------------ |
| event          | `string` (required)   | Event Name. See below the list of events you can use for monitoring your ecommerce.      | `pageview`               |
| values         | `object` (required)   | An object with custom properties for events.                                             | `{}`                     |
| callback       | `function` (optional) | A function that is called once the event has been successfully logged.                   | `null`                   |


### List events 

These are the events to use to monitor your ecommerce:

| Event              | Description                                          |
| :----------------- | :--------------------------------------------------- |
| `add_to_wishlist`  | a user adds a product to the favorites list          |
| `view_item`        | a user views a product                               |
| `remove_item_cart` | a user removes a product from the cart               |
| `add_item_cart`    | a user adds product to the cart                      |
| `start_checkout`   | a user has started the checkout process              |
| `checkout_info`    | a user submits personal data                         |
| `checkout_ship`    | a user submits shipments data                        |
| `checkout_payment` | a user initiated the payment process                 |
| `purchase`         | a user has completed a purchase                      |



## Vue

To start tracking page views and events, you need add the plugin to your `main.js` file.

```ts
import { createApp } from 'vue';
import { VueVantevo } from 'vantevo-analytics-vue';
....

app.use(VueVantevo, {
    "excludePath": [],
    "dev": false,
    "hash": false,
    "domain": null,
    "manualPageview": false,
    "outboundLinks": false,
    "trackFiles": [],
    "saveExtensionFiles": true,
    "srcScript": null,
    "trackEcommerce": false
});
app.mount('#app');
```

### How use manual pageview

```html
<script>
  export default {
    mounted() {
      this.$vantevo("pageview");
      /** or **/
      this.$vantevo("pageview", { path: "/example" });
      /** or **/
      this.$vantevo("pageview", { path: "/example", title: "Title Page" }, () => {} );
    },
  };
</script>
```

### How to create event

```html
<script>
  export default {
    mounted() {
      this.$vantevo("name-event", { pdf: "Recipes" }, () => {});
    },
  };
</script>
```

### Example monitoring ecommerce

An example for how to use the `trackEcommerce` function. 

```html
<script>
  export default {
    mounted() {
      this.$trackEcommerce("view_item", { 
            "items": [
                {
                    'item_id': "SKU_123",
                    'item_name': "Samsung Galaxy",
                    'currency': "EUR",
                    'quantity': 0,
                    'price': 199.99,
                    'discount': 0,
                    'position': 1,
                    'brand': "Samsung",
                    'category_1': "Smartphone",
                    'category_2': "Samsung",
                    'category_3': "Galaxy",
                    'category_4': "",
                    'category_5': "",
                    'variant_1': "Black",
                    'variant_2': "5.5 inch",
                    'variant_3': ""
                }
            ]
        }, () => {});
    },
  };
</script>
```


### 404 Page not found

For the management of the `404 - Page Not Found` page we have created a specific event. This function will automatically save a `404` event and the` pathname` of the page as a value.

You can find the information collected through this function on the `Events` page.

```html
<script>
  export default {
    mounted() {
      this.$vantevo("404");
    },
  };
</script>
```

## Nuxtjs

To start tracking page views and events, you need add the plugin to your `nuxt.config.js` file.
All settings are global will be available on all pages,

```
buildModules: [
    [
      "vantevo-analytics-vue",
      {
        "excludePath": [],
        "dev": true,
        "hash": false,
        "domain": null,
        "manualPageview": false,
        "outboundLinks": false,
        "trackFiles": [],
        "saveExtensionFiles": true
      },
    ],
  ],
```

### How use manual pageview

```html
<script>
  export default {
    mounted() {
      this.$vantevo.event("pageview", { path: "/example" }, () => {});
    },
  };
</script>
```

### How to create event

```html
<script>
  export default {
    mounted() {
      this.$vantevo.event("name-event", { pdf: "Recipes" }, () => {});
    },
  };
</script>
```



### Example monitoring ecommerce

An example for how to use the `trackEcommerce` function. 

```html
<script>
  export default {
    mounted() {
      this.$vantevo.trackEcommerce("view_item", { 
            "items": [
                {
                    'item_id': "SKU_123",
                    'item_name': "Samsung Galaxy",
                    'currency': "EUR",
                    'quantity': 0,
                    'price': 199.99,
                    'discount': 0,
                    'position': 1,
                    'brand': "Samsung",
                    'category_1': "Smartphone",
                    'category_2': "Samsung",
                    'category_3': "Galaxy",
                    'category_4': "",
                    'category_5': "",
                    'variant_1': "Black",
                    'variant_2': "5.5 inch",
                    'variant_3': ""
                }
            ]
        }, () => {});
    },
  };
</script>
```

### 404 Page not found

For the management of the `404 - Page Not Found` page we have created a specific event. This function will automatically save a `404` event and the` pathname` of the page as a value.

You can find the information collected through this function on the `Events` page.

```html
<script>
  export default {
    mounted() {
      this.$vantevo.event("404");
    },
  };
</script>
```

### Tracking Files Download

You can use `enableTrackFiles()` by monitoring file downloads on a specific page.

```html
<script>
  export default {
    mounted() {
      const clearTrackFiles = this.$vantevo.enableTrackFiles("zip,mp4,avi", true);
    },
    beforeDestroy() {
      clearTrackFiles();
    },
  };
</script>
```

### Outbound links

You can use `enableOutboundLinks()` by monitoring outbound links on a specific page.

```html
<script>
  export default {
    mounted() {
      const cleanOutboundLinks = this.$vantevo.enableOutboundLinks();
    },
    beforeDestroy() {
      cleanOutboundLinks();
    },
  };
</script>
```

## Vantevo Analytics Guide

To see all the features and settings of Vantevo Analytics we recommend that you read our complete guide [here](https://vantevo.io/docs).
