tripleflag = function(name, array, resultbox){
	switch (randfloat(0,2)){
		case 0:
			resultbox = "t";
			break;
		case 1:
			resultbox = "d";
			break;
		case 2:
			resultbox = "f";
			break;
	}
	return resultbox;
};