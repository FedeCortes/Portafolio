import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const ProjectCard = ({ title, description, technologies, link }) => (
  <Card
    variant="outlined"
    sx={{
      marginBottom: "20px",
      backgroundColor: "#ffffff", // Color de fondo de la tarjeta
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Sombra
      borderRadius: "8px", // Bordes redondeados
    }}
  >
    <CardContent>
      <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="body2" component="p">
        {description}
      </Typography>
      <Typography variant="h6" component="h5" sx={{ fontWeight: "bold" }}>
        Tecnologias utilizadas: {technologies}
      </Typography>
      <Link
        href={link}
        target="_blank"
        rel="noopener"
        style={{
          textDecoration: "none",
          color: "#3f51b5", // Color del enlace
          fontWeight: "bold",
        }}
      >
        Ver proyecto
      </Link>
    </CardContent>
  </Card>
);

const Proyectos = () => {
  return (
    <div
      style={{
        marginBottom: "200px",
        backgroundColor: "#f7f7f7", // Color de fondo de la sección
        padding: "20px", // Espaciado interno
      }}
    >
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
        title="Instagram Publicaciones CRUD "
        description="En este proyecto, Realicé un CRUD utilizando el stack MERN. Se puede crear publicaciones, borrarlas, darle 'me gusta' y editarlas. Y todo se guarda en la base de datos."
        technologies="ReactJS - NodeJS - Express - MongoDB - MaterialUI - Axios - SweetAlert"
        link="https://instagram-challenge.netlify.app/"
       
      />

      <ProjectCard
        title="Tienda (En breve )"
        description="En este proyecto, Me junte con un compañero para hacer el modelo de una tienda online..."
        technologies="ReactJS - Vite - MaterialUI - Axios - SweetAlert"
       
      />

      
    </div>
  );
};

export default Proyectos;