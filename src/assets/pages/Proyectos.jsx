import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const ProjectCard = ({ title, description, technologies, link }) => (
  <Card variant="outlined" style={{ marginBottom: "20px" }}>
    <CardContent>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="body2" component="p">
        {description}
      </Typography>
      <Typography variant="h6" component="h5" sx={{ fontWeight: 'bold' }}>
        Tecnologias utilizadas: {technologies}
      </Typography>
      <Link href={link} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
        Ver proyecto
      </Link>
    </CardContent>
  </Card>
);

const Proyectos = () => {
  return (
    <div style={{ marginBottom: "200px" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Mis Proyectos
      </Typography>

      <ProjectCard
        title="Memotest de Pokemones"
        description="En este proyecto, utilicé la API llamada PokeApi para crear un juego de Memotest..."
        technologies="ReactJS - Vite - MaterialUI - Axios - SweetAlert"
        link="https://memotestfedecortes.netlify.app/"
      />

       <ProjectCard
        title="Tienda"
        description="En este proyecto, Me junte con un compañero para hacer el modelo de una tienda online..."
        technologies="ReactJS - Vite - MaterialUI - Axios - SweetAlert"
        link="https://memotestfedecortes.netlify.app/"
      />
    </div>
  );
};

export default Proyectos;