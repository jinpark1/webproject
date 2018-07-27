insert into thread (subject, content, category, created, users_id)
values (${subject}, ${content}, ${category}, ${created}, ${users_id});
select * from thread
order by thread.id desc
limit 1;