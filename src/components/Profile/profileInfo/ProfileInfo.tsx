import React from "react";
import s from './ProfileInfo.module.css'
import ProfileDescription from "./profileDescription/profileDescriprion";



export const ProfileInfo = () => {
    return (
        <>
            <div>
                <img
                    src={'https://thumbs.dreamstime.com/b/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B5-%D0%BB%D0%B8%D1%81%D1%82%D1%8C%D1%8F-%D0%B4%D0%B8%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B2%D0%B8%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D0%B0-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9-%D1%84%D0%BE%D0%BD-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-163032874.jpg'}/>
            </div>
            <div >
                <ProfileDescription/>
            </div>

        </>

    )

}
