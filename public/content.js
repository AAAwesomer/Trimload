chrome.runtime.onMessage.addListener(request => {
  if (request.type === 'getImages') {
    const modal = document.createElement('dialog');
    modal.setAttribute("style", "height:90%; width:90%");
    modal.innerHTML = `<iframe id="imageFetcher" style="height:100%"></iframe>
        <div style="position:absolute; top:0px; left:5px;">  
            <button>x</button>
        </div>`;
    document.body.appendChild(modal);
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    const iframe = document.getElementById("imageFetcher");  
    iframe.src = chrome.extension.getURL("index.html");
    iframe.frameBorder = 0;
    dialog.querySelector("button").addEventListener("click", () => {
        dialog.close();
     });
  }
});
