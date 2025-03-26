# Level Goal
The password for the next level is stored in a file called readme located in the home directory. Use this password to log into bandit1 using SSH. Whenever you find a password for a level, use SSH (on port 2220) to log into that level and continue the game.

Commands you may need to solve this level
ls , cd , cat , file , du , find


## steps
1. in teminal which you open from lvl 0 use it here
2. cmd:```ls``` use this command and you will find "readme" file open it using 
3. cmd:```cat filename``` here ```cat readme```
4. it will show the password copy it save it 
5. password is ```ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If```
6. exit terminal using cmd:``` exit```
7. use this password to log into ```ssh bandit1@bandit.labs.overthewire.org -p 2220``` in new terminal
8. use the password you found to log in
9. Now you are in the terminal of lvl1 continue lvl1 -> lvl2