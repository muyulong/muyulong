var oldTitle = document.title;
var titleTime; //標題恢復計時器
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.querySelector("[rel='icon']").setAttribute("href", "https://gitee.com/muyulong/blogpic/raw/master/image/202108220055275.png");
    document.title = "網站崩潰了！";
    clearTimeout(titleTime);
  } else {
    document.title = "其實並沒有！";
    document.querySelector("[rel='icon']").setAttribute("href", "/images/favicon.png");
    titleTime = setTimeout(function () {
      document.title = oldTitle;
    }, 1000);
  }
});