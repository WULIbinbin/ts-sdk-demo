const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('./tsconfig.json');

function tsc(cb) {
  gulp.src('./src/**/*.{ts,tsx}').pipe(tsProject())
    .pipe(gulp.dest('./lib'));
  cb();
}

exports.build = gulp.series(tsc);
