function rank(arrs){
	if(arrs.length <= 1){
		return arrs;
	}
	var len = arrs.length;
	var m = parseInt((len - 1) / 2);
	var left = new Array();
	var right = new Array();
	for(var i = 0;i < len;i ++){
		if(arrs[i] < arrs[m]){
			left.push(arrs[i]);
		}else if(arrs[i] != arrs[m]){
			right.push(arrs[i]);
		}
	}
	return rank(left).concat([arrs[m]],rank(right));
}