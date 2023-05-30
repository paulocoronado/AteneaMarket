/**
 * Iniciar el servidor
 */

import app from './app'


const puerto=3000

app.listen(
    puerto,
    ()=>{
        console.log(`El servidor está ejecutándose en el puerto ${puerto}`)
    }
)

