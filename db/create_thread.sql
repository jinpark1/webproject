SET TIMEZONE='America/Los_angeles';
insert into thread (subject, content, category, created, users_id)
values (${subject}, ${content}, ${category}, ${created}, ${users_id});