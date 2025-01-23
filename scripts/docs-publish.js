import { syncLocalAndRemote } from './utils.js';
import path from 'path';
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async () => {
    await syncLocalAndRemote(path.join(__dirname, '..'));
})();
