import del from 'del';
import vinylPaths from 'vinyl-paths';
import stripDebug from 'gulp-strip-debug';

export function clean () {
	return gulp.src('dist/**/*')
		.pipe(vinylPaths(del))
		.pipe(stripDebug())
		.pipe(gulp.dest('.tmp/remove/'));
}