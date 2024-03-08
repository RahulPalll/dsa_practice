function merge(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const prev = merged[merged.length - 1];
    const current = intervals[i];

    if (prev[1] >= current[0]) {
      merged[merged.length - 1] = [prev[0], Math.max(prev[1], current[1])];
    } else {
      merged.push(current);
    }
  }

  return merged;
}

const intervals1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals1));

const intervals2 = [
  [1, 4],
  [4, 5],
];
console.log(merge(intervals2));
