const BASE_URL = "https://www.google.com/maps/search/?api=1&query=";
chrome.extension.onMessage.addListener(function(req, sender, callback) {
  if (sender.tab) {
    if (req.text !== undefined) {
      const url = encodeURI(`${BASE_URL}${req.text}`);
      const properties = { url: url };
      chrome.tabs.create(properties, function(tab) {});
    }
  }
});
