var findDifference = function(nums1, nums2) {
    // Convert arrays to sets to remove duplicates
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    // Find elements in nums1 that are not in nums2
    let diff1 = [...set1].filter(num => !set2.has(num));

    // Find elements in nums2 that are not in nums1
    let diff2 = [...set2].filter(num => !set1.has(num));

    return [diff1, diff2];
};