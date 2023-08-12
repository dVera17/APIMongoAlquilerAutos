import { Expose } from 'class-transformer';
import { IsDefined, MaxLength, IsNumber, IsString, Matches, IsEmail } from 'class-validator';
export class Cliente{

    @Expose({name: "idCliente"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro idCliente es obligatorio" } } })
    @IsNumber({}, { message: () => { throw { status: 406, message: "El parametro idCliente debe ser numerico" } } })
    ID_Cliente: number
    @Expose({name: "nombreCliente"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro nombreCliente es obligatorio" } } })
    @IsString({ message: () => { throw { status: 406, message: "El parametro nombreCliente debe ser una cadena de texto" } } })
    @MaxLength(100, { message: () => { throw { status: 406, message: "El parametro nombreCliente debe contener maximo 100 caracteres"}}})
    @Matches(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, { message: () => { throw { status: 406, message: "El parametro nombreCliente solo puede contener números" } } })
    Nombre: string
    @Expose({name: "apellidoCliente"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro apellidoCliente es obligatorio" } } })
    @IsString({ message: () => { throw { status: 406, message: "El parametro apellidoCliente debe ser una cadena de texto" } } })
    @MaxLength(100, { message: () => { throw { status: 406, message: "El parametro apellidoCliente debe contener maximo 100 caracteres"}}})
    @Matches(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, { message: () => { throw { status: 406, message: "El parametro apellidoCliente solo puede contener números" } } })
    Apellido: string
    @Expose({name: "dniCliente"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro dniCliente es obligatorio" } } })
    @IsString({ message: () => { throw { status: 406, message: "El parametro dniCliente debe ser una cadena de texto" } } })
    @MaxLength(20, { message: () => { throw { status: 406, message: "El parametro dniCliente debe contener maximo 100 caracteres"}}})
    @Matches(/^[0-9]+$/, { message: () => { throw { status: 406, message: "El parametro dniCliente solo puede contener números" } } })
    DNI: string
    @Expose({name: "direccionCliente"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro direccionCliente es obligatorio" } } })
    @IsString({ message: () => { throw { status: 406, message: "El parametro direccionCliente debe ser una cadena de texto" } } })
    @MaxLength(255, { message: () => { throw { status: 406, message: "El parametro direccionCliente debe contener maximo 100 caracteres"}}})
    Direccion: string
    @Expose({name: "telefonoCliente"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro telefonoCliente es obligatorio" } } })
    @IsString({ message: () => { throw { status: 406, message: "El parametro telefonoCliente debe ser una cadena de texto" } } })
    @MaxLength(20, { message: () => { throw { status: 406, message: "El parametro telefonoCliente debe contener maximo 100 caracteres"}}})
    @Matches(/^[0-9]+$/, { message: () => { throw { status: 406, message: "El parametro telefonoCliente solo puede contener números" } } })
    Telefono: string
    @Expose({name: "emailCliente"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro emailCliente es obligatorio" } } })
    @IsString({ message: () => { throw { status: 406, message: "El parametro emailCliente debe ser una cadena de texto" } } })
    @MaxLength(100, { message: () => { throw { status: 406, message: "El parametro emailCliente debe contener maximo 60 caracteres"}}})
    @IsEmail({}, {message: () => { throw { status: 406, message: "El parametro emailCliente debe ser una direccion de correo electronico valido"}}})
    Email: string

    constructor(data: Partial<Cliente>){
        Object.assign(this, data);
        this.ID_Cliente = 0;       
        this.Nombre = "Faker";
        this.Apellido = "Faker";
        this.DNI = "0";
        this.Direccion = "Faker";
        this.Telefono = "0";
        this.Email = "Faker@faker.com";
    }
}