create table user(
    id int primary key AUTO_INCREMENT,
    name varchar(200),
    email varchar(80),
    cor varchar(30),
    num varchar(1000),
    animal varchar(60),
    esporte varchar(60),
    UNIQUE (email)
);

insert into user(name, email, cor, num, animal, esporte) values('helo', 'a@a', 'roxo', '7', 'gato', 'volei');