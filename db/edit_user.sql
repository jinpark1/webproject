UPDATE users 
SET email = ${email}, online_id = ${online_id}, first_name = ${first_name}, last_name = ${last_name}
WHERE id = ${id};
select * from users where id = ${id};