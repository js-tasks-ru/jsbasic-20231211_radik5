function checkSpam(str) {
  const regexp = /1xBet|XXX/i;
  return regexp.test(str);
}
