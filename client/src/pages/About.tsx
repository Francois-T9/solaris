import React from "react";

function About() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 ">
      <div className="card bg-base-100 w-96 shadow-sm h-1/2">
        <div className="flex items-center w-full justify-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">Nombre Apellido</h2>
          <p>Descripcion</p>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm h-1/2">
        <div className="flex items-center w-full justify-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">Nombre Apellido</h2>
          <p>Descripcion</p>
        </div>
      </div>
    </div>
  );
}

export default About;
