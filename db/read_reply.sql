select *, post.content as post_content, post.created as post_created from post
join thread on thread.id = post.thread_id
join users on users.id = post.users_id
where thread.id = ${thread_id}
order by post.id asc;