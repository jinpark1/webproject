SET TIMEZONE='America/Los_angeles';
select users.*, thread.id as thread_id, thread.subject, thread.content, thread.category, thread.created as thread_created from thread
join users on thread.users_id = users.id
order by thread_id desc
limit 20 offset ${value};