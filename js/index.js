//ESTUDIANTE-B
//Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
//Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
//retorne los nombres de los estudiantes aprobados.
//La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
//Función: nombresDeAprobados.
//Parámetros: estudiantes (array de objetos estudiante).
//Retorno: array de strings, con los nombres de los estudiantes aprobados. 

let estudiantes = [
    {nombre: 'Luis', semestre: 5, nota: 14},
    {nombre: 'Ana', semestre: 4, nota: 17},
    {nombre: 'Pedro', semestre: 6, nota: 8},
    {nombre: 'Maria', semestre: 3, nota: 15},
    {nombre: 'Carlos', semestre: 5, nota: 12},
    {nombre: 'Luisa', semestre: 4, nota: 16},
    {nombre: 'Juan', semestre: 6, nota: 9},
    {nombre: 'Andrea', semestre: 3, nota: 18},
    {nombre: 'Diego', semestre: 5, nota: 11},
    {nombre: 'Sofia', semestre: 4, nota: 19}];

    let nombresDeAprobados = (estudiantes) => {
        let aprobados = [];
        for (let i = 0; i < estudiantes.length; i++){
            if (estudiantes[i].nota >= 10){
                aprobados.push(estudiantes[i].nombre);
            }
        }
        return aprobados;
    }

    let salida = document.getElementById('salida');
    let estudiantesaprobados = nombresDeAprobados(estudiantes);
    salida.innerHTML = 'Nombre de los estudiantes aprobados:<br>';
    estudiantesaprobados.forEach(estudiantesaprobados => {
        salida.innerHTML += `Nombre:` + JSON.stringify(estudiantesaprobados) + `<br>`
    })
    
