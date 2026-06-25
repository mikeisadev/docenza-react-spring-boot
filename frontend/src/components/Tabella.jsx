export default function Tabella({ colonne, righe }) {

    return (
        <div class="tabella-prezzo">
            {
                // Colonne tabella
                (colonne) ? 

                    Object.keys(colonne).map(colKey => {
                        return <div className="colonna">{colonne[colKey]}</div>
                    }) 
                
                    : 

                    <div>Caricamento...</div>
            }

            {
                // Righe tabella
                (righe) ?

                    Object.keys(righe).map(rowKey => {
                        return righe[rowKey].map(data => {
                            return <div className="riga-dato">{data}</div>
                        })
                    })

                    :

                    <div>Caricamento...</div>
            }
        </div>
    )
}