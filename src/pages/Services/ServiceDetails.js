import React from "react";

export default function ServiceDetails(props) {
  const { recordForEdit } = props;
  return (
    <section>
      <div className="text-3xl font-bold mb-7 uppercase justify-items-end text-green-700">
        {recordForEdit.name}
      </div>
      <div className="text-xl font-light mb-4  justify-items-end text-green-700">
        {recordForEdit.description}
      </div>
    </section>
  );
}
