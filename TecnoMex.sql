#drop database TecnoMex;
create database TecnoMex;
use TecnoMex;

show databases;
create table Clientes(
	idCliente int(8) not null, primary key (idcliente), Nombre varchar(20) not null, Apellido varchar(20) not null, Email varchar(50), Pass varchar(20), Fechareg varchar(15)
);

create table Ventas(
	idVenta varchar(10) not null, primary key(idVenta), idCliente int(8) not null, MontoTotal int(20),
    foreign key (idCliente) references Clientes(idCliente)
);

create table Componentes(
	idComponente varchar(10) not null, primary key(idComponente), Nombre varchar(25) not null, Precio int(20),
    Categoria enum ("Tarjeta gráfica", "Procesador")
);

create table ComponentesVentas(
	idVenta varchar(10) not null, idComponente varchar(10) not null, Cantidad int(5),
    foreign key (idVenta) references Ventas(idVenta),
    foreign key (idComponente) references Componentes(idComponente)
);

create table Proveedores(
	idProveedor varchar(10) not null, primary key(idProveedor), Nombre varchar(25) not null, Telefono int(20), Email varchar(50), Descripcion varchar(260)
);

create table Compras(
	idCompra varchar(10) not null, primary key (idCompra), idComponente varchar(10) not null, idProveedor varchar(10) not null, Cantidad int (5), PrcioUnitario int(20), MontoTotal int(30),
    foreign key (idComponente) references Componentes(idComponente),
    foreign key (idProveedor) references Proveedores(idProveedor)
);

insert into Clientes values (1, "Benito", "Camelas", "benito@hotmail.com", "Rembestwaifu2019", "12/12/2012");