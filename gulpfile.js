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

// concatenate JavaScript - your code
gulp.task('concat-js', function() {
  return gulp.src(
    [ 
      'app.js',
      'router.js',
      'interceptors/authenticated_interceptor.js',
      'interceptors/unauthenticated_interceptor.js',
      'controllers/home_ctrl.js',
      'controllers/about_ctrl.js' 
    ], { 
      cwd: '.tmp/js' 
    })
    .pipe( plugins.sourcemaps.init({ loadMaps: true }) )
      .pipe( plugins.concat('scripts.js') )
    .pipe( plugins.sourcemaps.write('.') )
    .pipe( gulp.dest('www') );
});

// concatenate JavaScript - vendor scripts (bower_components)
gulp.task('concat-js-vendor', function() {
  return gulp.src(
    [ 
      'angular/angular.js',
      'angular-animate/angular-animate.js',
      'angular-sanitize/angular-sanitize.js',
      'angular-ui-router/release/angular-ui-router.js',
      'ionic/js/ionic.js',
      'ionic/js/ionic-angular.js',
      'angular-cookies/angular-cookies.js',
      'angular-resource/angular-resource.js',
      'angular-touch/angular-touch.js',
      'angular-mocks/angular-mocks.js' 
    ], { 
      cwd: 'bower_components' 
    })
    .pipe( plugins.sourcemaps.init() )
      .pipe( plugins.concat('vendor.js') )
    .pipe( plugins.sourcemaps.write('.') )
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
    'concat-js',
    'concat-js-vendor'
    // 'connect', 
    // 'watch'
  );
});