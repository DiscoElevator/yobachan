"use strict";

const gulp = require("gulp");
const browserify = require("browserify");
const tsify = require("tsify");
const source = require("vinyl-source-stream");
const ng2Inline = require("gulp-inline-ng2-template");
const del = require("del");
const ng2TemplateParser = require("gulp-inline-ng2-template/parser");
const through = require("through2");

function inlineTemplates(file) {
  return through(function (buf, enc, next){
      ng2TemplateParser({contents: buf, path: file}, {useRelativePaths: true})((err, result) => {
      this.push(result);
      process.nextTick(next);
    });
  });
}

const DIST_DIR = "public";
const SRC_DIR = "client";

gulp.task("clean", () => {
	return del([DIST_DIR]);
});

gulp.task("assets", ["clean"], () => {
	return gulp.src([SRC_DIR + "/index.html", "node_modules/zone.js/dist/zone.min.js"])
		.pipe(gulp.dest(DIST_DIR));
});

gulp.task("build", ["clean"], () => {
	let bundler = browserify(SRC_DIR + "/main.ts")
			.plugin(tsify)
			.transform(inlineTemplates);
	return bundler
		.bundle()
		.pipe(source("app.js"))
		.pipe(gulp.dest(DIST_DIR));
});

gulp.task("default", ["clean", "build", "assets"]);