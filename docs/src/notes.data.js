import fs from "node:fs";

export default {
  watch: ["./*.md"],
  load(watchedFiles) {
    // watchFiles 是一个所匹配文件的绝对路径的数组。
    // 生成一个博客文章元数据数组
    // 可用于在主题布局中呈现列表。
    const notesData = {};
    watchedFiles.forEach((file) => {
      // console.log('file:', file)
      // file: docs/src/canvas.md
      // file: docs/src/electron.md
      const title = file.split("/").pop().replace(/\.md$/, ""); // notes title
      notesData[title] = fs.readFileSync(file, "utf-8");
    });
    return notesData
  },
};
