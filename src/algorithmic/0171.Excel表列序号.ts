/**
 * @see https://leetcode.cn/problems/excel-sheet-column-number/solutions/904114/171-excelbiao-lie-xu-hao-by-dazzle-gin-hrsc/
 */
export const titleToNumber = (columnTitle: string): number => {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    result = result * 26 + (columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0)) + 1;
  }
  return result;
};
