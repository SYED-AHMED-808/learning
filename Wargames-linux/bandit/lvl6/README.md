Bandit Level 5 → Level 6
#Level Goal
The password for the next level is stored in a file somewhere under the inhere directory and has all of the following properties:

human-readable
1033 bytes in size
not executable
Commands you may need to solve this level
ls , cd , cat , file , du , find
## steps
1. continue in terminal lvl5
2. cmd:```ls``` use this to find all files and folders
3. navigate into "inhere"directory using cmd:```cd inhere```
4. ```ls``` here you will find many directories
5. now lets see all files and directories
6. cmd:```ls -la``` to see all  directories and files total
7. now learn how to use find command 
8. cmd:```find [path] [expression]```
9. path: represents where to search
10. expression : represents Criteria for finding files, such as name, type, size, etc.
9. use cmd:```find . -size 1033c``` here "." represents current directory with size of 1033c "c" represents byte you have different kind of sizes available look when you have use
10. it will result the file with size of "1033"bytes
11. use cmd:```find . -type f``` here "-type" flag is used to determine are we searching file or directory "f" represents file
12. it will result all files in current directory 
13. we can combine flags like this cmd:```find . -type f -size 1033c``` or more we can as many as we want
14.```https://serveracademy.com/blog/linux-find-command/``` this url have more examples on find
15. as far we have seen we are looking with type,size now we need to find its should not be executable
16.for that we add one more flag ```find . -type f -size 1033c -not -executable``` here "-not" flag is use to check that is should not be there "-executable" flag check whether this file is executable by using with -not we are checking file which are not executable
17. but now we know the file with type size executablity but we want to check human readablity for that we need to know "command chaining"
18. To chain command "``` find . -size 1033c | echo "hello"``` here "|" we run the command as first command runs it will show only last output
19. To run command on return output we use "-exec" flag with another  cmd``` find . -type f -size 1033c -not -executable -exec [ shell command]``` 
20. now what we want is human readable and we can find it using file cmd
21. ``` find . -type f -size 1033c -not -executable -exec file {} + | grep ASCII ```
22. -exec file {} + : Execute the file command on all the results returns by find
Note : {} is an placeholder for the location where the names of the files found by find is going to be substituted. The “+” sign is used to terminate the statement
23. now open the file you found and here password is ```HWasnPhtq9AVKe0dmk45nxy20cvUa6EG```
24. exit terminal using cmd:```exit```
25. use this password to log into ```ssh bandit6@bandit.labs.overthewire.org -p 2220```
26. now you are in the terminal of lvl6 continue lvl6 -> lvl7



Note:
ls - list directory contents                                   
cd - change working directory                    
cat  - concatenate files and print on the standard output
file - determine file type
du - estimate file space usage
find  - search for files in a directory hierarchy