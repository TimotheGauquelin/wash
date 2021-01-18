import React from 'react'

export const AvisResume = ({ item }) => {
    return (
        <div key={item.firstName} className="resumeAvis">
            <div>
                <p>Avis de passage de M./Mme <b>{item.firstName}</b> fait le <b>{item.date}</b>.</p>
            </div>
            <div>
                <p>Les observations sont les suivantes : <b>{item.observations}</b></p>
            </div>
        </div >
    )
}
