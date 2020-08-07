const nums = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if(nums[i] > 4){
        break;
    }
    console.log(nums[i])
}

const nums2 = [1, 2, -8, 4, -11, 6, -7];

for (let i = 0; i < nums2.length; i++) {
    const element = nums2[i];
    if(nums2[i] < 0){
        continue;
    }
    console.log(nums2[i])
}

