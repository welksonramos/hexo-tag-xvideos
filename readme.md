# About
> This is a [Hexo](http://hexo.io) tag plugin to include player [Xvideos](https://xvideos.com) on your pages / posts ( ͡°﻿ ͜ʖ ͡°)

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

## Configuration

You can configure the size of the video player in your main _config.yml:

Example configuration:

```yml
xvideos:
  width: 510 (default)
  height: 400 (default)
```

## License

Copyright (c) 2015, Welkson Ramos. Licensed under the [MIT](LICENSE) license.
