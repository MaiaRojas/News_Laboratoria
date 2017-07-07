//Leerá gulp para reconocer las tareas y ponerlas en el pipe
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');

var config = {
	source:'./src/',
	dist: './public/'
};

var paths = {
	assets: "assets/",
	html: "**/*.html",
	sass: "scss/**/*.scss",
	mainSass: "scss/main.scss",
	js: "js/**/*.js",
	fonts:"fonts",
	components:"js/components/*",
	mainJS: "js/app.js",
	img: "img/*.*",
  imgAuthors: "img/authors/*.*",
  imgNews: "img/news/*.*",
};

var sources = {
	assets: config.source + paths.assets,
	html: config.source + paths.html,
	sass: config.source + paths.assets + paths.sass,
	js: config.source + paths.assets +paths.js,
	fonts:config.source + paths.fonts,
	rootSass: config.source + paths.assets + paths.mainSass,
	rootJS: config.source + paths.assets + paths.mainJS,
	img: config.source + paths.assets + paths.img,
  imgAuthors: config.source + paths.assets + paths.imgAuthors,
  imgNews: config.source + paths.assets + paths.imgNews,
	components: config.source + paths.assets + paths.components,
};


gulp.task('img',function () {
	gulp.src(sources.img).pipe(gulp.dest(config.dist + paths.assets + "img"))

});
gulp.task('imgAuthors',function () {
	gulp.src(sources.imgAuthors).pipe(gulp.dest(config.dist + paths.assets + "img/authors"))

});
gulp.task('imgNews',function () {
	gulp.src(sources.imgNews).pipe(gulp.dest(config.dist + paths.assets + "img/news"))

});

gulp.task('fonts',function () {
	gulp.src(sources.fonts).pipe(gulp.dest(config.dist + paths.assets + "fonts"))

});

gulp.task('html', function () {
	gulp.src(sources.html).pipe(gulp.dest(config.dist))
});

gulp.task("sass", function () {
	gulp.src(sources.rootSass)
		.pipe(sass({
			outputStyle: "compressed"
		}).on("error", sass.logError))
		.pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task("js", function () {
	gulp.src(sources.rootJS)
		//.pipe(concat(sources.rootJS)
		.pipe(browserify())
		.pipe(rename("bundle.js"))
		.pipe(gulp.dest(config.dist + paths.assets + "js"));
});

gulp.task('components',function () {
	gulp.src(sources.components).pipe(gulp.dest(config.dist + paths.assets + "js/components"))

});

gulp.task("img-watch", ["img" , "imgAuthors","imgNews"], function (done) {
	browserSync.reload();
	done();
});

gulp.task("sass-watch", ["sass"], function (done) {
	browserSync.reload();
	done();
});

gulp.task("js-watch", ["js","components"], function (done) {
	browserSync.reload();
	done();
});

gulp.task("html-watch", ["html"], function (done) {
	browserSync.reload();
	done();
});

gulp.task("serve", function () {
  browserSync.init({
    server: {
      baseDir: config.dist
		}
  });
	gulp.watch(sources.html, ["html-watch"]);
	gulp.watch(sources.sass, ["sass-watch"]);
	gulp.watch(sources.js, ["js-watch"]);
  gulp.watch(sources.js, ["img-watch"]);

});

gulp.task('run', [ 'img','imgAuthors','imgNews','fonts','html','js','components','sass','serve']);
