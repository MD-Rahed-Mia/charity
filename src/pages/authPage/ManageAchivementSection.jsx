import React, { useEffect, useState } from "react";
import Header from "../../components/adminComponents/Header";
import Menu from "../../components/adminComponents/Menu";
import AddNewHero from "../../components/adminComponents/hero-section/AddNewHero";
import UpdateHero from "../../components/adminComponents/hero-section/UpdateHero";
import AxiosInstance from "../../utils/axiosInstance";
import HeroCard from "../../components/adminComponents/hero-section/HeroCard";
import AchivementCard from "../../components/adminComponents/achivement-section/AchivementCard";
import AddNewAchivement from "../../components/adminComponents/achivement-section/AddNewAchivement";

function ManageAchivementSection() {
  const [achivement, setAchivement] = useState(null);

  useEffect(() => {
    async function getAchivements() {
      try {
        const response = await AxiosInstance.get("/achivement");

        console.log(response.data);
        const data = await response.data;

        if (data.success) {
          console.log();
          setAchivement(data.result);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getAchivements();
  }, []);

  return (
    <div>
      <Header title="manage ahivement section" />
      <Menu />

      <div className="ml-[200px]">
        <div className="px-20 py-10">
          <AddNewAchivement />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-12">
          {achivement &&
            achivement.map((item, index) => {
              return <AchivementCard item={item} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default ManageAchivementSection;
