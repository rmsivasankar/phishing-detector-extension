document.getElementById('toggle').addEventListener('click', function () {
    chrome.storage.sync.get(['protectionEnabled'], function (result) {
      const enabled = !result.protectionEnabled;
      chrome.storage.sync.set({ protectionEnabled: enabled }, function () {
        document.getElementById('toggle').textContent = enabled ? 'Disable Protection' : 'Enable Protection';
      });
    });
  });
