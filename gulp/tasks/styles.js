var gulp = require('gulp'),
 postcss = require('gulp-postcss'),
 autoprefixer = require('autoprefixer'),
 cssvars = require('postcss-simple-vars'),
 nested = require('postcss-nested'),
 cssimport = require('postcss-import'),
 mixin = require('postcss-mixins');

gulp.task('css', function(){
   return  gulp.src('./app/assets/styles/styles.css')
   .pipe(postcss([cssimport, mixin, cssvars, nested, autoprefixer]))
   .on('error', function(errorinfo) {
    console.log(errorinfo.toString());
    this.emit('end');
   })
   .pipe(gulp.dest('./app/temp/styles'));
   
});