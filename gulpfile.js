// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")(require("sass"));

// ejs
var rename = require("gulp-rename");
var ejs = require("gulp-ejs");
var replace = require("gulp-replace");

// scssとejsの監視タスクを作成する（Ctrl+Cで終了）
gulp.task("default", function() {
    // scss監視
    gulp.watch("css/*.scss", gulp.series("sass"));
    // ejs監視
    gulp.watch("ejs/*.ejs", gulp.series("ejs"));
    gulp.watch("ejs/**/*.ejs", gulp.series("ejs"));
});

// Sassコンパイル
gulp.task("sass", function() {
    return gulp.src("css/*.scss")
        // Sassのコンパイルを実行
        .pipe(
            sass({
                outputStyle: "expanded"
            })
            // Sassのコンパイルエラーを表示
            // (これがないと自動的に止まってしまう)
            .on("error", sass.logError)
        )
        // cssフォルダー以下に保存
        .pipe(gulp.dest("css"))
});

// EJSコンパイル
gulp.task('ejs', (done) => {
    gulp
        .src(["ejs/**/*.ejs", "!ejs/**/_*.ejs"])
        .pipe(ejs({}, {}, { ext: ".html" }))
        .pipe(rename({ extname: ".html" }))
        // .pipe(replace(/^[ \t]*\n/gmi, ""))
        .pipe(replace(/[\s\S]*?(<!DOCTYPE)/, "$1"))
        .pipe(gulp.dest("./"));
    done();
});