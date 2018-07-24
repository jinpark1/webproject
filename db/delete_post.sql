delete from post 
where thread_id = ${id};
delete from thread 
where id = ${id};