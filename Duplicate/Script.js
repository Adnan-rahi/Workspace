var A = [1, 2, 2, 4];
var smallest;
var maximum;
let missing = [];
function FindMissing(A) {
  smallest = Math.min(...A);
  maximum = Math.max(...A);
  for (i = smallest; i <= maximum; i++) {
    if (A.indexOf(i) < 0) {
      document.getElementById("root").innerHTML = i + " is missing <br.";
      A.push(i);
    }
  }
}
for (var i = 0; i < A.length; i++) {
  for (var j = 0; j < i; j++) {
    if (A[i] === A[j]) {
      document.write("Element " + A[i] + " is repeated <br><br><br>");
      A[j] = FindMissing(A);
    }
  }
}
A.sort();
for (var i = 0; i < A.length; i++) {
  document.write(A[i]);
}
