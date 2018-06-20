select thread,*, users.id as users_id from users
join thread on users.id = thread.users_id
where thread.id = ${thread_id};