### Q5_apply-transform-over-each-element-in-array: apply-transform-over-each-element-in-array

**Prompt:**  
Question for LEETCODE 30-DAY-JS
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
**Example 1:**

```
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
```

**Example 2:**

```
Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
```

**Example 3:**

```
Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
```

**Approach:**  
Used for loop to iterate over the given array, then passed the array element and its index to the function as arguments, while pushing the result in an newArray which was initialized at the start as well.
