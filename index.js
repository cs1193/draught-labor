'use strict';

import gulp from 'gulp';
import clean from 'tasks/base/clean.js';

((gulp) => {

	gulp.task('clean', clean);

	gulp.task('default', ['clean']);

})(gulp)

gulp.start('default');