const path = require("path");
const minimist = require("minimist");

const ReadmeUpdater = require("./updateREADME");
const { mergeReadme, distributeReadme } = require('./notes-merge-distribute');
const { syncLocalAndRemote, readNotesMataJson } = require('./utils');
const notesmeta = require("./.notesmeta.json");


(async () => {
  const args = minimist(process.argv.slice(2));
  // console.log('args', args);
  
  const repoName = args.repoName;

  if (!notesmeta.repos.includes(repoName)) {
    console.error(`❌ invalid repoName: ${repoName}.\nvalid repos: ${notesmeta.repos}`);
    process.exit(1);
  }

  const baseDir = path.resolve(__dirname, "..", "..", repoName);
  const notesMataJson = readNotesMataJson(baseDir) || {};
  let ignoreDirs = notesMataJson.ignoreDirs || [];
  ignoreDirs = [...ignoreDirs, ...notesmeta.common_ignore_dirs];

  // console.log(args);
  if (args.updateREADME || args.update) {
    const updater = new ReadmeUpdater({
      repoName,
      baseDir,
      ignoreDirs,
    });
    updater.updateReadme();
    await syncLocalAndRemote(baseDir);
  }

  if (args.syncREADME || args.sync) {
    await syncLocalAndRemote(baseDir);
  }

  if (args.mergeREADME || args.merge) {
    mergeReadme(baseDir, ignoreDirs);
  }

  if (args.distributeREADME || args.distribute) {
    distributeReadme(baseDir);
  }
})();
