from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_dict = {}  # Dictionary to store number and its index

        for i, num in enumerate(nums):
            complement = target - num
            if complement in num_dict:
                return [num_dict[complement], i]  # Return the indices of the complement and current number
            num_dict[num] = i  # Store the index of the current number

# Example usage:
nums = [2, 7, 11, 15]
target = 9
sol = Solution()
print(sol.twoSum(nums, target))  # Output will be [0, 1] because nums[0] + nums[1] = 9
