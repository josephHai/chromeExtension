'use strict';

chrome.storage.sync.get(null, (v) => {
  const p = new Promise((resolve, reject) => {
    document.getElementById('q1').innerText = v.name;
    document.getElementById('q2').innerText = v.sid;
    document.getElementById('q3').innerText = v.tel;
    setTimeout(() => {
      resolve('submit');
    }, 1000);
  });

  p.then((v) => {
    document.getElementById('submit_button').click();
  });
});
