Herramientas utilizadas:
cors, dotenv, express, mysql, nodemon

index.js
aquí defino el app donde se utilizara cors para conectarme al frontend y express para las rutas, finalmente defino las la ruta principal a utilizar y el puerto.

app.js
Hago el router para las rutas y defino los métodos donde solo utilizo GET uno para obtener todos los productos, otro para obtenerlos por categoría y otro para obtener la categoría,
seguidamente los controlo con un controller.

controller -- product.js
Es donde hago las funciones para que luego vayan a la base de datos, donde nuevamente son solamente tres, readProductCtrl para obtener los productos que va acompañado de un keyword enviado desde el frontend para la búsqueda, searchByCategoryCtrl que va con un params enviado del front para saber la categoría seleccionada y finalmente readCategoryCtrl que solamente la utilizo para obtener la lista de categorías.

service
acá defino la query que ira a la base de datos para obtener la data para cada uno de los ctrls.

db -- dbconfig.js
la utilizo para conectarme a la BD no utilice el env ya que considere que era necesario que se vea que me estoy conectando a BD de la tarea y no a otra.
