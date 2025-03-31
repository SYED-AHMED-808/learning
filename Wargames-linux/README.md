https://overthewire.org/wargames/ here we are learning linux and games
for hacking searches 
https://www.exploit-db.com/google-hacking-database
# Linux cmds and it's uses

```ssh```
this is how "ssh [username]@[hostname or IP address]"
```ssh user1@yellow.com ```
```sssh user1@yellow.com -p 3000```
-p is used for defining port if necessary

```ls```
this is used to list files and directories
```ls -l```
this is used to list files and directories in long format which shows permissions, owner, group, size, and modification date
```ls -a```
this is used to list all files and directories including hidden files
```ls -la```
this is used to list all files and directories including hidden files in long format
```ls -lh```
this is used to list all files and directories including hidden files in long format with human readable sizes
```ls -lhR```
this is used to list all files and directories including hidden files in long format with human readable sizes recursively
```cd```
this is used to change directory
```cd /```
this is used to change directory to root directory
```cd ..```
this is used to change directory to parent directory
```cd ~```
this is used to change directory to home directory
```cd -```
this is used to change directory to previous directory
```cd /home/user```
this is used to change directory to /home/user same goes for other directories we can use any directory names directly from current path or we can use absolute path or relative path
```pwd```
this is used to print current working directory
```cat```
this is used to print file contents
```cat file.txt```
this is used to print file contents of file.txt same goes for other files
```cat file1.txt file2.txt```
this is used to print file contents of file1.txt and file2.txt at the same time
```cat file1.txt file2.txt > file3.txt```
this is used to print file contents of file1.txt and file2.txt at the same time and save it to file3.txt
```cat file1.txt file2.txt > file3.txt 2> file4.txt```
this is used to print file contents of file1.txt and file2.txt at the same time and save it to file3.txt and save error to file4.txt
```cat < -``` or ```cat ./-```
this is used to print file contents starts with "-"
```cat "file with spaces.txt"```
this is used to print file contents of file with spaces in name
```cat "...hidden file.txt"```
this is used to print file contents of hidden file
```file file.txt```
this is used to print file type
```file file.txt file.txt```
this is used to print file type of file.txt and file.txt
```file ./-file.txt```
this is used to print file type of files starts with "-"
```file ./*```
this is used to print file type of current directory
```find . -name "file.txt"```
this is used to find file.txt in current directory
```find . -name "file.txt" -type f```
this is used to find file.txt in current directory and print only files
```find . -name "file.txt" -type d```
this is used to find file.txt in current directory and print only directories
```find . -size +100M```
this is used to find files bigger than 100M in current directory
```find . -not -executable```
this is used to find files that are not executable in current directory
```find / -name "file.txt"```
this is used to find file.txt in root directory
```find / -user user1```
this is used to find files owned by user1 in root directory
```find / -group group1```
this is used to find files owned by group1 in root directory
```find / -user user1 -group group1```
this is used to find files owned by user1 and group1 in root directory
```find / -user user1 -group group1 -size +100M -type f 2> /dev/null```
this is used to find files owned by user1 and group1 and size bigger than 100M in root directory and print only files and save error to /dev/null
```man find```
this is used to print manual of find
