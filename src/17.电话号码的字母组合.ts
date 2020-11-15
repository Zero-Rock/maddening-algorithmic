/**
 * Created by Mobius on 2020/3/24 22:31.
 * @see https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */
import { Num } from './common/enum';

interface StrMap {
  [ key: number ]: string[];
}

const letterCombinations = (digits: string): string[] => {
  const str = String(digits);
  const strMap: StrMap = {
    2: [ 'a', 'b', 'c' ],
    3: [ 'd', 'e', 'f' ],
    4: [ 'g', 'h', 'i' ],
    5: [ 'j', 'k', 'l' ],
    6: [ 'm', 'n', 'o' ],
    7: [ 'p', 'q', 'r', 's' ],
    8: [ 't', 'u', 'v' ],
    9: [ 'w', 'x', 'y', 'z' ],
    0: [ '_' ],
  };
  let list: string[] = [];
  for (let i = 0; i < str.length; i ++) {
    const num: number = parseInt(str[ i ], Num.ten);
    if (num === 1) {
      continue;
    }
    if (!list.length) {
      list = strMap[ num ];
    } else {
      const tempList = [];
      for (let j = 0; j < list.length; j ++) {
        for (let k = 0; k < strMap[ num ].length; k ++) {
          tempList.push(list[ j ] + strMap[ num ][ k ]);
        }
      }
      list = tempList;
    }
  }
  return list;
};
