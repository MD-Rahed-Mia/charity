import React from "react";
import Header from "../../components/adminComponents/Header";
import Menu from "../../components/adminComponents/Menu";

function Admin() {
  return (
    <div className="min-h-[100vh]">
      <Menu />
      <Header title="Dashboard"/>

      <div className="ml-[200px]">
      <h1 className="text-4xl font-extrabold text-center py-8">Welcom to admin dashbaord</h1>
      </div>
    </div>
  );
}

export default Admin;
