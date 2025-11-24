function FAQ() {
  return (
    <div className="max-w-2xl mx-auto w-full items-center flex flex-col gap-4 ">
      <h1 className="text-2xl font-bold underline">Preguntas frecuentes</h1>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300 ">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          ¿Cómo funcionan los paneles solares?
        </div>
        <div className="collapse-content text-sm">
          Los paneles capturan la luz del sol y la convierten en electricidad
          que puedes usar en casa o negocio.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          ¿Cuánto puedo ahorrar con paneles solares?
        </div>
        <div className="collapse-content text-sm">
          Depende de tu consumo, pero la mayoría de nuestros clientes ahorra
          entre 70% y 98% en su recibo.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          ¿Requieren mantenimiento?
        </div>
        <div className="collapse-content text-sm">
          Solo limpieza ocasional y una revisión anual para asegurar su
          eficiencia.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          ¿Qué puedo alimentar con las baterías de respaldo?
        </div>
        <div className="collapse-content text-sm">
          Refrigerador, luces, internet, cámaras de seguridad, computadora y
          más, incluso durante apagones.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          ¿Qué tan rápido cargará mi coche eléctrico?
        </div>
        <div className="collapse-content text-sm">
          Depende del cargador y del modelo del coche, pero normalmente entre 2
          y 6 horas con un cargador Nivel 2.
        </div>
      </div>
    </div>
  );
}

export default FAQ;
