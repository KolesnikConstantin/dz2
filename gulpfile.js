var gulp = require('gulp'),
	connect = require('gulp-connect'),
	opn = require('opn');


/*Start server with LiveReload*/
gulp.task('connect', function() { 
		connect.server({
		root: 'app',
		livereload: true,
		port: 8880	
		});
	opn('http://localhost:8880');
	});


/*Deal with html*/
gulp.task('html', function() {
	gulp.src('./app/*.html')
	.pipe(connect.reload());
	});


/*Deal with css*/
gulp.task('css', function() {
	gulp.src('./app/css/*.css')
	.pipe(connect.reload());
	});


/*Deal with js*/
gulp.task('js', function() {
	gulp.src('./app/js/*.js')
	.pipe(connect.reload());
	});


/*Keep an eye on it*/
gulp.task('watch', function() {
	gulp.watch(['./app/*.html'], ['html']);
	gulp.watch(['./app/css/*.css'], ['css']);
	gulp.watch(['./app/js/*.js'], ['js']);
});


/*Task by default*/
gulp.task('default', ['connect', 'watch']);