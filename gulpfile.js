// include gulp
var gulp = require('gulp'); 

// include plug-ins
var plugins = require('gulp-load-plugins')();
var del     = require('del');
var wiredep = require('wiredep').stream;

// empty folders before building for mobile
gulp.task('clean', function () {
  return del([
    '.tmp/**', '!.tmp', // ** includes the parent dir
    'www/**', '!www'
  ]);
});

// inject bower components into the app (web)
gulp.task('wiredep:web', function () {
  gulp.src('./app/index.html')
    .pipe( wiredep({
      devDependencies: true,  // for angular-mocks.js, to mock HTTP response from API
      ignorePath:  /\.\.\//
    }) )
    .pipe( gulp.dest('./www') );
});

// coompile CoffeeScript to JavaScript
// add source maps
gulp.task('coffee', function() {
  gulp.src('./app/scripts/**/*.coffee')
    .pipe( plugins.sourcemaps.init() )
    .pipe( plugins.coffee({ bare: true }).on('error', plugins.util.log) )
    .pipe( plugins.sourcemaps.write('.') )
    .pipe( gulp.dest('./.tmp/js/') )
});

// pre-process SASS to CSS
// add vendor prefixes and source maps
gulp.task('sass', function () {
  gulp.src('./app/styles/**/*.scss')
    .pipe( plugins.sourcemaps.init() )
    .pipe( plugins.sass().on('error', plugins.sass.logError) )
    .pipe( plugins.autoprefixer({ browsers: ['last 2 versions'] }) )
    .pipe( plugins.sourcemaps.write('.') )
    .pipe( gulp.dest('./.tmp/css/') );
});

// connect to local server for development
gulp.task('connect', function() {
  plugins.connect.server({
    port: 9000,
    root: ['www', '.tmp'],
    livereload: true
  });
});

gulp.task('reload-html', function () {
  gulp.src('./app/*.html')
    .pipe( plugins.connect.reload() );
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['reload-html']);
});

// development
gulp.task('serve', [
  'clean',
  'wiredep:web',
  'connect', 
  'watch'
]);

// default gulp task
gulp.task('default', ['imagemin', 'htmlpage', 'scripts', 'styles'], function() {
   // watch for HTML changes
  gulp.watch('./src/*.html', ["htmlpage"]);
  // watch for JS changes
  gulp.watch('./src/scripts/*.js', ["jshint", "scripts"]);
  // watch for CSS changes
  gulp.watch('./src/styles/*.css', ["styles"]);
});