/**
 * Created by Zero on 2020/3/24 21:24.
 * @see https://leetcode.cn/problems/longest-substring-without-repeating-characters
 */
interface IResult {
  len: number;
  str: string;
}

export const lengthOfLongestSubstring = (str: string): number => {
  const arr: string[] = [];
  const result: IResult = {
    len: 0,
    str: '',
  };
  for (const item of str) {
    if (arr.includes(item)) {
      const index = arr.indexOf(item);
      arr.splice(0, index + 1);
    }

    arr.push(item);
    if (result.len <= arr.length) {
      result.len = arr.length;
      result.str = arr.join('');
    }
  }
  return result.len;
};
