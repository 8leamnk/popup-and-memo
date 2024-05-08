interface Data {
  id: number;
}

export function bubbleSort<T extends Data>(arr: T[]) {
  const result = [...arr];

  for (let i = result.length; i > 0; i -= 1) {
    let noSwap = true;

    for (let j = 0; j < i - 1; j += 1) {
      if (result[j].id > result[j + 1].id) {
        [result[j + 1], result[j]] = [result[j], result[j + 1]];
        noSwap = false;
      }
    }

    if (noSwap) break;
  }

  return result;
}
