SET TIMEZONE='America/Los_angeles';

drop table if exists users;

create table if not exists users (
  id serial primary key,
  email text unique,
  online_id text unique,
  password text,
  first_name text,
  last_name text,
  created timestamp,
  admin BOOLEAN,
  profile_photo text
);


drop table if exists thread;

create table if not exists thread (
  id serial primary key,
  subject text,
  content text,
  category text,
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

insert into users(email, online_id, password, first_name, last_name, created, admin) VALUES('jin@gmail.com', 'jinpark1', 'abcd1234', 'Jin', 'Park', NOW(), false);
insert into users(email, online_id, password, first_name, last_name, created, admin) VALUES('jin2@gmail.com', 'jinpark2', 'abcd1234', 'Bo', 'Park', NOW(), false);
insert into thread(subject, content, category, created, users_id) VALUES('subject goes here', 'content goes here', 'general', NOW(), 2);
insert into post(content, created, thread_id, users_id) VALUES('content goes here', NOW(), 1, 2);
select * from users;
select * from thread;
select * from post;

select users.*, thread.id as thread_id,thread.subject, post.id as post_id, post.content from thread
join users on thread.users_id = users.id
join post on thread.id = post.thread_id;

select * from post
join users on post.users_id = users.id;

select * from thread
join users on thread.users_id = users.id;

select users.*, thread.id as thread_id, thread.subject from thread
join users on thread.users_id = users.id;

update users
set admin = true
WHERE first_name = 'Jin';