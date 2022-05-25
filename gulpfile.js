const gulp = require("gulp");
const ts = require("gulp-typescript");

const tsProject = ts.createProject("./tsconfig.json");

function tsc(cb) {
  gulp
    .src("./src/lib/**/*.{ts,tsx}")
    .pipe(tsProject())
    .pipe(gulp.dest("./lib"));
  cb();
}

function less(cb) {
  gulp.src("./src/lib/**/*.{less,css}").pipe(gulp.dest("./lib"));
  cb();
}

exports.build = gulp.series(tsc,less);
