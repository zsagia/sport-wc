var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var gulpPrint = require('gulp-print');

gulp.task('build', function() {
	return gulp
		.src('./src/**/*.js')
		.pipe(gulpPrint())
		.pipe(jshint())
		.pipe(jscs())
		.pipe(jshint.reporter('jshint-stylish', {verbose: true}))
		.pipe(jshint.reporter('fail'));
});

gulp.task('source-format', function() {
	return gulp.
		src('./src/**/*.js')
		.pipe(gulpPrint())
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish', {verbose: true}));
});