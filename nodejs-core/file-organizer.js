const fs = require("fs");

const path = require("path");
const sourcedir = path.join(__dirname, "output", "mesy-flies");
console.log("sourcedir" + sourcedir);
const organizedDir = path.join(__dirname, "output", "organized");
console.log("organizedDir" + organizedDir);

const categories = {
  images: [".jpg", ".jpeg", ".png", ".svg", ".gif", ".bmp", ".tiff", ".webp"],
  videos: [".mp4", ".mkv", ".mov", ".avi", ".flv", ".wmv", ".webm"],
  documents: [
    ".pdf",
    ".doc",
    ".docx",
    ".txt",
    ".xlsx",
    ".ppt",
    ".pptx",
    ".odt",
    ".csv",
  ],
  audio: [".mp3", ".wav", ".aac", ".flac", ".ogg", ".m4a"],
  archives: [".zip", ".rar", ".7z", ".tar", ".gz", ".bz2", ".iso"],
  code: [
    ".js",
    ".ts",
    ".py",
    ".java",
    ".cpp",
    ".c",
    ".cs",
    ".html",
    ".css",
    ".json",
    ".php",
  ],
  fonts: [".ttf", ".otf", ".woff", ".woff2"],
  executables: [".exe", ".msi", ".bat", ".sh", ".app"],
};

const testFiles = [
  "vacation.jpg",
  "profile.png",
  "song.mp3",
  "document.pdf",
  "movie.mp4",
  "presentation.pptx",
  "archive.zip",
  "image.jpeg",
  "vector.svg",
  "notes.txt",
  "spreadsheet.xlsx",
  "clip.mkv",
  "script.js",
  "style.css",
  "report.odt",
  "audio.flac",
  "installer.exe",
  "font.woff2",
  "animation.gif",
  "backup.tar.gz",
];
function initializeDirectories() {
  if (!fs.existsSync(sourcedir)) {
    fs.mkdirSync(sourcedir, { recursive: true });

    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourcedir, file), `content of ${file}`);
    });
  }
  console.log("Messy directoris files");

  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });
  }
  Object.keys(categories).forEach((category) => {
    const categorypath = path.join(organizedDir, category);
    if (!fs.existsSync(categorypath)) {
      fs.mkdirSync(categorypath);
    }
  });
}
// initializeDirectories()

function getCategory(filename) {
  const ext = path.extname(filename).toLocaleLowerCase();

  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) {
      return category;
    }
  }
  return "others";
}
function organizeFile() {
  console.log("File Organizer \n");
  console.log("source", sourcedir);
  console.log("Destination", organizedDir);
  console.log("\n" + "-".repeat(50) + "\n");
  const files = fs.readdirSync(sourcedir);
  if (files.length === 0) {
    console.log("No files to work on");
    return;
  }
  console.log(`Found ${files.length} files to organize`);

  const stats = {
    total: 0,
    byCategory: {},
  };
  files.forEach((file) => {
    const sourcePath = path.join(sourcedir, file);
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      return;
    }
    const category = getCategory(file);
    const destDir = path.join(organizedDir, category);
    const destPath = path.join(destDir, file);
    fs.copyFileSync(sourcePath, destPath);
    stats.total++;
    stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
    console.log(`${file}`);
    console.log(`${category}`);
    console.log(`${stat.size}`);
  });
}

function showHelp() {
  console.log(`
        File Organizer Usage:
        commands:\n 
        1.init- create files.
        2.organize- organize files into categories.
        `);
}

const command = process.argv[2];
switch (command) {
  case "init":
    initializeDirectories();
    break;
  case "organize":
    organizeFile();
    break;

  default:
    showHelp();
    break;
}
