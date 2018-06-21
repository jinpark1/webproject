select users.*, thread.id as thread_id, thread.subject, thread.content from thread
join users on thread.users_id = users.id
order by thread_id desc
limit 10 offset ${value};