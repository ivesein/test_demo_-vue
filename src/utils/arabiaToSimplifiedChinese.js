/**
 *阿拉伯数字转换为简写汉字 最多4位
 *处理remarks信息中的阿拉伯数字
 * @param {String} Num   字符串整数 "100"
 * @author zfq
 */
export const arabiaToSimplifiedChinese = Num => {
  let numReg = /^[1-9]{1}[0-9]*$/gi;
  if (numReg.test(Num)) {
    let arr = Num.split("");
    //先将每位阿拉伯数字转为中文数字
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case "0":
          arr[i] = "零";
          break;
        case "1":
          arr[i] = "一";
          break;
        case "2":
          arr[i] = "二";
          break;
        case "3":
          arr[i] = "三";
          break;
        case "4":
          arr[i] = "四";
          break;
        case "5":
          arr[i] = "五";
          break;
        case "6":
          arr[i] = "六";
          break;
        case "7":
          arr[i] = "七";
          break;
        case "8":
          arr[i] = "八";
          break;
        case "9":
          arr[i] = "九";
          break;
      }
    }
    //判断位数 改每位的读法
    switch (arr.length) {
      case 1:
        break;
      case 2:
        arr[0] = arr[0] == "一" ? "十" : arr[0] + "十";
        arr[1] = arr[1] == "零" ? "" : arr[1];
        break;
      case 3:
        arr[0] = arr[0] + "百";
        arr[1] = arr[1] == "零" ? "零" : arr[1] + "十";
        arr[2] = arr[2] == "零" ? "" : arr[2];
        break;
      case 4:
        arr[0] = arr[0] + "千";
        arr[1] = arr[1] == "零" ? "零" : arr[1] + "百";
        arr[2] = arr[2] == "零" ? "零" : arr[2] + "十";
        arr[3] = arr[3] == "零" ? "" : arr[3];
        break;
    }
    //去掉最后一位的零
    while (arr[arr.length - 1] == "" || arr[arr.length - 1] == "零") {
      arr.pop();
    }
    return arr.join("");
  } else {
    console.log("请输入数字");
  }
};
