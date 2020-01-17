/*
 * @Description:
 * @Version:
 * @Company: ZD
 * @Author: Ivesein Zhang
 * @Date: 2019-09-02 18:36:41
 * @LastEditors: Ivesein Zhang
 * @LastEditTime: 2019-09-03 09:24:26
 */
import html2canvas from "html2canvas";
/**
 * 将html标签转换成图片
 * 实现封面，扉页目录的图片转换
 * @param tag 转换的标签元素
 * @return data base64图片格式
 * @author sjf from zfq
 */
export const screenShot = element => {
  return new Promise((resolve, reject) => {
    html2canvas(element, {
      dpi: 300
    }).then(
      function(canvas) {
        var dataUrl = canvas.toDataURL("image/png", 1.0);
        resolve(dataUrl);
      },
      err => {
        reject(err);
      }
    );
  });
};
