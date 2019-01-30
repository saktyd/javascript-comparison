function process(parameterA) {
  if (parameterA >= 90 && parameterA < 100) {
    return 'A';
  } else if (parameterA >= 80 && parameterA < 90) {
    return 'B';
  } else if (parameterA >= 70 && parameterA < 80) {
    return 'C';
  } else if (parameterA >= 60 && parameterA < 70) {
    return 'D';
  } else {
    return 'E';
  }
}

console.log(process(86));
