const sendPostMessage = () => {
    
    let height = document.body.offsetHeight;
    console.log(height);
    window.parent.postMessage({
	frameHeight: height
    }, '*');
}


window.onload = () => sendPostMessage();
window.onresize = () => sendPostMessage();

const config = { attributes: true, childList: true, subtree: true };

const observer = new MutationObserver(sendPostMessage);
observer.observe(document.body, config);


window.onmessage = (e) => {
    if (e.data.hasOwnProperty("frameHeight")) {
	var iframeDiv = document.querySelector("iframe");
	if (iframeDiv) {
	    iframeDiv.style["padding-top"] = `${e.data.frameHeight + 30}px`;
	}
    }
};
