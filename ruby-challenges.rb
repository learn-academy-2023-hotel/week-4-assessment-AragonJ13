# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# Made a method names number_checker
def number_checker num  
#Used a conditional statement using modulo to see if whatever num is pushed is even or odd 
    if num % 2 == 0
        "#{num} is even"
    else num % 2 != 0
        "#{num} is odd"
    end 
end
#Print number_checker with whatever number provided from test variables and get expected output.
p number_checker reposts1
p number_checker reposts2
p number_checker reposts3




# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'
# Pseudo code:
#Creat a function called string remover with a paramenter of string
def string_remover string
#use the hinted .delete method on string with vowels I want deleted.
  string.delete 'a' 'e' 'i' 'o' 'u'
end
#Print string+reover and variable to get expected outcome.
p string_remover beatles_album1
p string_remover beatles_album2
p string_remover beatles_album3




# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


# Pseudo code
# I made a function pal with a str parameter
def pal str
    
#Made a conditional statement that used .reverse to reverse my string and would return whatever is a palindrone and retunr whatever was not a palindrome
        if str.reverse == str
            "#{str} is a palindrome"
        else
            "#{str} is not a palindrome"  
    
        end
end 
#Print the test variables and try to get expected outcome
p pal palindrome_test_case1 
p pal palindrome_test_case2 
p pal palindrome_test_case3 
#outcome I kept getting:
# "Racecar is not a palindrome"
# "LEARN is not a palindrome"
# "Rotator is not a palindrome"

#I worked on my code for like an hour and couldnt understand why I wasnt getting the expected output I wanted. I got frustrated and went and found the solution on Chat. 


# str = str.downcase <-- found the fix on Chat