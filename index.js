/**
* hexo-tag-xvideos
* https://github.com/welksonramos/hexo-tag-xvideos
* Copyright (c) 2015-present, Welkson Ramos
* Licensed under the MIT license.
*
* Syntax:
* {% xvideos [video_id] %} or {% [video_id [width [height]]] %}
*/

const BASE_URL = 'http://flashservice.xvideos.com/embedframe';

// Configuration

hexo.config.xvideos = Object.assign({
  width: hexo.config.xvideos.width || 510,
  height: hexo.config.xvideos.height || 400
}, hexo.config.xvideos);

hexo.extend.tag.register('xvideos', (args) => {
  let video_id = args[0];
  let width = args[1] || hexo.config.xvideos.width;
  let height = args[2] || hexo.config.xvideos.height;

  let tag = `<iframe src=${BASE_URL}/${video_id} frameborder=0 width=${width} height=${height} scrolling=no></iframe>`;
  return tag;

}, { async: true });
