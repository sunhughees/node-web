#!/bin/sh
#auto git push codes

#1. add all changes
git add --all

#2. write commits
titles="Email:svendapeng@163.com"
dates=`date`
comments=`git status | egrep "((mod)|(new f)|(del)).*:"`
git commits -m $titles$dates"Changes lists:\n"$comments
# echo $titles" "$dates" "$comments

#3. push
git push
