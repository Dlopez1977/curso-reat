import '/src/App.css'

   export function App(){
    return(
        <article>
            <h2 className='text-center text-primary my-4'>Card Twitter</h2>
            <header>
                
                <img className="img-thumbnail" src="/src/img/cristopher1.jpg" alt="cristopher" />
                <div>
                    <h2 className='text-white'>Cristopher Lopez</h2>
                    <span className='text-white' >"@Cristo"</span>
                </div>
            </header>

            <aside>
                <button>Seguir</button>
            </aside>
        </article>
    )
   }

