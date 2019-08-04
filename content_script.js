window.addEventListener(
  "keydown",
  function(e) {
    if (e.ctrlKey && e.keyCode == 77) {
      const text = window.getSelection().toString();
      if (text.length > 0) {
        chrome.extension.sendMessage({ text: text }, function(response) {});
      }
    }
  },
  false
);
