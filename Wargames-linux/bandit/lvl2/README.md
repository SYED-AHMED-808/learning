Bandit Level 1 → Level 2
# Level Goal
The password for the next level is stored in a file called - located in the home directory

Commands you may need to solve this level
ls , cd , cat , file , du , find

## Steps:
1. continue in lvl1 shell
2. use cmd: ```ls -a`` to see all files
3. to open a "-" filename use  cmd:``` cat ./-``` or ```cat < - ``` both ways you can see the output of files which starts with dash
4. after that a password will be shown that will be your next stage password here it is ```263JGJPfgU6LtdEvgfWU1XP5yac29mFx ```
5. now open lvl2 shell using ssh with ```  ssh bandit2@bandit.labs.overthewire.org -p 2220 ```
6. password is which we obtained from "-" file
7. exit the terminal using cmd:```exit``` then login into new ssh
8. Now you are in the terminal of lvl2 you can now start lvl2 -> lvl3
