delete from post
where users_id = ${id};
delete from thread
where users_id = ${id};
delete from users
where id = ${id};
