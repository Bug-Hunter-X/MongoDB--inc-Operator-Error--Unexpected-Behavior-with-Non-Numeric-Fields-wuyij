# MongoDB $inc Operator Error

This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB.  The `$inc` operator is used to increment a numeric field by a specified value. However, if the field is not a number or doesn't exist, the operation will fail unexpectedly.  This example highlights the issue and provides a correct solution.

## Bug
The `bug.js` file shows an incorrect usage of the `$inc` operator.  The operation attempts to increment a field that is not numeric, which leads to an error or unexpected results.

## Solution
The `bugSolution.js` file demonstrates the correct approach.  It first checks if the field exists and is a number.  If not, it either creates the field with a default value or handles the scenario appropriately.
