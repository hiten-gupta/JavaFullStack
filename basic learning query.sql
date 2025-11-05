create database JavaEcom;
use JavaEcom;
create table user(
    Userid int primary key auto_increment,
    UserName varchar(255),
    UserEmail varchar(255) unique,
    UserDOB date not null,
    UserMobile VARCHAR(15) NOT NULL,
    CHECK (CHAR_LENGTH(UserMobile) = 10),
    UserPass varchar(256)
);
create table product(
	Productid bigint unique,
    Productdate date,
    ProductCosumer varchar(256),
    ProductManufacture varchar(256)
);
describe user;
select * from user;
insert into user(Userid, UserName, UserEmail, UserDOB,UserMobile,UserPass) values(null, 'Nitin', 'ntin6080@gmail.com', '1999-06-26', '8219731128', 'knmbjhgflhgf');
insert into user values(null,'Hiten','gupta@gmail.com','2004-01-04','8580868371','kjnfvhbjliuef','21','Rewlasar');
update user set UserName ='hiten',UserEmail ='gupta@gmail.com' where Userid = 2;
delete from User where Userid = '3';
UPDATE `javaecom`.`user` SET `Userid` = '3' WHERE (`Userid` = '13');
UPDATE `javaecom`.`user` SET `Userid` = '4' WHERE (`Userid` = '15');
alter table user add UserAge int;
update user set UserAge = '27' where Userid = 1;
alter table user add UserCity varchar(256);
update user set UserCity = 'Gattar' where UserDOB = '1999-06-26';
select Userid,UserDOB from user;
insert into user values(null,'Chinga','guptachinga@gamil.com','2002-06-14','6548494841','lojijdd','23','Manali');
insert into user values(null,'Bmnod','vinod@outlook','1969-01-29','9882130636','namhaimerabmnod','56','Rewalsar');
select * from user where UserAge >= 50;
select min(UserAge) as MINAGE , max(UserAge) as MAAAXAGE from User;
select avg(UserAge) from User;
select sum(UserAge) from User where UserCity = 'Rewalsar';
UPDATE `javaecom`.`user` SET `UserCity` = 'Rewalsar' WHERE (`Userid` = '2');
select * from user where UserCity in ('Rewalsar', 'Karsog');
select * from user where UserCity not in ('Rewalsar', 'Karsog');



create table Customer(
      cid int primary key auto_increment,
      name varchar(256),
      phone varchar(20),
      check(char_length(phone) = 10),
      email varchar(256),
      address varchar(256)
);
alter table customer  drop column address;
select * from customer;
insert into customer values (null ,'Nitin Ghu','8219731128', 'nitin@preoihr.gha', 'Sewarage');
insert into customer values(null,'Bandari','256897454','bandari@ajhfkads', '');
insert into customer values(null, 'dghkj', '2365478945', 'hadfhyugsf','jhsdgv');
insert into customer values (null, 'Tamjin Rokpankj',' 9874531025','kcctdid00','Leh');
delete from customer where cid = '3';
update `javaecom`.`customer` SET `cid` = '3' WHERE (`cid` = '4');
update `javaecom`.`customer` SET `cid` = '4' WHERE (`cid` = '5');
create table address(
   aid int primary key auto_increment,
   adrsLine varchar(256),
   city varchar(256),
   pincode int,
   cid int,
   -- this help to prevent the droping of table by mistake if you want to delete customer table you also neeed to delete address table to complete the process  
   constraint fk_customer_address foreign key (cid)
   references customer (cid)
);
select * from address;
describe address;
select * from customer;
show tables;
insert into customer values(null, 'Mijanur', '+91 999999 5457', 'mija@4gamil.com');
update `javaecom`.`customer` SET `cid` = '6' WHERE (`cid` = '7');
ALTER TABLE customer AUTO_INCREMENT = 1;
select name, email , count(*) as count from customer group by name, email HAVING count > 1;
delete c1 from customer c1 join customer c2 on c1.name = c2.name and c1.email = c2.email  and c1.cid> c2.cid;
ALTER TABLE customer ADD CONSTRAINT unique_customer UNIQUE (email);
insert into customer values(null, 'Nishant Thakur', '+91 256897 268494', 'nishant@gmaail.com');

-- Steps to reset the numbering in auto increment with foreign key in two tables

-- Step 1: Disable foreign keys (if your table is referenced)
SET FOREIGN_KEY_CHECKS = 0;

-- Step 2: Remove AUTO_INCREMENT temporarily (only if needed)
ALTER TABLE customer MODIFY cid INT;

-- Step 3: Renumber rows
SET @count = 0;
UPDATE customer
SET cid = (SELECT @count := @count + 1)
ORDER BY cid;

-- Step 4: Re-enable AUTO_INCREMENT
ALTER TABLE customer MODIFY cid INT AUTO_INCREMENT;

-- Step 5: Re-enable foreign key checks
SET FOREIGN_KEY_CHECKS = 1;

-- Address table insert 
insert into address values (null,'NH - 95 ,Ludhiana Highways Gate No. 2', 'Gharuan', 140413, 2 );
insert into address values (null, 'VPO Rewaslar Teh. Balh', 'Rewalsar ,Mandi', 1765023, 2 );
select * from address where cid = 2;
insert into address values (null, 'library, Mandi','Mandi', 175023, 1);
insert into address values (null, 'Vinod Pan House','Rewalsar', 175023, 1);
insert into address values (null, 'zsdjhgiu','euyr', 12546, 3);
insert into address values (null, 'Astakfarulaaaa','asgdf', 025874, 3);
insert into address values (null, 'tenZin Gompa LTD.','Leh', 1401101, 4);
insert into address values (null, 'Mullo ka ilaaka','Haryana', 1698754, 5);
insert into address values (null, 'shivjot','Kotha', 14000414, 6);

-- Join tables and various joins to do the job 
-- inner join demo
select customer.name, customer.phone, address.adrsLine,address.city,address.pincode from customer inner join address on customer.cid = address.cid;

-- left join demo
select customer.name, customer.phone, address.adrsLine,address.city,address.pincode from customer left join address on customer.cid = address.cid  order by customer.name;

-- right join demo 
select address.adrsLine,address.city,address.pincode, customer.name, customer.phone  from customer right join address on customer.cid = address.cid;

-- full outer join doesn't work in my sql so we use the union method as displayed below
select address.adrsLine,address.city,address.pincode, customer.name, customer.phone 
from customer left join address on customer.cid = address.cid
union 
select address.adrsLine,address.city,address.pincode, customer.name, customer.phone  
from customer right  join address on customer.cid = address.cid;

