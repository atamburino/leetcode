# Things needed to do: 
# Remove duplicate numbers
# Dont change the order
# Return the unique elements
# first numebr is always unique

# 0,1,2,2,3,3,4

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 1 
        for j in range(1, len(nums)):
            if nums[j] != nums[i - 1]:
                nums[i] = nums[j]
                i += 1

        return i