var A = [1, 10, 3, 11, 6, 15];
var N = A.length;

const Find = (A, N) => {
  var res = 1;

  for (var i = 0; i < N && A[i] <= res; i++) result = res + A[i];

  return result;
};

document.getElementById("find").innerHTML =
  "Smallest Positive integer is (" + Find(A, N) + ").";
