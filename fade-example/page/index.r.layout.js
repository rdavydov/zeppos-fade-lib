import { px } from "@zos/utils";
import { align, text_style } from '@zos/ui'

export const TITLE_STYLE = {
  x: px(96),
  y: px(100),
  w: px(288),
  h: px(46),
  color: 0xffff00,
  text_size: px(36),
  align_h: align.CENTER_H,
  align_v: align.CENTER_V,
  text_style: text_style.NONE,
}

export const IMG_STYLE = {
  x: px(480 - 160) / 2,
  y: px(480 - 160) / 2,
  w: px(160),
  h: px(160),
  auto_scale: true,
}

export const BUTTON_STYLE = {
  x: px(480 - 200) / 2,
  y: px(340),
  w: px(200),
  h: px(80),
  text_size: px(46),
  normal_color: 0x952030,
  press_color: 0xc55060,
  radius: 16,
}