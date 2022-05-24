// Get elements from page

document.getElementById('id').style.display = 'none';

var obform = document.getElementsByTagName('body')[0];

let id1 = document.getElementById('id');

// Create an iframe to send data to your tracking service

var iframe = document.createElement('iframe');

document.getElementsByTagName('body')[0].appendChild(iframe);
iframe.setAttribute("style","height:1px;width:1px;display:none;");
iframe.setAttribute("src","https://app.obeatow.com/tracker-api?key=" + id1.innerText);
