'use strict';

module.exports = function() {

  $.gulp.task('copy:js', function() {
    return $.gulp.src([
      'src/js/uncompressed.js',
      'src/js/projects-map.js',
      'src/js/contacts-map.js'
    ])
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })

};
