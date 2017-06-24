### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

def func_1 (val) 
  if val == 1
  return true
  else
  return false
  end
end
  
def max (a, b)
  if a > b
    return a 
  else b
  end 
end 

  
def looper (i)
  for i in 1..10
  puts i
  end
end
 
failures = 0 
 
if (looper) == 10 
  puts "looper passed"
else
  puts "looper failed"
  failures = failures += 1
 
  
if func_1 (3) == false
  puts "func_1 (3) passed"
else
  puts "func_1 (3) failed"
  failures = failures += 1
end 
 
  
if max (101) == 100 
  puts "max (101) passed"
else
  puts "func_1 (3) failed"
  failures = failures += 1
end

  
if failures == 10
  puts "Test Failed"
else
  puts "Test Passed"
end
end
