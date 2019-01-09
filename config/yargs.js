const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {

        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'marca como completado o pendiente la terea'

        }

    })
    .command('borrar', 'borrado de una tarea', {

        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },


    })
    .help()
    .argv;

module.exports = {
    argv
}