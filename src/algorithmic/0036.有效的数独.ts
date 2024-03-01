/**
 * Created by Zero on 2020/3/24 21:38.
 * @see https://leetcode.cn/problems/valid-sudoku/
 */
import { Num } from './common/enum';

export const isValidSudoku = (board: string[][]): boolean => {
  const row: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const col: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const square: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let rIndex = 0; rIndex < Num.nine; rIndex++) {
    for (let cIndex = 0; cIndex < Num.nine; cIndex++) {
      if (board[rIndex][cIndex] === '.') {
        continue;
      }
      const ele: number = Number(board[rIndex][cIndex]);
      const sIndex: number =
        ((rIndex - (rIndex % Num.three)) / Num.three) * Num.three + (cIndex - (cIndex % Num.three)) / Num.three;
      if ((row[rIndex] >> ele) & 1 || (col[cIndex] >> ele) & 1 || (square[sIndex] >> ele) & 1) {
        return false;
      } else {
        const temp = 1 << ele;
        row[rIndex] += temp;
        col[cIndex] += temp;
        square[sIndex] += temp;
      }
    }
  }
  return true;
};
