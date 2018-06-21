select * from post
join thread on post.thread_id = thread.id
join users on post.users_id = users.id
where thread.id = ${thread_id};