var sinaRss = require('./rss_sina').sinaRss;


//抓取英超数据
sinaRss('http://rss.sina.com.cn/sports/global/england.xml',{
	file:'_sina_yc.json'
});

//抓取西甲数据
sinaRss('http://rss.sina.com.cn/sports/global/spain.xml',{
	file:'_sina_xj.json'
});

//法甲 德甲
sinaRss('http://rss.sina.com.cn/sports/global/germanyfrance.xml',{
	file:'_sina_fjdj.json'
});

//意甲
sinaRss('http://rss.sina.com.cn/sports/global/italy.xml',{
	file:'_sina_yj.json'
});

//国际足球
sinaRss('http://rss.sina.com.cn/sports/global/focus.xml',{
	file:'_sina_gjzq.json'
});

