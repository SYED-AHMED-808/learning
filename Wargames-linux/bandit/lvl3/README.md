Bandit Level 2 → Level 3
# Level Goal
The password for the next level is stored in a file called spaces in this filename located in the home directory

Commands you may need to solve this level
ls , cd , cat , file , du , find

## Steps:
1. continue in lvl2 terminal
2. use cmd:```ls -a```
3. you will find the file with a name "spaces in this filename"
4.now open it using cmd:```cat "spaces in the filename"```
5. you will find the lvl 3 terminal password here it is
```MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx```
6. exit the terminal using cmd:```exit``` and use this password to login into lvl3 terminal
7. with ssh ```ssh bandit3@bandit.labs.overthewire.org -p 2220```
8. enter the password you found
9. Now you are in hte terminal of lvl3 you can now start lvl3 -> lvl4
