/**
 * 根据rss 抓取新浪新闻
 * @type {[type]}
 */
var fetchUrl = require("fetch").fetchUrl;
var parser = require('xml2json');
var common = require('./common');
var fs = require('fs');

//前后转化的key值,配置格式，转化key|转化后key
var formatMaps = [
	'title,title',
	'link,link',
	'author,author',
	'pubDate,pubDate',
	'description,des'
];

/**
 * [sinaRss description]
 * @options {object} options.file 
 */
exports.sinaRss = function(path,options){
	fetchUrl(path, function(error, meta, body){
	    if(!error){
		    var ct = body.toString();
		    var json = JSON.parse(parser.toJson(ct));
		    var items = json.rss && json.rss.channel && json.rss.channel.item;

		    //保存数据
		    console.log(items);
		    var formatItems = common.formatDatas(items,formatMaps);

		    console.log(formatItems);

		    if(options.file){
		    	fs.writeFile('../rss/sina/'+common.fortmatDate('yyyymmdd')+ options.file ,JSON.stringify(formatItems),function(){
		    		console.log('写入数据成功！');
		    	});
		    }

	    }else{
	    	//todo:log 抓取错误日志
	    	console.log('抓取错误！');
	    }  
	});
};