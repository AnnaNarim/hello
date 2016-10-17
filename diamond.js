const stars = function(x){
let a='';
for (let i = 0; i <=x; i++)
{
	a=a+'*';
}

return a;
}; 

const space = function(y){
let b='';
for (let i = 0; i<=y; i++)
{
	b=b+' ';
}

return b;
};

const diamond = function(z){
if(z%2 === 0) {  

z = z + 1;

}
for(let i = 0; i<=z; i=i+2)
{
	console.log( space((z-i)/2) + stars(i) );
}

for(let i = z-2; i>=1; i=i-2)
{
	console.log(space((z-i)/2) + stars(i-1));
}

};

diamond(4);