/**
* hexo-tag-xvideos
* https://github.com/welksonramos/hexo-tag-xvideos
* Copyright (c) 2015-present, Welkson Ramos
* Licensed under the MIT license.
*
* Syntax:
* {% xvideos [video_id] %} or {% [video_id [width [height]]] %}
*/

hexo.extend.tag.register('xvideos', function (args) {
  let base = 'http://flashservice.xvideos.com/embedframe';
  let video_id = args[0];
  let width = args[1];
  let height = args[2];

  let config = hexo.config.xvideos || {};
  config.width = config.width || 510;
  config.height = config.height || 400;

  let tag = `<iframe src=${base}/${video_id}frameborder=0 width=${width}height=${height}scrolling=no></iframe>`;
  return tag;

});
