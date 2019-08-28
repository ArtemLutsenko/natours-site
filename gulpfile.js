const gulp = require("gulp");
const sass = require("gulp-sass");
const soutceMaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");

sass.compiler = require("node-sass");

gulp.task("sass-compiler", function() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(soutceMaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(soutceMaps.write('./'))
    .pipe(gulp.dest("./css"));
});

gulp.task("watch", function() {
  gulp.watch("./sass/**/*.scss", gulp.series("sass-compiler"));
});
