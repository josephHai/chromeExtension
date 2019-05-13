'use strict';

chrome.storage.sync.get(null, (v) => {
  const p = new Promise((resolve, reject) => {
    const fieldMap = [
      {field: "学号", value: v.sid},
      {field: "姓名", value: v.name},
      {field: "联系方式", value: v.tel}
    ];

    const el1 = document.getElementById('q1');
    const el2 = document.getElementById('q2');
    const el3 = document.getElementById('q3');
    const text1 = el1.parentNode.previousSibling.innerText;
    const text2 = el2.parentNode.previousSibling.innerText;
    const text3 = el3.parentNode.previousSibling.innerText;

    fieldMap.map((k) => {
      if (!el1.value && text1.indexOf(k.field) !== -1) {
        el1.value = k.value;
      }
      if (!el2.value && text2.indexOf(k.field) !== -1) {
        el2.value = k.value;
      }
      if (!el3.value && text3.indexOf(k.field) !== -1) {
        el3.value = k.value;
      }
    })

    setTimeout(() => {
      resolve('submit');
    }, 1000);
  });

  p.then((v) => {
    // document.getElementById('submit_button').click();
  });
});
