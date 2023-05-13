export default function Hamburger(){
    return(
        <>
            <div className="hamburger">
                <div className="burger bar1" />
                <div className="burger bar2" />
                <div className="burger bar3" />
            </div>

            <style jsx>{`
                .hamburger {
                    width: 2em;
                    height: 2em;
                    display: flex;
                    justify-content: space-between;
                    flex-flow: row wrap;
                    z-index: 10;
                    cursor: pointer;
                }

                .burger {
                    width: 4rem;
                    height: .35rem;
                    border-radius: 10px;
                    background-color: black;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                    margin: 1px 0px;
                }
            `}</style>
        </>
    )
}