import React from "react";

function Month(props) {

    let { activityName,monthName,month ,handleDelete,handleDay} = props
    return (
        <>
           <section className="flex align-center column">
           {
                activityName.map((a,i) =>
                    <div key={i} className="month flex space-between">
                        <div className="flex-30 flex column align-center flex-center">
                            <h2>{a.activity}</h2>
                            <h3>{monthName[month]}</h3>
                        </div>
                        <div className="flex-60 flex wrap">
                            {a.days.map(d =>
                                <button key={d.day} className={`btn2 ${d.isActive ? 'active ':''}`} onClick={()=>{handleDay(a.activity,d.day)}}>{d.day}</button>
                            )}
                        </div>
                        <button className="btn3" onClick={()=>{handleDelete(a.activity)}}>x</button>
                    </div>
                )
            }
           </section>
        </>
    )
}


export default Month
