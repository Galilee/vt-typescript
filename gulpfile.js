var gulp = require('gulp');
var gutil = require("gulp-util");

var ts = require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json");

var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var paths = {
    pages: ['src/*.html']
};

var watchify = require("watchify");

// compile ts to js 
gulp.task('ts-compile', function() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

function bundle() {
    console.log('bundle...');
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
}


// compile ts to js and browserify 
gulp.task('browserify', function() {
    return bundle();
});

// move html files to the dist dir
gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["copy-html", "browserify"]);
watchedBrowserify.on("update", bundle);
