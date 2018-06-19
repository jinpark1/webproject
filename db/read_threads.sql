select users.*, thread.id as thread_id, thread.subject from thread
join users on thread.users_id = users.id;