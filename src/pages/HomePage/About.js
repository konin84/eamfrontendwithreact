import React from "react";

export default function About() {
  return (
    <div className="pl-5 rounded-md mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="text-justify p-4">
          <p className="text-2xl font-bold text-green-600  m-1">About us</p>
          <p className="text-md font-light m-1">
            Eagle Assets & Resource Management is a limited liability company
            operating in Ghana and Europe. The company is a legally registered
            entity operating in Ghana with its headquarters in Kumasi, the
            Ashanti Region of Ghana.
          </p>
          <p className="text-md font-light ">
            We offer tailor made consultation services to investors concerning
            pertinent investment opportunities and the needed in facilitating
            their business without litigation and other associated challenges.
            We are open to doing business with Ghanaians both home and in the
            diaspora, foreign investors, Philanthropist, Organizations among
            others.
          </p>
        </div>
        <div className="hidden lg:block md:text-xs mt-1 ">

        <img
          className="object-contain md:object-scale-down -mt-14 "
          src="../assets/agreement1.jpg"
          width={600}
          // height={300}
          alt=""
        />
        </div>
      </div>
    </div>
  );
}
