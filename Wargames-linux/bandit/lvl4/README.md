Bandit Level 3 → Level 4
# Level Goal
The password for the next level is stored in a hidden file in the inhere directory.

Commands you may need to solve this level
ls , cd , cat , file , du , find

## Steps
1. continue in lvl 3 terminal
2. use cmd:```ls -a``` to find directory name "inhere"
3. navigate into "inhere" directory using cmd:```cd inhere```
4. now again use cmd:```ls -a``` for finding all files
5. you will find file name "...Hiding-From-You" open it using cat cmd
6. cmd:```cat "...Hiding-From-You"```
7. it will show the password which is used for next lvl4 here it is ```2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ```
8. exit the terminal using cmd:```exit```
9. now login into lvl4 ssh using ```ssh bandit4@bandit.labs.overthewire.org -p 2220```
10. using the password you found
11. Now you are in the terminal of lvl4 and can continue with lvl4 -> lvl5