

function Preloader() {
        return (
            <div className="preloader-wrapper big active" style={{margin: '30px auto', display: 'block'}}>
                <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                        <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        )
}

export { Preloader };