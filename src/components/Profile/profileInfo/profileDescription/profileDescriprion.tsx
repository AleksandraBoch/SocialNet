import React from "react";
import s from'./profileDescription.module.css'

const ProfileDescription=()=>{
    return(
        <span className={s.item}>
            <div className={s.item}>
                <img src={'https://web-zoopark.ru/wp-content/uploads/2018/07/7-9-700x450.jpg'}/>
            </div>
            <div>
                <h3>Name</h3>
                <div>
                    UserInfo
                </div>
            </div>
        </span>

    )

}

export default ProfileDescription