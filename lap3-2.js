function month(m) {
    if (m >= 1 && m <= 3) {
      console.log("quý 1");
    } else if (m >= 4 && m <= 6) {
      console.log("quý 2");
    } else if (m >= 7 && m <= 9) {
      console.log("quý 3");
    } else if (m >= 10 && m <= 12) {
      console.log("quý 4");
    }else{
        console.log("không xác định");
    }
    
}
month(15)