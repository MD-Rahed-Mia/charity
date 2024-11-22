import React, { useEffect, useState } from "react";
import Header from "../../components/adminComponents/Header";
import Menu from "../../components/adminComponents/Menu";
import AddNewHero from "../../components/adminComponents/hero-section/AddNewHero";
import UpdateHero from "../../components/adminComponents/hero-section/UpdateHero";
import AxiosInstance from "../../utils/axiosInstance";
import HeroCard from "../../components/adminComponents/hero-section/HeroCard";
import SponsorCard from "../../components/adminComponents/sponsor-section/SponsorCard";
import AddNewSponsor from "../../components/adminComponents/sponsor-section/AddNewSponsor";

function ManageSponsorSection() {
  const [sponsors, setSponsor] = useState(null);

  useEffect(() => {
    async function getHeros() {
      try {
        const response = await AxiosInstance.get("/sponsor");

        console.log(response.data);
        const data = await response.data;

        if (data.success) {
          setSponsor(data.result);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getHeros();
  }, []);

  return (
    <div>
      <Header title="manage sponsor section" />
      <Menu />

      <div className="ml-[200px]">
        <div className="px-20 py-10">
          <AddNewSponsor />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-12">
          {sponsors &&
            sponsors.map((item, index) => {
              return <SponsorCard item={item} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default ManageSponsorSection;
