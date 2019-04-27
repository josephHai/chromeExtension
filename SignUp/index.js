'use strict';

chrome.storage.sync.get(null, (v) => {
  console.log(v);
});
