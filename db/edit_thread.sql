UPDATE thread 
SET subject = ${subject}, content = ${content}, category = ${category}
WHERE id = ${id};
select users.*, thread.id as thread_id, thread.subject, thread.category, thread.content, thread.created as thread_created from thread
join users on thread.users_id = users.id
where thread.id = ${id};


