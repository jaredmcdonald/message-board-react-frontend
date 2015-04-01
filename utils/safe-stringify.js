'use strict';

// for safely inserting bootstrapped React props into a `<script>` tag
module.exports = function (obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script')
                            .replace(/<!--/g, '<\\!--');
};
