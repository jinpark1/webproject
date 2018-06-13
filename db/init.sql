SET TIMEZONE='America/Los_angeles';

drop table if exists users;

create table if not exists users (
  id serial primary key,
  email text,
  online_id text,
  password text,
  first_name text,
  last_name text,
  created timestamp,
  admin BOOLEAN
);


drop table if exists thread;

create table if not exists thread (
  id serial primary key,
  subject text,
  created timestamp,
  users_id int REFERENCES users (id)
);

drop table if exists post;

create table if not exists post (
  id serial primary key,
  content text,
  created timestamp,
  thread_id int REFERENCES thread (id),
  users_id int REFERENCES users (id)
); 

insert into users(email, online_id, password, first_name, last_name, created, admin) VALUES('jin@gmail.com', 'jinpark1', 'abcd1234', 'Jin', 'Park', '1999-01-08 04:05:06', false);
insert into users(email, online_id, password, first_name, last_name, created, admin) VALUES('jin@gmail.com', 'jinpark1', 'abcd1234', 'Bo', 'Park', NOW(), false);
insert into thread(subject, created, users_id) VALUES('subject goes here', '1888-01-01 05:01:04', 1);
insert into post(content, created, thread_id, users_id) VALUES('content goes here', '1222-05-05 03:02:01', 1, 1);
select * from users;
select * from thread;
select * from post;

select users.*, thread.id as thread_id,thread.subject, post.id as post_id, post.content from thread
join users on thread.users_id = users.id
join post on thread.id = post.thread_id;

select * from post
join users on post.users_id = users.id;

update users
set admin = true
WHERE first_name = 'Jin';