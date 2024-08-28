## SETUP REDUX TOOLKIT

# Instalación:

1. npm install @reduxjs/toolkit
2. npm install react-redux

# Setup

1. En el main.jsx importar el Provider de react-redux y envolver App dentro del provider. Al provider hay que pasarle la prop store={store}. Importar el store del archivo que crearemos en el paso 2.

2. En src crear carpeta llamada redux-toolkit y dentro crear el archivo store.

3. En el archivo store crear la configuracion con el configureStore

4. Dentro de la carpeta de redux-toolkit crear el archivo userSlice.js donde colocaremos la logica del userReducer usado en store.js

5. Para ponerlo en practica y mostrarle crearemos una carpeta dentro de src llamada components, crearemos el componente Header y el componente Email.

6. Dentro del Header usaremos el UseSelector
7. En app.jsx: Colocaremos la logica del useEffect para traer los datos que se están pasando al Header
