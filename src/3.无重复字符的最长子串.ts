/**
 * Created by Mobius on 2020/3/24 21:24.
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */
interface Result {
  len: number;
  str: string;
}

const lengthOfLongestSubstring = ( str: string ): number => {
  const arr: string[] = [];
  const result: Result = {
    len: 0,
    str: ''
  };
  for (const item of str) {
    if (arr.includes( item )) {
      const index = arr.indexOf( item );
      arr.splice( 0, index + 1 );
    }

    arr.push( item );
    if (result.len <= arr.length) {
      result.len = arr.length;
      result.str = arr.join( '' );
    }
  }
  return result.len;
};

const len: number = lengthOfLongestSubstring('pwwkew');
console.log(len);
