/**
 * Created by Zero<mobius_pan@yeah.net> on 2022/6/16 22:20.
 * @see https://leetcode.cn/problems/valid-parentheses/
 */
const isValid = (str: string): boolean => {
  const map: Map<string, string> = new Map([
    [']', '['],
    ['}', '{'],
    [')', '('],
  ]);

  const stack: string[] = [];
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      if (stack[stack.length - 1] !== map.get(str[i])) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(str[i]);
    }
  }
  return stack.length === 0;
};
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('([)]'));
