# Pritelmonkie 
![image](https://github.com/sewellstephens/iframe-tracking/blob/main/pritelmonkie-icon.png)

An alternative to third party cookies using iframe technology

![image](https://github.com/sewellstephens/iframe-tracking/blob/main/iframe.png)

Third party cookies are being deprecated and an alternative thats easy to use and avaliable to anyone is crucial to todays world of marketing.

# How does this work?
By using some simple javascript, you will be up and running in no time. Heres an example code snippet from my SaaS [Obeatow](https://obeatow.com).

```
// Get elements from page

document.getElementById('id').style.display = 'none';

var obform = document.getElementsByTagName('body')[0];

let id1 = document.getElementById('id');

// Create an iframe to send data to your tracking service

var iframe = document.createElement('iframe');

document.getElementsByTagName('body')[0].appendChild(iframe);
iframe.setAttribute("style","height:1px;width:1px;display:none;");
iframe.setAttribute("src","https://app.obeatow.com/tracker-api?key=" + id1.innerText);
...

```

# Open source to everyone

Pritelmonkie is open source and 100% free to use. Just copy and paste code and you are good to go.

![image](https://github.com/sewellstephens/iframe-tracking/blob/main/trust-badge-1.png)

# How does it work exactly?

Just find elements and data on the page and then send it into the Iframe Url with Query Params. Its that simple to use.

Made by [Sewell Stephens](https://sewellstephens.com)
