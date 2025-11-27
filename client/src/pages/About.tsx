function About() {
  return (
    <div className="flex flex-col   items-center gap-4 ">
      <h1 className="text-2xl font-bold underline">¿Quiénes sómos?</h1>
      {/* <Chart /> */}

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="card bg-base-100 w-96 shadow-sm ">
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
        <div className="card bg-base-100 w-96 shadow-sm ">
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
      <div className="card w-80 lg:w-240 bg-base-100 card-sm shadow-sm border-8 border-azul">
        <div className="card-body">
          <p className="text-xl">
            “En Solaris estamos construyendo el futuro energético de México. No
            solo instalamos paneles: integramos sistemas completos de energía
            limpia, baterías inteligentes y cargadores para vehículos
            eléctricos. Nuestro objetivo es liderar la transición hacia hogares
            y negocios autosuficientes, conectados y preparados para los
            próximos 10 años de innovación. ”
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
