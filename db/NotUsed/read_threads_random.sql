select users.*, thread.id as thread_id, thread.subject, thread.content, thread.category from thread
join users on thread.users_id = users.id
where category ilike 'random'
order by thread_id desc
limit 20 offset ${value};