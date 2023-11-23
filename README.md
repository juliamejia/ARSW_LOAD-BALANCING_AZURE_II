### Escuela Colombiana de Ingeniería
### Arquitecturas de Software - ARSW

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

#### Integrantes: Julia Mejia y Cristian Rodríguez 

### Dependencias
* Cree una cuenta gratuita dentro de Azure. Para hacerlo puede guiarse de esta [documentación](https://azure.microsoft.com/es-es/free/students/). Al hacerlo usted contará con $100 USD para gastar durante 12 meses.
Antes de iniciar con el laboratorio, revise la siguiente documentación sobre las [Azure Functions](https://www.c-sharpcorner.com/article/an-overview-of-azure-functions/)

### Parte 0 - Entendiendo el escenario de calidad

Adjunto a este laboratorio usted podrá encontrar una aplicación totalmente desarrollada que tiene como objetivo calcular el enésimo valor de la secuencia de Fibonnaci.

**Escalabilidad**
Cuando un conjunto de usuarios consulta un enésimo número (superior a 1000000) de la secuencia de Fibonacci de forma concurrente y el sistema se encuentra bajo condiciones normales de operación, todas las peticiones deben ser respondidas y el consumo de CPU del sistema no puede superar el 70%.

### Escalabilidad Serverless (Functions)

1. Cree una Function App tal cual como se muestra en las  imagenes.

![](images/part3/part3-function-config.png)

![](images/part3/part3-function-configii.png)

2. Instale la extensión de **Azure Functions** para Visual Studio Code.

![](images/part3/part3-install-extension.png)

3. Despliegue la Function de Fibonacci a Azure usando Visual Studio Code. La primera vez que lo haga se le va a pedir autenticarse, siga las instrucciones.

![](images/part3/part3-deploy-function-1.png)

![](images/part3/part3-deploy-function-2.png)  

Aqui podemos ver la aplicacion desplegada  
<img width="617" alt="image" src="https://github.com/juliamejia/ARSW_LOAD-BALANCING_AZURE_II/assets/98657146/20088259-eafa-44b3-88d2-fbdbdf1f7b37">


4. Dirijase al portal de Azure y pruebe la function.
![](images/part3/part3-test-function.png)

   <img width="609" alt="image" src="https://github.com/juliamejia/ARSW_LOAD-BALANCING_AZURE_II/assets/98657146/687c7e50-94de-40c7-963f-97b9574fd3f0">


6. Modifique la coleción de POSTMAN con NEWMAN de tal forma que pueda enviar 10 peticiones concurrentes. Verifique los resultados y presente un informe.
   <img width="900" alt="image" src="https://github.com/juliamejia/ARSW_LOAD-BALANCING_AZURE_II/assets/98657146/a3d41201-901c-46d8-9244-ae41100411e9">  
   <img width="600" alt="image" src="https://github.com/juliamejia/ARSW_LOAD-BALANCING_AZURE_II/assets/98657146/a2ad717b-8634-4162-b246-b582c1824598">  
   <img width="600" alt="image" src="https://github.com/juliamejia/ARSW_LOAD-BALANCING_AZURE_II/assets/98657146/6b7e5444-e80a-4ff5-890b-d455fd2e249c">  
   <img width="550" alt="image" src="https://github.com/juliamejia/ARSW_LOAD-BALANCING_AZURE_II/assets/98657146/8806a026-137a-4317-8d86-274aed03006a">  
   <img width="500" alt="image" src="https://github.com/juliamejia/ARSW_LOAD-BALANCING_AZURE_II/assets/98657146/090f3824-1a24-44cb-aeb3-46e70925a6e6">  

  El sistema tarda, en promedio, 43,5 segundos en generar una respuesta a la solicitud. Todas las solicitudes fueron completadas con éxito y no se produjo ningún error   durante su ejecución.

6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.
   

**Preguntas**

* ¿Qué es un Azure Function?  
  Azure Functions es una herramienta que posibilita la creación de fragmentos de código compactos, también conocidos como funciones, con el propósito de reducir la     
  infraestructura necesaria y, por ende, disminuir los costos asociados. Esta solución permite a los desarrolladores enfocarse exclusivamente en la creación y mejora 
  de su código, ya que Azure asume la responsabilidad de proporcionar todos los recursos esenciales para el adecuado funcionamiento de estas funciones. En otras 
  palabras, al utilizar Azure Functions, los equipos de desarrollo pueden optimizar sus esfuerzos al escribir y perfeccionar código sin tener que preocuparse por la 
  gestión de la infraestructura subyacente, lo que resulta en una mayor eficiencia y agilidad en el desarrollo de aplicaciones.
  
* ¿Qué es serverless?  
  "Serverless" se refiere a un modelo de computación en el cual el proveedor de servicios en la nube se encarga de ejecutar fragmentos de código sin que sea necesario    gestionar directamente los servidores subyacentes. En este enfoque, la asignación de recursos se realiza dinámicamente, y solo se factura por los recursos       
   efectivamente utilizados durante la ejecución del código.
   En lugar de preocuparse por la infraestructura y la administración de servidores, los desarrolladores pueden centrarse en la creación de sus funciones o fragmentos    de código. Estos fragmentos, también conocidos como funciones sin servidor, son ejecutados en entornos sin estado, generalmente dentro de contenedores, y pueden 
   ser activados por una variedad de eventos, como solicitudes HTTP, eventos de base de datos, servicios de colas, alertas de monitoreo, carga de archivos, entre 
   otros.
  
* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?  
  El tiempo de ejecución, también conocido como "runtime", se refiere al período durante el cual un programa está en funcionamiento dentro de un sistema operativo.
  Cuando se opta por el plan de consumo y se elige la versión 12 del tiempo de ejecución (o "runtime"), se establece un límite de tiempo de 5 minutos para la 
  ejecución 
  de un programa. Esto significa que el programa tiene ese intervalo específico para realizar sus operaciones antes de que se agote el tiempo asignado. Además, es 
  importante destacar que una vez transcurridos esos 5 minutos, la memoria utilizada por el programa será liberada, lo que implica que cualquier información 
  almacenada 
  en la memoria durante la ejecución será eliminada.
  Este enfoque de límite de tiempo y limpieza de memoria es particularmente útil en entornos de computación en la nube donde se busca optimizar los recursos y 
  garantizar un uso eficiente de la capacidad disponible. En resumen, al elegir el plan de consumo y la versión específica del tiempo de ejecución, se establece un 
  marco de tiempo y una política de gestión de memoria que influyen en el comportamiento y rendimiento del programa en ejecución.
  
* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?  
  
  Crear una cuenta de almacenamiento (Storage Account) junto con una aplicación de funciones (Function App) es esencial debido a la interdependencia entre ambas en el 
  entorno de Azure.
  La aplicación de funciones (Function App) utiliza Azure Storage como una parte fundamental de su infraestructura. Esto se debe a que las operaciones clave, como la 
  gestión de desencadenadores (triggers) y el registro de ejecuciones de funciones, se apoyan en Azure Storage para su funcionamiento eficiente.
  
* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.  
Existen tres tipos de planes para una Function App en Azure, cada uno con características distintivas que se adaptan a diferentes necesidades y escenarios: Consumption, Premium y Dedicated.  

1. Consumption Plan:  
    * Escalabilidad Dinámica: Ajusta automáticamente la cantidad de recursos disponibles según la demanda.  
    * Facturación por Uso: Se factura únicamente por el tiempo en que la aplicación está en ejecución.  
    * Limitaciones:  
        Tiempo de Timeout de 5 minutos.  
        Memoria máxima de 1.5 GB por instancia.  
        Almacenamiento de hasta 1 GB.  
        Límite de 200 instancias.  
    * Ventajas:  
      Eficiencia en costos debido a la facturación por uso.  
      Escalabilidad automática para manejar variaciones en la carga de trabajo.  
    
2. Premium Plan:  
    * Escalabilidad Dinámica: Se adapta automáticamente según la carga, pero se factura por el número de segundos de CPU y la memoria utilizada.  
    * Configuración Flexible:  
        Permite variar el tiempo de timeout.  
        Memoria por instancia de hasta 3.5 GB.  
        Almacenamiento de hasta 250 GB.  
        Máximo de 100 instancias.  
    * Ventajas:  
      Mayor control sobre la configuración de recursos.  
      Adaptabilidad a cargas de trabajo específicas.  
    
3. Dedicated Plan:  
    * Escalabilidad Manual: El cliente tiene control directo sobre la escalabilidad y el número de instancias.  
    * Configuración Flexible:  
        Timeouts ilimitados.  
        Memoria por instancia de 1.7 GB.  
        Almacenamiento de hasta 1000 GB.  
        Máximo de 20 instancias.  
    * Ventajas:  
        Control total sobre la infraestructura y escalabilidad.  
        Capacidad para adaptarse a requisitos específicos de carga de trabajo.  
    
4. Desventajas Generales:  
    * El plan de Consumo puede tener limitaciones en términos de tiempo de ejecución y recursos por instancia.  
    * El plan Premium podría resultar más costoso debido a la facturación por segundos de CPU y memoria.  
    * El plan Dedicado requiere una gestión más manual y podría ser excesivo para cargas de trabajo más ligeras.  
  
* ¿Por qué la memoization falla o no funciona de forma correcta?  
  La falla o ineficacia de la memorización se debe a la naturaleza del plan de Consumo que establece un límite de tiempo para retener la memoria. En este contexto, la 
  memoria generada por la aplicación solo se mantiene durante un período de 5 minutos. Una vez transcurrido este tiempo, toda la información almacenada en la memoria 
  se borra automáticamente.
  Esta limitación temporal afecta directamente el concepto de memorización, que implica retener y reutilizar datos previamente calculados para evitar la redundancia 
  en operaciones. En el caso del plan de Consumo, el corto tiempo de retención de la memoria significa que los cálculos realizados anteriormente se perderán después 
  de 5 minutos. Como resultado, cuando se vuelva a requerir la misma información, la aplicación se verá obligada a realizar nuevamente esos cálculos, lo que 
  contrarresta el propósito de la memorización.
  
* ¿Cómo funciona el sistema de facturación de las Function App?  
  En el plan de consumo de Azure Function, la facturación se calcula según la cantidad de recursos utilizados y la frecuencia de ejecuciones por segundo. Los usuarios   pagan únicamente por los recursos y la actividad de ejecución real de sus funciones, lo que brinda flexibilidad y eficiencia en costos.

