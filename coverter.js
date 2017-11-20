/*
English to Bangla number converter
*/

var bengaliNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

jQuery(selectorList).text(function(i, v) {
  var chars = v.split('');
  for (var i = 0; i < chars.length; i++) {
    if (/\d/.test(chars[i])) {
      chars[i] = bengaliNumbers[chars[i]];
    }
  }
  return chars.join('');
});
