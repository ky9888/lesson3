function slUocSoChan(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      if (i % 2 == 0) {
        sum ++;
        console.log(sum);
      }
    }
  }
}
slUocSoChan(10);
