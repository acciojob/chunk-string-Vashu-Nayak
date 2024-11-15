function stringChop(str, size) {
  // your code here
	let ar=[];
	let s=0
	if(str===null || str.length==0) return ar
	
	while(s<str.length){
		ar.push(str.slice(s,s+size))
		s+=size
	}
	return ar
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
