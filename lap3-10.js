function soHoanThien(n) {
  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sum += i;
   
    }
  }
  if (sum == n) {
    console.log(n + " " + "là số hoàn thiện");
  } else {
    console.log(n + " " + "ko phải là số hoàn thiện");
  }
}
soHoanThien(20);
