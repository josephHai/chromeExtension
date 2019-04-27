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
