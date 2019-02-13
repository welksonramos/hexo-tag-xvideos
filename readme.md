# Hexo-tag-Xvideos

[![npm version](https://img.shields.io/npm/v/hexo-tag-xvideos.svg)](https://www.npmjs.com/package/hexo-tag-xvideos) [![license](https://img.shields.io/npm/l/hexo-tag-xvideos.svg?style=flat)](https://raw.github.com/welksonramos/hexo-tag-xvideos/blob/master/LICENSE)

> Embeded [Xvideos](https://xvideos.com) player in Hexo posts/pages ( ͡°﻿ ͜ʖ ͡°)

## Installation

```bash
npm install --save hexo-tag-xvideos
```

## Usage

The full tag format is as follows:

```bash
{% xvideos [video_id [width [height]]] %}
```
Simple example:

```bash
{% xvideos 9764591 %}
```

## Options

You can configure the size of the video player in your main _config.yml:

Example configuration:

```yml
xvideos:
  width: 510 (default)
  height: 400 (default)
```

## License

&copy; Licensed under the MIT License.
