class Solution:
    def runningSum(self):
        while True:
            # Asking for input
            input_string = input(
                "Enter a list of numbers separated by commas your nerd: "
            )
            try:
                # Split the string into a list of strings, then convert each to an int
                nums = list(map(int, input_string.split(",")))
                results = []
                current_sum = 0

                for number in nums:
                    current_sum += number
                    results.append(current_sum)
                return results
            
            except ValueError:
                # If input is invalid, inform the user and continue the loop
                print("Read the directions you donkey. Please try again...")


sol = Solution()
print(sol.runningSum())


# I took some time to work on this solution. At the time of this solution I am relearning the syntax for Python.
# It has been around a year since I have written python code. 

# You may be thinking why did he do some extra work on this. In my thought processes I wanted to undersand where
# the value was coming from and have some control over the value. Once I had the value I tohught to myself...
# oh what if its not a number followed by a ,
# this then got me into the error handling and so on. 

# The += is pretty intresting in python

# The += operator in Python is used to add the right-hand side operand to the left-hand side operand and 
# then assign the result back to the left-hand side operand. It's a common shorthand in many programming languages 
# and helps in reducing the verbosity of the code, making it cleaner and often easier to read.

# Line 11-17 is the solution for Leet