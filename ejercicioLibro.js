class Libro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.leido = false;
    }

    marcarComoLeido() {
        this.leido = true;
    }

    marcarComoNoLeido() {
        this.leido = false;
    }

    obtenerInformacion() {
        const leidoTexto = this.leido ? "Sí" : "No";
        return `Título: ${this.titulo}, Autor: ${this.autor}, Género: ${this.genero}, Leído: ${leidoTexto}`;
    }
}

const libro1 = new Libro("Hábitos Atómicos", "James Clear", "Desarrollo Personal");
const libro2 = new Libro("El monje que vendio su ferrari", "Robin S. Sharma", "Desarrollo Personal");

libro1.marcarComoLeido();

console.log(libro1.obtenerInformacion());
console.log(libro2.obtenerInformacion());
