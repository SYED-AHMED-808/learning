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
this is used to print manual of find cmd and same goes for other cmds it will print manual of that cmd
```grep "string" file.txt```
this is used to find string in file.txt same goes for other files
```grep "string" file.txt file2.txt```
this is used to find string in file.txt and file2.txt at the same time
```grep "string" ./*```
this is used to find string in current directory
```grep -i "string" file.txt```
this is used to find string in file.txt ignoring case 
```grep -c "string" file.txt```
this is used to find string in file.txt and print number of times string is found
```grep -v "string" file.txt```
this is used to find string in file.txt and print lines not containing string
```grep "search_string" ./*.log```
this is used to find search_string in all .log files in current directory
```grep "^pattern" file.txt```
this is used to find pattern at the beginning of line in file.txt since grep supports regex we can use regex to find pattern at the beginning of line some of the regex patterns are: 
"^" means start of line
"$" means end of line
```grep "car$" file.txt```
this is used to find car at the end of line in file.txt
```sort file.txt```
this is used to sort file.txt and print sorted file.txt ex: 
file have: content:
 apple
 dog
 banana
 cat
 if this was a "sort file.txt" then it would print 
"apple
banana
car
dog"
 if this was a "cat file.txt" then it would print 
"apple
dog
banana
cat"
### Sort with flags
```sort -r file.txt```
this is used to sort file.txt in reverse order and print sorted file.txt
```sort -b file.txt```
this is used to sort file.txt ignoring leading blanks and print sorted file.txt
```sort -u file.txt```
this is used to sort file.txt ignoring duplicate lines and print sorted file.txt
```sort -n file.txt```
this is used to sort file.txt numerically and print sorted file.txt
```sort -o file.txt file2.txt```
this will sort file2.txt and saves it to file.txt
```uniq file.txt```
this is used to print unique lines in file.txt but it only checks for single lines next to each other
if we want to find unique lines in file.txt we can use cmd:```sort file.txt | uniq```
```uniq -c file.txt```
this is used to print unique lines in file.txt and print number of times each line is found
```uniq -d file.txt```
this is used to print duplicate lines in file.txt and print number of times each line is found
```strings file.txt```
this is used to print all strings in file.txt
```strings -n 10 file.txt```
this is used to print all strings in file.txt with length greater than 10
```base64 file.txt```
this is used to print base64 encoded file.txt 
```base64 -d file.txt```
this is used to print base64 decoded file.txt
```base64 <<< "hello world"```
this is used to print base64 encoded "helloworld"
```base64 -d <<< "sf2dasdfakfsf"```
this is used to print base64 decoded "sf2dasdfakfsf"
```tar -cvf file.tar file.txt```
this is used to create file.tar from file.txt
```tar -xvf file.tar```
this is used to extract file.tar
```tar -zcvf file.tar.gz file.txt```
this is used to create file.tar from file.txt and compress it
```tar -zxvf file.tar.gz```
this is used to extract file.tar.gz and decompress it
```gzip file.txt```
this is used to compress file.txt and save it as file.txt.gz
```bzip2 -z file.txt```
```xxd ```
