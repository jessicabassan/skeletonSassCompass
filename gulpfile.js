'use strict';

// System requirements:
var gulp 			= require('gulp');
var sass 			= require('gulp-sass');
var compass         = require('gulp-compass');
var minifyCSS       = require('gulp-csso');
var sourcemaps 		= require('gulp-sourcemaps');
var autoprefixer 	= require('gulp-autoprefixer');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');

// Output files: 
var css_output 		= './assets/css';
var js_output       = './assets/js';

// Lê o conteúdo da estrutura do SCSS, gera auto-prefixer e source-maps, minifica o código e devolve CSS 
gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(compass({config_file: './assets/config.rb',
      css: './assets/css',
      sass: './assets/sass'
    }))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(minifyCSS())
    .pipe(gulp.dest(css_output));
});

// Escuta alterações SCSS em toda estrutura de pastas/sub-pastas e invoca a task sass.
gulp.task('sass:watch', function () {
	gulp.watch('./assets/sass/**/*.scss', ['sass'])
	.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});

// JS files: 
var jquery      = './node_modules/jquery/dist/jquery.js';
var popper      = './node_modules/popper/dist/index.js';
var tether      = './node_modules/tether/dist/js/tether.js';
var bootstrap   = './node_modules/bootstrap/dist/js/bootstrap.js';
var scripts     = './assets/scripts/scripts.js';
// Cria um único arquivo JS minificado
gulp.task('scripts', function() {
    return gulp.src([ 
        jquery,
        popper,
        tether,
        bootstrap,
        scripts
    ])
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest(js_output));
});