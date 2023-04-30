import React from 'react'
import Title from "../../UI/defaultHeading/Index" 
import Card from "../../UI/newCard/Index"
import img from "../../assets/images/Cristiano.png"
import ViewAll from "../../UI/ViewAll/Index"
import "./style.scss"

const Index = () => {
  return (
    <>
      <div className="latest-news">
        <div className="container">
          <Title heading="So'ngi yangiliklar" />
          <div className="latest-news-cards-warpper">
            <Card
              img={img}
              heading="Zidan 'Manchester Yunayted'ga Premer-ligaga tayyor emasligini aytdi"
              desc="Zidan 'Manchester Yunayted' ga Premer-ligaga tayyor emasligini aytdi "
              date="12.05.2021  12:54"
            />
            <Card
              img={img}
              heading="Zidan 'Manchester Yunayted'ga Premer-ligaga tayyor emasligini aytdi"
              desc="Zidan 'Manchester Yunayted' ga Premer-ligaga tayyor emasligini aytdi "
              date="12.05.2021  12:54"
            />
            <Card
              img={img}
              heading="Zidan 'Manchester Yunayted'ga Premer-ligaga tayyor emasligini aytdi"
              desc="Zidan 'Manchester Yunayted' ga Premer-ligaga tayyor emasligini aytdi "
              date="12.05.2021  12:54"
            />
            <Card
              img={img}
              heading="Zidan 'Manchester Yunayted'ga Premer-ligaga tayyor emasligini aytdi"
              desc="Zidan 'Manchester Yunayted' ga Premer-ligaga tayyor emasligini aytdi "
              date="12.05.2021  12:54"
            />
            <Card
              img={img}
              heading="Zidan 'Manchester Yunayted'ga Premer-ligaga tayyor emasligini aytdi"
              desc="Zidan 'Manchester Yunayted' ga Premer-ligaga tayyor emasligini aytdi "
              date="12.05.2021  12:54"
            />
            <Card
              img={img}
              heading="Zidan 'Manchester Yunayted'ga Premer-ligaga tayyor emasligini aytdi"
              desc="Zidan 'Manchester Yunayted' ga Premer-ligaga tayyor emasligini aytdi "
              date="12.05.2021  12:54"
            />
            <Card
              img={img}
              heading="Zidan 'Manchester Yunayted'ga Premer-ligaga tayyor emasligini aytdi"
              desc="Zidan 'Manchester Yunayted' ga Premer-ligaga tayyor emasligini aytdi "
              date="12.05.2021  12:54"
            />
            <Card
              img={img}
              heading="Zidan 'Manchester Yunayted'ga Premer-ligaga tayyor emasligini aytdi"
              desc="Zidan 'Manchester Yunayted' ga Premer-ligaga tayyor emasligini aytdi "
              date="12.05.2021  12:54"
            />
          </div>
          <ViewAll heading="Barchasini ko'rish"/>
        </div>
      </div>
    </>
  );
}

export default Index