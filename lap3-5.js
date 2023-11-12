function luythua(x,n) {
    let T = 0;
    T=Math.pow(x,n);
   
    
    for (let i=1;i<=n;i++) {
        T*=x;
        console.log(T);
        
    }
    
}luythua(3,2)