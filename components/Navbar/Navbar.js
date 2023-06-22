import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
        <nav>
            <menu>
                {/* Anchor para crear enlace con los componentes por defecto. 
                    Pero esta navegacion es navegación por el servidor, ya que el navegador o el cliente
                    le pregunta o le pide al servidor la informaciòn de la siguiente ruta.
                <a href='/' >Home</a>
                <a href='/about' >About</a>
                */}
                {/* Esta el la forma que plantea next para tener una navegaciòn con mayor eficiencía,
                    ya que permite que el navegador no se recarge, por lo cual la aplicación es más
                    rapida para navegar
                */}
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href={'/user'}>User</Link>
            </menu>
        </nav>
  )
}

export default Navbar