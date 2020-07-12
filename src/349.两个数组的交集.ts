const intersection = (num1: number[], num2: number[]) => {
  const map: Map<number, boolean> = new Map();
  return num1.filter((num: number) => {
    if (!map.has(num) && num2.includes(num)) {
      map.set(num, true);
      return true;
    }
  });
};

