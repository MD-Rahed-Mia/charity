import React, { useEffect, useState } from "react";
import Header from "../../components/adminComponents/Header";
import Menu from "../../components/adminComponents/Menu";
import AddNewHero from "../../components/adminComponents/hero-section/AddNewHero";
import UpdateHero from "../../components/adminComponents/hero-section/UpdateHero";
import AxiosInstance from "../../utils/axiosInstance";
import HeroCard from "../../components/adminComponents/hero-section/HeroCard";
import SponsorCard from "../../components/adminComponents/sponsor-section/SponsorCard";
import AddNewSponsor from "../../components/adminComponents/sponsor-section/AddNewSponsor";
import AddNewGallery from "../../components/adminComponents/gallery-section/AddNewGallery";
import GalleryCard from "../../components/adminComponents/gallery-section/GalleryCard";

function ManageGallerySection() {
  const [galleries, setGalleries] = useState(null);

  useEffect(() => {
    async function getGalleries() {
      try {
        const response = await AxiosInstance.get("/gallery");

        console.log(response.data);
        const data = await response.data;

        if (data.success) {
          setGalleries(data.result);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getGalleries();
  }, []);

  return (
    <div>
      <Header title="manage gallery section" />
      <Menu />

      <div className="ml-[200px]">
        <div className="px-20 py-10">
          <AddNewGallery />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-12">
          {galleries &&
            galleries.map((item, index) => {
              return <GalleryCard item={item} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default ManageGallerySection;
