# Pritelmonkie 
![image](https://github.com/sewellstephens/iframe-tracking/blob/main/pritelmonkie-logo-color.png)

An alternative to third party cookies using iframe technology

![image](https://github.com/sewellstephens/iframe-tracking/blob/main/iframe.png)

Third party cookies are being deprecated and an alternative thats easy to use and avaliable to anyone is crucial to todays world of marketing.

# How does this work?
First install from NPM or use Unpkg.

```
> npm install pritelmonkie
```
```
https://unpkg.com/pritelmonkie/index.js
```

By using some simple javascript, you will be up and running in no time. Heres an example code snippet.

```
import { pritel } from 'pritelmonkie';

// Get elements from page

document.getElementById('id').style.display = 'none';

var obform = document.getElementsByTagName('body')[0];

let id1 = document.getElementById('id');

// Create an iframe to send data to your tracking service

let urlst = 'https://app.obeatow.com/form-submission-api?key=' + id1.innerText;

let urlst1 = String(urlst);

pritel(urlst1)

```

If you use Post message to send data to the Iframe, The shorthand pritel function is not supported. Please use following code:

```
 var iframe = document.createElement('iframe');

document.getElementsByTagName('body')[0].appendChild(iframe);
iframe.setAttribute("style","height:1px;width:1px;display:none;");
iframe.setAttribute("src", 'https://example.com');
```

Using Post message with the invisible iframe(s). You can add as many invisible iframe trackers as you like securely. Just don't flood the page with hundreds of them for the best user expeerience.

```
window.addEventListener("message", event => { 
let data1 = event.data.data1
let data2 = event.data.data2
}
```

# Open source to everyone
Pritelmonkie is open source and 100% free to use. Just copy and paste code and you are good to go.

![image](https://github.com/sewellstephens/iframe-tracking/blob/main/trust-badge-1.png)

[![made-by](https://user-images.githubusercontent.com/41175080/179369150-f05a2ede-b8d5-47e5-a7f6-aab17140c8e0.png)](https://sewellstephens.com)
