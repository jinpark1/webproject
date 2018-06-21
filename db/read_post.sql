select users.*, thread.id as thread_id, thread.subject, thread.category from thread
join users on thread.users_id = users.id
where thread.id = ${thread_id};