import { MainNavbar } from "./MainNavbar"

export default function Layout ({children}){
    

    return(
           <>
                <MainNavbar></MainNavbar>
               <main>
                    {children}
                </main>
           </>
    )
}



