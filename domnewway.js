function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}




function displayCitations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;


    let quotes = document.getElementsByTagName("blockquote");
    for (let i = 0; i < quotes.length; i++){
        if (!quotes[i].getAttribute("cite")) continue;
        let url = quotes[i].getAttribute("cite");
        let quoteChildren = quotes[i].getElementsByTagName('*');
        if (quoteChildren.length < 1) continue;
        let elem = quoteChildren[quoteChildren.length - 1];
        let link = document.createElement("a");
        let link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href", url);
        let superscript = document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}

addLoadEvent(displayCitations);

// function addLink() {
//     let newLink = document.createElement("a");
//     text = "http://www.google.com";
//     let linkText = document.createTextNode("http://www.google.com");
//     newLink.appendChild(linkText);
//     newLink.setAttribute("href", text);
//     document.body.appendChild(newLink);
// }

// window.onload = addLink;