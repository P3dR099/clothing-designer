# clothing-designer
Final project for the IronHack bootcamp

## API Auth Documentation
`https://documenter.getpostman.com/view/6677517/TVRkYnBP`

#### endpoints table

Method |Path | Description 
--- | --- | ---
GET| / | Index
GET| /?query |  Busqueda de prenda según el tag
GET| /login | iniciar sesion 
POST| /login | iniciar sesion
GET | /signup | registro
POST| /signup | registro
GET | /logout | Cerrar sesión
GET | /clothes | Ver toda la ropa disponible
GET | /view-customize-tshirts | Ver camisetas que pueden customizarse
PUT | /clothes/customize-tshirt | personalizar camiseta (sin logarse)
PUT | /clothes/user/customize-tshirt | personalizar camiseta (usuario)
GET | /community/ | Comunidad de diseñadores
GET | /community/all-clothes-custom | Ver ropa personalizada por la comunidad
GET | /user-profile | perfil de usuario
PUT | /user-profile/edit | editar perfil de usario
GET | /user/all-clothes-customize | Ver ropa de usuario personalizada
PUT | /user/clothes-customize/edit/:id | Editar una prenda de usuario 
DELETE | /user/clothes-customize/delete/:id | Eliminar una prenda de usuario personalizada
GET | /shop | Ir al carrito 
POST | /shop | Comprar prenda/s
DELETE | /shop/delete | Eliminar prenda del carrito
...

**Top Level Directory Layout**
```
.
├── client
├── server                   
├── LICENSE
└── README.md
```

#### Structure client folder
````
├── ...                  	
├── client                 	
├── ├── src
│        ├── service
|	       └──... services.js
│        ├── components
│	       └──... index.js
└── ...
````
				   

#### components
 ```
.
├── ...
├── components
│   ├── custom-designer 
│   ├── layout                        
│   ├── pages
|   ├── ...App.js
|   └── ...               
└── ...
 ```
 #### layout
```
.
├── ...
├── home
|     ├── HomePage.js
|     └── ...
└── ...

.
├── ...
├── navbar
|     ├── NavBar.js
|     └── ...
└── ...

├── ...
├── footer
|     ├── Footer.js
|     └── ...
└── ...
 ```

#### custom-designer
```
├── ...
├── custom-designer
|	 ├── Canvas.js
|	 ├── Designer.js
|	 └── ...
└── ...
 ```

#### pages
```
.
├── ...
|	 ├── community
|	 	├── Community.js
|		└── ...	
|	 ├── cart
|	      ├── Cart.js
|	      └── ...
|	 ├── profile
|	  	├── Profile.js 
|	 	└── ...
|	 ├── login
|	       ├── Login.js 
|	       └── ...
|	 ├── singup
|	       ├── Singup.js 
|	       └── ...
└── ...
 ```
