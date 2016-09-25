 const factorial=function (n) {
    if(n===0)
      return 1;
    
    return  n * factorial(n - 1);
};
  const a=factorial(5)
  console.log(a);

