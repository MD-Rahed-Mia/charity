import React, { useState } from "react";
import Menu from "../../components/adminComponents/Menu";
import Header from "../../components/adminComponents/Header";
import AddAboutSection from "../../components/adminComponents/about-section/AddAboutSection";
import { useEffect } from "react";
import AxiosInstance from "../../utils/axiosInstance";
import AboutCard from "../../components/adminComponents/about-section/AboutCard";

export default function ManageAboutSection() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    async function getabouts() {
      try {
        const response = await AxiosInstance.get("/about-section");

        //  console.log(response.data);
        const data = await response.data;

        if (data) {
          setAbout(data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getabouts();
  }, []);

  return (
    <div>
      <Menu />
      <Header title={'Manage about section'}/>

      <div className="ml-[200px] p-12">
        <AddAboutSection />

        <div className="grid mt-8 px-4 md:px-12 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {about &&
            about.map((item, index) => {
              return <AboutCard item={item} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
