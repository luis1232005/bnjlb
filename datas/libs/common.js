/**
 * 统一处理函数
 */


exports.formatDatas = function(datas,maps){
	if(!maps)
		return datas;

	var len = maps.length,
		datasLen = datas.length,
		formatAry = [],
		opt,
		item,
		item1,
		key1,
		key2;

	for(var j=0;j<datasLen;j++){
		item1 = datas[j];
		opt = {};
		for(var i=0;i<len;i++){
			item = maps[i].split(',');
			key1 = item[0];
			key2 = item[1];
			opt[key2] = item1[key1];
		}

		formatAry.push(opt);
	}

	return formatAry;
}

exports.fortmatDate = function(date,formater){
	var dateFormat = require('dateformat');
	if(arguments.length<=1){
		formater = date;
		date = new Date();
	}
	return dateFormat(date,formater);
}