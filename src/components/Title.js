import React from 'react';



const Title = ({ title, subtitle }) => {
    return (
        <div className="row my-5 pt-5">
            <div className="col-10 mx-auto my-2 text-center">
                <h2 className="text-uppercase" style={{color: 'var(--mainYellow)'}}>{title}</h2>
				<p style={{color: 'grey', fontSize:'0.9rem'}}>{subtitle}</p>
            </div>
        </div>
    )
}

export default Title;