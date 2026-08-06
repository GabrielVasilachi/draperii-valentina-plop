import type { ServiceStep } from "../data/serviceSteps";

type ServiceStepCardProps = {
  service: ServiceStep;
  reversed: boolean;
};

export function ServiceStepCard({ service, reversed }: ServiceStepCardProps) {
  return (
    <article className={reversed ? "service-row reverse" : "service-row"}>
      <div className="service-row-image">
        <img src={service.image} alt={service.title} />
        <span>{service.number}</span>
      </div>
      <div>
        <span className="eyebrow">Etapa {service.number}</span>
        <h2>{service.title}</h2>
        <p>{service.text}</p>
        <ul>
          {service.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
