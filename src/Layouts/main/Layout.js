import { MainNavbar } from "./MainNavbar"

export default function Layout ({children}){
    

    return(
           <>
                <MainNavbar></MainNavbar>
               <h1>contenido</h1>
               <main>
                    {children}
                </main>
           </>
    )
}



