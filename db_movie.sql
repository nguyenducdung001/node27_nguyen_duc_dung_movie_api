DROP DATABASE IF EXISTS db_movie;
CREATE DATABASE db_movie;
USE db_movie;


create table Phim (
    ma_phim int primary key auto_increment,
    ten_phim varchar(255) unique not null,
    trailer varchar(500) not null,
    hinh_anh varchar(255) not null,
    mo_ta varchar(500) not null,
    ngay_khoi_chieu timestamp not null,
    danh_gia int not null,
    hot boolean,
    dang_chieu boolean,
    sap_chieu boolean
);

create table NguoiDung (
	tai_khoan int primary key auto_increment,
    ho_ten varchar(255) not null,
    email varchar(255) unique not null,
    so_dt varchar(255) unique not null,
    mat_khau varchar(255) not null,
    loai_nguoi_dung varchar(255) not null
);

create table HeThongRap (
	ma_he_thong_rap varchar(255) primary key unique,
    ten_he_thong_rap varchar(255) not null,
    logo varchar(500) not null
);

create table CumRap (
	ma_cum_rap varchar(255) primary key unique,
    ten_cum_rap varchar(255) unique not null,
    dia_chi varchar(255) unique not null,
    ma_he_thong_rap varchar(255)  not null,
    foreign key(ma_he_thong_rap) references HeThongRap(ma_he_thong_rap)
);

create table RapPhim (
	ma_rap varchar(255) primary key unique,
    ten_rap varchar(255)  not null,
    ma_cum_rap varchar(255)  not null,
    foreign key(ma_cum_rap) references CumRap(ma_cum_rap)
);


create table LichChieu (
	ma_lich_chieu  int primary key auto_increment,
    ma_rap varchar(255) not null,
    ma_phim int not null,
    ngay_gio_chieu datetime,
    gia_ve int not null,
	foreign key(ma_rap) references RapPhim(ma_rap),
    foreign key(ma_phim) references Phim(ma_phim)
);







create table Banner (
	ma_banner int primary key auto_increment,
    ma_phim int not null,
    hinh_anh varchar(255) not null,
    foreign key(ma_phim) references Phim(ma_phim)

);




create table Ghe (
	ma_ghe int primary key auto_increment,
    ten_ghe varchar(255) not null,
    loai_ghe varchar(255) not null,
    ma_rap varchar(255) not null,
    foreign key(ma_rap) references RapPhim(ma_rap)
);

create table DatVe(
	id int primary key auto_increment,
	tai_khoan int not null,
    ma_lich_chieu int not null,
    ma_ghe int not null,
    foreign key(ma_ghe) references Ghe(ma_ghe),
    foreign key(ma_lich_chieu) references LichChieu(ma_lich_chieu),
     foreign key(tai_khoan) references NguoiDung(tai_khoan)
);

 
insert into Phim(ten_phim, trailer,hinh_anh,mo_ta,ngay_khoi_chieu,danh_gia,hot,dang_chieu,sap_chieu)  
values ('Người kiến','https://www.youtube.com/watch?v=KU5_sea3G9Y','https://movienew.cybersoft.edu.vn/hinhanh/one-piece_gp01.jpg',
'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.',
'2023-03-14T14:18:04.703', '5',true,false,true),
('One piece','https://www.youtube.com/embed/1HpZevFifuo','https://movienew.cybersoft.edu.vn/hinhanh/antman.jpg',
'One piece','2023-03-24T00:00:00', '8',true,true,false),
('MARVEL EndGame','https://www.youtube.com/watch?v=TcMBFSGVi1c','https://movienew.cybersoft.edu.vn/hinhanh/marvel-endgame_gp01.jpg',
'Avengers: Hồi kết (tựa gốc tiếng Anh: Avengers: Endgame)','2023-03-28T02:25:06.28', '10',true,true,false);


insert into Banner(ma_phim, hinh_anh)
values ('1','https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png'),
('2','https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png'),
('3','https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png');



insert into NguoiDung(ho_ten, email, so_dt, mat_khau, loai_nguoi_dung)
values ('Alex','alex@gmail.com','0905642137','alex','KhachHang'),
('Kai','kai@gmail.com','0705642139','kai','KhachHang'),
('Lux','lux@gmail.com','0805649137','alex','QuanTri');



insert into HeThongRap(ma_he_thong_rap,ten_he_thong_rap, logo)
values ('BHDStar','BHD Star Cineplex','https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png'),
('CGV','CGV','https://movienew.cybersoft.edu.vn/hinhanh/cgv.png'),
('Galaxy','Galaxy Cinema','https://movienew.cybersoft.edu.vn/hinhanh/galaxy-cinema.png');





insert into CumRap(ma_cum_rap,ten_cum_rap, dia_chi, ma_he_thong_rap)
values ('glx-huynh-tan-phat','GLX - Huỳnh Tấn Phát','1362 Huỳnh Tấn Phát, KP1, Phú Mỹ, Q. 7','Galaxy'),
('glx-nguyen-du','GLX - Nguyễn Du','116 Nguyễn Du, Q.1','Galaxy'),
('cgv-aeon-binh-tan','CGV - Aeon Bình Tân','Tầng 3, TTTM Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, Bình Trị Đông B, Bình Tân','CGV'),
('cgv-aeon-tan-phu','CGV - Aeon Tân Phú','30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú','CGV'),
('bhd-star-cineplex-3-2','BHD Star Cineplex - 3/2','L5-Vincom 3/2, 3C Đường 3/2, Q.10','BHDStar'),
('bhd-star-cineplex-bitexco','BHD Star Cineplex - Bitexco','L3-Bitexco Icon 68, 2 Hải Triều, Q.1','BHDStar')

;



insert into RapPhim(ma_rap,ten_rap, ma_cum_rap)
values ('101','Rạp 1','bhd-star-cineplex-3-2'),
('102','Rạp 2','bhd-star-cineplex-3-2'),
('111','Rạp 1','bhd-star-cineplex-bitexco'),
('112','Rạp 2','bhd-star-cineplex-bitexco'),
('201','Rạp 1','cgv-aeon-binh-tan'),
('202','Rạp 2','cgv-aeon-binh-tan'),
('211','Rạp 1','cgv-aeon-tan-phu'),
('212','Rạp 2','cgv-aeon-tan-phu'),
('301','Rạp 1','glx-huynh-tan-phat'),
('302','Rạp 2','glx-huynh-tan-phat'),
('311','Rạp 1','glx-nguyen-du'),
('312','Rạp 2','glx-nguyen-du')
;




insert into LichChieu(ma_rap,ma_phim,ngay_gio_chieu,gia_ve)
values ('101','1','2023-05-01T9:18:05.000Z','45000'),
('102','1','2023-05-01T9:18:05.000Z','45000'),
('111','1','2023-05-01T9:18:05.000Z','45000'),
('112','1','2023-05-01T9:18:05.000Z','45000'),
('201','1','2023-05-01T9:18:05.000Z','45000'),
('202','1','2023-05-01T9:18:05.000Z','45000'),
('211','1','2023-05-01T9:18:05.000Z','45000'),
('212','1','2023-05-01T9:18:05.000Z','45000'),
('301','1','2023-05-01T9:18:05.000Z','45000'),
('302','1','2023-05-01T9:18:05.000Z','45000'),
('311','1','2023-05-01T9:18:05.000Z','45000'),
('312','1','2023-05-01T9:18:05.000Z','45000'),

('101','2','2023-05-01T9:18:05.000Z','45000'),
('102','2','2023-05-01T9:18:05.000Z','45000'),
('111','2','2023-05-01T9:18:05.000Z','45000'),
('112','2','2023-05-01T9:18:05.000Z','45000'),
('201','2','2023-05-01T9:18:05.000Z','45000'),
('202','2','2023-05-01T9:18:05.000Z','45000'),
('211','2','2023-05-01T9:18:05.000Z','45000'),
('212','2','2023-05-01T9:18:05.000Z','45000'),
('301','2','2023-05-01T9:18:05.000Z','45000'),
('302','2','2023-05-01T9:18:05.000Z','45000'),
('311','2','2023-05-01T9:18:05.000Z','45000'),
('312','2','2023-05-01T9:18:05.000Z','45000'),

('101','3','2023-05-01T9:18:05.000Z','45000'),
('102','3','2023-05-01T9:18:05.000Z','45000'),
('111','3','2023-05-01T9:18:05.000Z','45000'),
('112','3','2023-05-01T9:18:05.000Z','45000'),
('201','3','2023-05-01T9:18:05.000Z','45000'),
('202','3','2023-05-01T9:18:05.000Z','45000'),
('211','3','2023-05-01T9:18:05.000Z','45000'),
('212','3','2023-05-01T9:18:05.000Z','45000'),
('301','3','2023-05-01T9:18:05.000Z','45000'),
('302','3','2023-05-01T9:18:05.000Z','45000'),
('311','3','2023-05-01T9:18:05.000Z','45000'),
('312','3','2023-05-01T9:18:05.000Z','45000')
;














