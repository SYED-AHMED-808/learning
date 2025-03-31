Bandit Level 6 → Level 7
# Level Goal
The password for the next level is stored somewhere on the server and has all of the following properties:

owned by user bandit7
owned by group bandit6
33 bytes in size
Commands you may need to solve this level
ls , cd , cat , file , du , find , grep

## steps

1. continue in lvl6 terminal 
2. to see a file owner ship use cmd:```ls -l``` in linux files are owned by users and groups
3. here it can be done using file cmd
4. flags of find we are going to use are "-type, -user, -group, -size" "type" is used for finding files and directories "user" is used for finding files owned by a user "group" is used for finding files owned by a group "size" is used for finding files of a particular size
5.cmd:```find / -type f -user bandit7 -group bandit6 -size 33c``` it will find all files owned by user bandit7 and group bandit6 and size of file is 33 bytes and "/" means root directory
6. we might get files with error  so we will use cmd to find the file with error permissions
7. so remove errors we use cmd with ```2> /dev/null``` which means redirect error to null
8. cmd:```find / -type f -user bandit7 -group bandit6 -size 33c 2> /dev/null```
9. now we will find the file which has password and here it is ```morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj```
10. exit the terminal using cmd:```exit```
11. login into lvl7 ssh using ```ssh bandit7@bandit.labs.overthewire.org -p 2220```
12. use the password you found
13. Now you are in the terminal of lvl7 continue on lvl7 -> lvl 8