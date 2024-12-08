const { syncLocalAndRemote } = require('./utils');
const path = require('path');

(async () => {
    await syncLocalAndRemote(path.join(__dirname, '..'));
})();
