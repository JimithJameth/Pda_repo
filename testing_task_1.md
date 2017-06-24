### Testing task 1 code:

  Carry out static testing on the code below.  
  Read through the code.  Comment any errors you can see without correcting them.

 
def func1 val  <!--func1 should be func_1 with (val)-->
  if val = 1  <!-- should be val == 1 -->
  return true
  else
  return false
  end
end
  
< dif max a b <!-- def_max(a,b) -->
  if a > b
      return a <!-- return needs to be indented and else b need to be on the same line-->
  else
  b
  end 
end 
end <!-- take the end away -->
  
def looper i       <!--def looper (i)-->
  for i in  1..10   <!-- for i in i 1..10-->
  puts i
  end
end
 
failures = 0 
 
if looper == 10 <!-- if looper = 10-->
  puts "looper passed"
else
  puts "looper failed"
  <!-- failures = failures + 1 should be failures = failures += 1-->
 
  
if func1(3) == false  <!--if func_1 (3) == false-->
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1 <!-- failures += 1 -->
end 
 
  
if max(100,1) == 100   <!--if max(101) == 100 -->
  puts "max(100,1) passed"<!--"max(101) passed"-->
else
   puts "func1(3) failed"  <!--puts "func_1(3) failed"-->
   failrues = failures + 1  <!--failures = failures += 1-->
end

  
if failures           <!-- if failures = 10 -->
  puts "Test Failed"
else
  puts "Test Passed"
end
                      <!-- end needed -->

