Bandit Level 4 → Level 5
# Level Goal
The password for the next level is stored in the only human-readable file in the inhere directory. Tip: if your terminal is messed up, try the “reset” command.

Commands you may need to solve this level
ls , cd , cat , file , du , find

## steps
1. continue in terminal of lvl4
2. use cmd:```ls -a``` to find all files and diretories
3. navigate into directory name "inhere" using cmd:```cd inhere```
4. now use cmd:```ls -a ``` to find all files and you will find bunch of files but hint states that password is in human-readable file to find that we need to find about files
5.cmd:```file filename``` will show the type of file but here we have a special case since we have many file + we have file names starts with "-" so for checking filetype of single fiel we can use cmd:```file -- -filename``` or ```file ./-filename``` and for matching many file we are gonna use cmd:```file ./*``` here "./*" means all files in current directory now for human readable file we will have type of file with human readable format which is "ASCII text" or "UTF-8 Unicode Text" 
6. so after running cmd the file with data of type "ASCII Text" is containing your password which is file name "-file07" now open the file using cat cmd
7:cmd:```cat ./-file07``` and you will find the password here it is ```4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw```
8. use this password to login into lvl6 terminal 
9. exit the terminal using cmd:```exit```
10. login into lvl6 terminal using ```ssh bandit5@bandit.labs.overthewire.org -p 2220```
11. use the password you found
12. Now you are in the terminal of lvl5 continue on lvl5 -> lvl 6
