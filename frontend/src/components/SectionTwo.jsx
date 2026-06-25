export default function SectionTwo() {
    const galleria = {
        "img-1": "https://picsum.photos/id/17/367/267",
        "img-2": "https://picsum.photos/id/19/2500/1667",
        "img-3": "https://picsum.photos/id/22/4434/3729",
        "img-4": "https://picsum.photos/id/25/367/267",
        "img-5": "https://picsum.photos/id/29/367/267",
        "img-6": "https://picsum.photos/id/30/367/267"
    }

    return (
        <section id="sezione-showgallery" className="site-section">
            <div className="wrapper">
                <div className="title">
                    <h2>I nostri lavori</h2>
                </div>

                <div className="content">

                    <div className="galleria">
                        {
                            Object.keys(galleria).map(img => {
                                return (
                                    <div className="single-image">
                                        <img src={galleria[img]} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}