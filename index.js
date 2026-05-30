/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

let remembered

function id() {
  // e.g. return "UP654321";
  return 'UP2262427';
}

function fn() {
  return 'Adam';
}

function sn() {
  return 'Nettleship';
}

function add(a,b) {
  let sum = a + b 
  return sum
}

function subtract(a,b) {
  let sub = a - b 
  return sub
}

function checkObject (obj) {
  obj.checked = true
}

//Create a `checkObjectInside` function that accepts an object called `obj` as a parameter and if that object has an object value in its `data` property, it sets *that* inner object's property `checked` to `true

function checkObjectInside(obj) {
  if (obj.data !== null && typeof obj.data === 'object') {
    obj.data.checked = true;
  }
}

function arraySet(arr, i, n) {
  if (Number.isInteger(i) && arr.length > i && i >= 0) {
    arr.splice(i, 1, n);
  }
}

function addAll(arr) {
  let sum = 0
  arr.forEach(element => {
    sum = sum + element
  });
  return sum
}

function larger(a, b) {
  if (a >= b) {
    return a
  }
  else {
    return b
  }
}

function largest(arr) {
  if (arr.length > 0) {
    let largest = arr[0]
    arr.forEach(element => {
      if (element > largest){
        largest = element
      }
    })
    return largest
  } 
  else {
    return null
  }
}

function compare(a, b) {
  let identical = true
  if (a.length == b.length) {
    for (let i = 0; i <a.length; i++) {
      if (a[i] != b[i]) {
        identical = false
      }
    }
  }
  else {
    identical = false
  }
  return identical
}

function addToAll(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + n
  }
  return arr
}

function rememberThis(keepsake) {
 remembered = keepsake
}

function nArray(n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr
}

function addAllOpt(arr) {
  let sum = 0
  if (typeof arr !== 'object') {
    return 0
  }
  arr.forEach(element => {
    sum = sum + element
  });
  return sum
}

function divisors(arr, div) {
  let arr2 = []
  arr.forEach(element => {
    if (element % div == 0) {
      arr2.push(element)
    }
  })
  return arr2
}

function multiples(n, m) {
  let arr = []
  for(let i = 1; i <= n; i++) {
    arr.push(i*m)
  }
  return arr
}