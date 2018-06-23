SET TIMEZONE='America/Los_angeles';
insert into users ( email, online_id, password, first_name, last_name, created, admin )
values ( ${email}, ${online_id}, ${password}, ${first_name}, ${last_name}, ${created}, ${admin} ); 
select * from users where email = ${email};