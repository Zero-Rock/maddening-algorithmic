/**
 * Created by Mobius on 2020/3/24 22:53.
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 */
const longestPalindrome = ( str: string ): string => {
  const strLen: number = str.length;
  let res: string = '';
  const map: (number | boolean)[][] = Array.from( new Array( strLen ), () => new Array( strLen ).fill( 0 ) );
  for (let i = strLen - 1; i >= 0; i --) {
    for (let j = i; j < strLen; j ++) {
      map[ i ][ j ] = str[ i ] === str[ j ] && (j - i < 2 || map[ i + 1 ][ j - 1 ]);
      if (map[ i ][ j ] && j - i + 1 > res.length) {
        res = str.substring( i, j + 1 );
      }
    }
  }
  return res;
};
console.log( longestPalindrome( 'aasdfghahg' ) );
