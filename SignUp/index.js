'use strict';

chrome.storage.sync.get(null, (v) => {
  const p = new Promise((resolve, reject) => {
    document.getElementById('q1').value = v.name;
    document.getElementById('q2').value = v.sid;
    document.getElementById('q3').value = v.tel;
    setTimeout(() => {
      resolve('submit');
    }, 1000);
  });

  p.then((v) => {
    document.getElementById('submit_button').click();
  });
});
