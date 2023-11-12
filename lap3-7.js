function kiemtrasnt(n) {
  
  if (n < 2) {
    return  false;
  } else {
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
        
      }
    }
  }
  
 return true;
}

function sangsnt(n) {
    for (let i=2;i<n;i++) {
        if (kiemtrasnt(i)) {
            console.log(i);
        }
        
    }
    
}
sangsnt(20)