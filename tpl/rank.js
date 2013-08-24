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
		}else if(i != m){
			right.push(arrs[i]);
		}
	}
	return rank(left).concat([arrs[m]],rank(right));
}

function rank2(arrs){
	var len = arrs.length;
	var i = 0;
	var j = len - 1;
	var temp = arrs[0];
	var left = new Array();
	var right = new Array();
	var p = 0;
	for(var k = 0;k < len; k ++){
		if(arrs[k] < temp){
			left.push(arrs[k]);
			p ++;
		}else if(k != 0){
			right.push(arrs[k]);
		}
	}
	arrs = left.concat(right).concat(right);return arrs;
	while(i != j){
		
	}
}