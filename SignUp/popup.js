// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

const save = document.getElementById('save');

save.onclick = function(element) {
  const input = document.getElementsByTagName('input');
  const content = {
    'name': input[0].value,
    'sid': input[1].value,
    'tel': input[2].value,
  };

  chrome.storage.sync.set(content);
};

chrome.storage.sync.get(null, (v) => {
  const input = document.getElementsByTagName('input');
  v.name !== null && (input[0].value = v.name);
  v.sid !== null && (input[1].value = v.sid);
  v.tel !== null && (input[2].value = v.tel);
});
