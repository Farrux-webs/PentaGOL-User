import React from 'react'
import "./style.scss"
import img from "../../../assets/images/Cristiano.png"

const Index = () => {
  return (
    <div className="full-news-left">
      <img className="full-news-img" height="550" src={img} alt="" />
      <p className="full-news-desc">
        Ilon Mask (Elon Mask, Tesla va boshqa loyihalar rahbari) bir yarim hafta
        ichida ikkinchi marta Xitoyning hukmron doiralari va fuqarolariga
        murojaat qildi. Videoda u ularni ushbu mamlakatda biznesni
        rivojlantirish va kengaytirishga sarmoya kiritishga tayyor ekanligiga
        ishontirdi. Qayta ishlangan ma'lumotlarning xavfsizligiga alohida
        e'tibor qaratiladi. Ular faqat Xitoyning o'zida saqlanadi va shuning
        uchun istalgan vaqtda O'rta Qirollik hukumati foydalanishi mumkin
        bo'ladi. Ilon Mask Xitoyda hafta oxirida bo‘lib o‘tgan Butunjahon
        internet konferensiyasining tomoshabinlariga videomurojaati chog‘ida
        yangi bayonotlar berdi. Kompaniya Cisco Systems (Chak Robbins), Intel
        (Pat Gelsinger) va Qualcomm (Kristiano Amon) rahbarlaridan tashkil
        topgan bo'lib, Xitoy Xalq Respublikasi biznesi manfaatlarini Alibaba va
        Xiaomi rahbarlari himoya qilishgan. Tadbirni Xitoy Xalq Respublikasi
        Davlat kengashi bosh vaziri o‘rinbosari Lyu Xe ochib berdi va Si
        Szinpinning Osmon imperiyasining shaffof raqamli iqtisodiyotni yaratish
        uchun barcha kuchlar bilan ishlash istagi haqidagi so‘zlarini keltirdi.
        Yaqin kelajakda Tesla nafaqat Shanxay filialida elektromobillar ishlab
        chiqarishni kengaytiribgina qolmay, balki mahalliy studiya yordamida
        elektromobilning arzon modelini (narxi 25 000 dollardan kam) ishlab
        chiqmoqchi. Xitoy Xalq Respublikasida yig‘ilgan Tesla Model Y va Model 3
        elektromobillari allaqachon Yevropaga eksport qilinmoqda.
      </p>
    </div>
  );
}

export default Index