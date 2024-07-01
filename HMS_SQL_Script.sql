create database HostelDB;
use HostelDB;

-- Create Tables --
create table logincreds(
email varchar(30) primary key,
pw varchar(30)
);

create table samples(
id int primary key,
age int,
resName varchar(20) not null
);

create table students(
rollno varchar(10) primary key,
age int,
branch varchar(10),
mobno int,
email varchar(30),
fname varchar(20),
lname varchar(20)
);

create table hostels(
hostelid int primary key auto_increment,
hostelname varchar(30),
location varchar(30),
totalrooms int,
availablerooms int,
check (totalrooms>0 and availablerooms>=0)
);

create table rooms(
roomid int primary key auto_increment,
hostelid int,
roomnumber varchar(4),
capacity int default 3,
occupancy int default 0,
check(occupancy<=capacity and occupancy>=0),
foreign key (hostelid) references hostels(hostelid)
);

create table studentrooms(
student_room_id int primary key auto_increment,
studentid varchar(10),
roomid int,
foreign key (studentid) references students(rollno),
foreign key (roomid) references rooms(roomid)
);

-- inserting values into tables-- 

insert into logincreds values(
"testmail123@gmail.com", "testpw456" 
);

insert into students values(
"CS1005",
20,
"CS",
5,
"csstud5@clg.com",
"CS Student5",
"Batch1"
);

insert into rooms(hostelid, roomnumber) values(
4,
"005D"
);

insert into hostels(hostelname, location, totalrooms, availablerooms) values(
"BLOCK 4",
"SECTOR 4",
80,
80
);

-- selecting values from tables--  
select * from students;
select * from logincreds;
select * from hostels;
select * from rooms;
select * from studentrooms;
SELECT hostelname, location, totalrooms, availablerooms FROM hostels where hostelid = 1;
select * from samples;
update hostels set totalrooms = 20, availablerooms = 20 where hostelid = 4;

-- updating values in tables--  
update rooms set occupancy = 2 where roomid = 1;

-- clear tables --
delete from 

-- drop tables --

-- drop table hostels;
-- drop table logincreds;
-- drop table rooms;
-- drop table samples;
-- drop table studentrooms;
-- drop table students;