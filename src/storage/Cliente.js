var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, MaxLength, IsNumber, IsString, Matches, IsEmail } from 'class-validator';
export class Cliente {
    constructor(data) {
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
__decorate([
    Expose({ name: "idCliente" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro idCliente es obligatorio" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El parametro idCliente debe ser numerico" }; } }),
    __metadata("design:type", Number)
], Cliente.prototype, "ID_Cliente", void 0);
__decorate([
    Expose({ name: "nombreCliente" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro nombreCliente es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El parametro nombreCliente debe ser una cadena de texto" }; } }),
    MaxLength(100, { message: () => { throw { status: 406, message: "El parametro nombreCliente debe contener maximo 100 caracteres" }; } }),
    Matches(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, { message: () => { throw { status: 406, message: "El parametro nombreCliente solo puede contener números" }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: "apellidoCliente" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro apellidoCliente es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El parametro apellidoCliente debe ser una cadena de texto" }; } }),
    MaxLength(100, { message: () => { throw { status: 406, message: "El parametro apellidoCliente debe contener maximo 100 caracteres" }; } }),
    Matches(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, { message: () => { throw { status: 406, message: "El parametro apellidoCliente solo puede contener números" }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "Apellido", void 0);
__decorate([
    Expose({ name: "dniCliente" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro dniCliente es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El parametro dniCliente debe ser una cadena de texto" }; } }),
    MaxLength(20, { message: () => { throw { status: 406, message: "El parametro dniCliente debe contener maximo 100 caracteres" }; } }),
    Matches(/^[0-9]+$/, { message: () => { throw { status: 406, message: "El parametro dniCliente solo puede contener números" }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "DNI", void 0);
__decorate([
    Expose({ name: "direccionCliente" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro direccionCliente es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El parametro direccionCliente debe ser una cadena de texto" }; } }),
    MaxLength(255, { message: () => { throw { status: 406, message: "El parametro direccionCliente debe contener maximo 100 caracteres" }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "Direccion", void 0);
__decorate([
    Expose({ name: "telefonoCliente" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro telefonoCliente es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El parametro telefonoCliente debe ser una cadena de texto" }; } }),
    MaxLength(20, { message: () => { throw { status: 406, message: "El parametro telefonoCliente debe contener maximo 100 caracteres" }; } }),
    Matches(/^[0-9]+$/, { message: () => { throw { status: 406, message: "El parametro telefonoCliente solo puede contener números" }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "Telefono", void 0);
__decorate([
    Expose({ name: "emailCliente" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro emailCliente es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El parametro emailCliente debe ser una cadena de texto" }; } }),
    MaxLength(100, { message: () => { throw { status: 406, message: "El parametro emailCliente debe contener maximo 60 caracteres" }; } }),
    IsEmail({}, { message: () => { throw { status: 406, message: "El parametro emailCliente debe ser una direccion de correo electronico valido" }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "Email", void 0);
