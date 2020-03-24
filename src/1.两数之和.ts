/**
 * Created by Mobius on 2020/3/24 20:15.
 */
interface Temp {
  [key:number]: number;
}
const twoSum = (nums: number[], target:number) => {
  const temp: Temp = {};
  for(let i=0; i<nums.length; i++){
    const tag = target - nums[i];
    if(temp[tag]>=0){
      return [ temp[tag] , i];
    }
    temp[nums[i]] = i;
  }
};
console.log(twoSum([1, 0, 1], 2));
