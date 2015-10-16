// include gulp
var gulp = require('gulp'); 

// include plug-ins
var plugins     = require('gulp-load-plugins')();
var del         = require('del');
var wiredep     = require('wiredep').stream;
var runSequence = require('run-sequence');

// empty folders before building for mobile
gulp.task('clean', function () {
  return del([
    '.tmp/**/*', 
    'www/**/*'
  ]);
});

// inject bower components into the app (web)
gulp.task('wiredep:web', function () {
  return gulp.src('app/index.html')
    .pipe( wiredep({
      devDependencies: true,  // for angular-mocks.js, to mock HTTP response from API
      ignorePath:  /\.\.\//
    }) )
    .pipe( gulp.dest('.tmp') );
});

// coompile CoffeeScript to JavaScript
// add source maps
gulp.task('coffee', function() {
  return gulp.src('app/scripts/**/*.coffee')
    .pipe( plugins.sourcemaps.init() )
    .pipe( plugins.coffee({ bare: true }).on('error', plugins.util.log) )
    .pipe( plugins.sourcemaps.write('.') )
    .pipe( gulp.dest('.tmp/js') )
});

// pre-process SASS to CSS
// add vendor prefixes and source maps
gulp.task('sass', function () {
  return gulp.src('app/styles/**/*.scss')
    .pipe( plugins.sourcemaps.init() )
    .pipe( plugins.sass().on('error', plugins.sass.logError) )
    .pipe( plugins.autoprefixer({ browsers: ['last 2 versions'] }) )
    .pipe( plugins.sourcemaps.write('.') )
    .pipe( gulp.dest('.tmp/css') );
});

gulp.task('usemin', function() {
  gulp.src('.tmp/index.html')
    .pipe( plugins.usemin({
      // assetsDir: 'www',
      // css:        [ plugins.rev() ],
      html:       [ plugins.minifyHtml({ empty: true }) ],
      js:         [ plugins.uglify() ],
      inlinejs:   [ plugins.uglify() ],
      inlinecss:  [ plugins.minifyCss(), 'concat' ]
    }) )
    .pipe( gulp.dest('www') );
});

// connect to local server for development
gulp.task('connect', function() {
  plugins.connect.server({
    port: 9000,
    root: ['www', '.tmp'],
    livereload: true
  });
});

// reload html files
gulp.task('reload-html', function () {
  gulp.src('./app/*.html')
    .pipe( plugins.connect.reload() );
});

// watch for changes and reload
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['reload-html']);
});

// development
gulp.task('serve', function () {
  runSequence(
    'clean',
    ['wiredep:web', 'coffee', 'sass'],
    'usemin'
    // 'connect', 
    // 'watch'
  );
});