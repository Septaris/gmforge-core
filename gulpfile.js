//gulpfile.js
const gulp = require('gulp');
const concat = require('gulp-concat');

//script paths
const jsDest = 'public/bin';
const coreFiles = 'src/scripts/**/*.js';
const standaloneFiles = 'src/standalone/**/*.js';

gulp.task('core', () => (
  gulp.src(coreFiles)
    .pipe(concat('core.js'))
    .pipe(gulp.dest(jsDest))
));

gulp.task('standalone', () => (
  gulp.src(standaloneFiles)
    .pipe(concat('standalone.js'))
    .pipe(gulp.dest(jsDest))
));

gulp.task('core.min', () => (
  gulp.src(coreFiles)
    .pipe(concat('core.js'))
    .pipe(gulp.dest(jsDest))
));

gulp.task('all', gulp.series('core', 'standalone'));
