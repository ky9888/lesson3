function sum(n) {
    let sum=0;
    sum=1/2+1/4+1/2*(n-1)+1/2*n;
    for (let i=2;i<=2*n;i+=2) {
        sum+=1/i;
        console.log(sum);;
        
    }
    
}sum(3)