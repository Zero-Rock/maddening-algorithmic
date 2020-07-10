/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/7/10 8:44 下午.
 */
const intersect = (nums1: number[], nums2: number[]) => {
  const list2map = (list: number[]) => {
    const map: Map<number, number> = new Map();
    list.forEach((num: number) => {
      const count = map.get(num) || 0;
      map.set(num, count + 1);
    });
    return map;
  };
  const map1 = list2map(nums1);
  const map2 = list2map(nums2);
  const res: number[] = [];
  map1.forEach((v1, k1) => {
    const v2 = map2.get(k1);
    if (v2) {
      const pushCount = Math.min(v1, v2);
      const arr = new Array(pushCount).fill(k1);
      res.push(...arr);
    }
  });
  return res;
};
