git filter-branch -f --env-filter '

an="$GIT_AUTHOR_NAME"
am="$GIT_AUTHOR_EMAIL"
cn="$GIT_COMMITTER_NAME"
cm="$GIT_COMMITTER_EMAIL"

if [ "$GIT_COMMITTER_EMAIL" = "chenqingbiao@cmhi.chinamobile.com" ]
then
    cn="cqb325"
    cm="cqb325@163.com"
fi
if [ "$GIT_AUTHOR_EMAIL" = "chenqingbiao@cmhi.chinamobile.com" ]
then
    an="cqb325"
    am="cqb325@163.com"
fi

export GIT_AUTHOR_NAME="$an"
export GIT_AUTHOR_EMAIL="$am"
export GIT_COMMITTER_NAME="$cn"
export GIT_COMMITTER_EMAIL="$cm"
' --tag-name-filter cat -- --branches --tags