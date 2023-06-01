/**
 * Iniciar el servidor
 */

import app from './app'


const puerto=3001

app.listen(
    puerto,
    ()=>{
        console.log(`El servidor está ejecutándose en el puerto ${puerto}`)
    }
)

