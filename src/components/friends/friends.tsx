import React from "react";
import s from './friends.module.css'
export type UserType={
    id: number,
    photo: string
    fullName: string,
    location: {
        country: string
        city: string
},
    follow:boolean
}

type FriendsPropsType ={
    users:UserType[],
    follow:(id:number)=>void,
    unfollow:(id:number)=>void
    setUsers:(e:Array<UserType>)=>void
}


const Friends=(props:FriendsPropsType)=>{
if (props.users.length===0)



    props.setUsers(
    [
        {
            id: 1,
            photo: "https://avatars.mds.yandex.net/i?id=6ca2386906163188bdd9417640f7db96f0492632-4446042-images-thumbs&n=13",
            fullName: 'Aleksandra Sokolova',
            location: {country: 'Russia', city: 'Saint-Petersburg'},
            follow: false
        },
        {id: 2,
            photo: "https://minutapozitiva.ru/wp-content/uploads/2018/02/smeshnoj-kot.jpg",
            fullName: 'Vladimir Bocharov',
            location: {country: 'Russia', city: 'Moskow'},
            follow: true},
        {id: 3,
            photo: "https://amiel.club/uploads/posts/2022-03/1647636713_1-amiel-club-p-veselii-kot-kartinki-1.jpg",
            fullName: 'Dina Nikolaeva',
            location: {country: 'Russia', city: 'Moskow'},
            follow: true},
        {id: 4,
            photo: "https://i.pinimg.com/564x/f5/4f/13/f54f13638f0941531c46b817022065bb.jpg",
            fullName: 'Egor Voskresenskii',
            location: {country: 'Cyprus', city: 'Nicossia'},
            follow: true},
        {id: 5, photo: "https://damion.club/uploads/posts/2022-01/1643206837_4-damion-club-p-veselii-kot-4.jpg",
            fullName: 'Lina Glina',
            location: {country: "Pilnii ugol", city: 'UnderBad'},
            follow: true}

    ]
)



    return (
    <div>
        {props.users.map(f =>
        <div key={f.id}>
          <span>
           <span>
               <div className={s.avatar}>
                   <img src={f.photo} />
               </div>
               <div>{
                   f.follow?<button onClick={()=>{props.follow(f.id)}}>Follow</button>:
                       <button onClick={()=>{props.unfollow(f.id)}}>Unfollow</button>
               }</div>

           </span>
<span>
    <div>{f.fullName}</div>
    <div>{f.location.city}</div>
    <div>{f.location.country}</div>
</span>
        </span>
        </div>
        )}


    </div>)
}

export default Friends