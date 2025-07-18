export function getPaginationRange(currentPage: number, totalPages: number, delta = 2): (number | "...")[] {
  const range: (number | "...")[] = [];

  const left = Math.max(2, currentPage - delta);
  const right = Math.min(totalPages - 1, currentPage + delta);

  range.push(1);

  if (left > 2) {
    range.push("...");
  } else {
    for (let i = 2; i < left; i++) {
      range.push(i);
    }
  }

  for (let i = left; i <= right; i++) {
    range.push(i);
  }

  if (right < totalPages - 1) {
    range.push("...");
  }

  if (totalPages > 1) {
    range.push(totalPages);
  }

  return range;
}
