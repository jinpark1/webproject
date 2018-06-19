SET TIMEZONE='America/Los_angeles';
insert into thread (subject, content, category, created)
values (${subject}, ${content}, ${category}, ${created});