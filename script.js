function stringChop(str, size) {
  // your code here
	let ar=[];
	let s=0
	if(str===null) return ar
	else if(str.length<size) return ar.push(str);
	while(s<str.length){
		ar.push(str.subString(s,s+size))
		s+=size
	}
	return ar
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
