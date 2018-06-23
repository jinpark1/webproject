SET TIMEZONE='America/Los_angeles';
insert into post (content, created, thread_id, users_id)
values (${content}, ${created}, ${thread_id}, ${users_id});