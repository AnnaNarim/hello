 const stars=function(n) {
    if(n===0)
    {
    	return '';
    }
    return stars(n-1)+'*';
  };
  
  const space=function(m) {
    if (m===0)
    { 
      return '';
    }
    return space(m-1)+' ';
  };
  const triangleStars=function(s) {
    if (s===0)
    { return 0; }
    console.log(space(s-1)+stars((x-s)*2+1));
    return triangleStars(s-1);
  };	
  
  const x=5;
 triangleStars(x);
