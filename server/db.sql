CREATE TABLE users(
    todo_id uuid PRIMARY KEY default uuid_generate_v4(),
    name varchar(255) not null,
	email varchar(255) not null,
	password varchar(255) not null
);