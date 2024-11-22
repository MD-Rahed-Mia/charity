import React, { useEffect, useState } from "react";
import Header from "../../components/adminComponents/Header";
import Menu from "../../components/adminComponents/Menu";
import AddNewHero from "../../components/adminComponents/hero-section/AddNewHero";
import UpdateHero from "../../components/adminComponents/hero-section/UpdateHero";
import AxiosInstance from "../../utils/axiosInstance";
import HeroCard from "../../components/adminComponents/hero-section/HeroCard";

function ManageHeroSection() {
  const [heros, setHeros] = useState(null);

  useEffect(() => {
    async function getHeros() {
      try {
        const response = await AxiosInstance.get("/all-hero");

        console.log(response.data);
        const data = await response.data;

        if (data.success) {
          setHeros(data.result);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getHeros();
  }, []);

  return (
    <div>
      <Header title="manage hero section"/>
      <Menu />

      <div className="ml-[200px]">
        <div className="px-20 py-10">
          {/* <button className="bg-blue-500 text-center px-3 py-1 cursor-pointer border rounded-md text-white">
            add hero
          </button> */}

          <AddNewHero />
          {/* <UpdateHero /> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-12">
          {heros &&
            heros.map((item, index) => {
              return <HeroCard item={item} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default ManageHeroSection;
