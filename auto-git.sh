#!/bin/sh
#auto git push codes

#1. add all changes
git add --all

#2. write commits

git status | egrep "((mod)|(new f)|(del)).*:" > comments.tem
git commit -F comments.tem

#3. push
git push
