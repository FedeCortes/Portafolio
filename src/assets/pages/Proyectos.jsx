import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Proyectos = () => {
  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Mis Proyectos
      </Typography>
      <a href="https://memotestfedecortes.netlify.app/" target="_blank" style={{textDecoration:"none"}}>
        <Card variant="outlined">
        <CardContent>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
     Memotest de Pokemones
     </Typography>
  <Typography variant="body2" component="p">
    En este proyecto, utilicé la API llamada PokeApi para crear un juego de Memotest.
    Al ingresar al juego, se mostrarán todas las cartas de pokemones dadas vuelta y desordenadas.
    Tu objetivo es encontrar todas las parejas de pokemones coincidentes.

    El juego cuenta con la lógica completa del Memotest, lo que significa que las cartas se voltearán y se verificará si son coincidentes.
    Si encuentras una pareja de pokemones, se quedarán descubiertos. Si no coinciden, las cartas se volverán a voltear después de un breve instante.

    Además, he implementado la funcionalidad de reiniciar el juego. Podes utilizar el botón de reset para borrar las parejas encontradas y mezclar las cartas nuevamente.

  </Typography>
  <Typography variant="h6" component="h5" sx={{ fontWeight: 'bold' }}>
  Tecnologias utilizadas: ReactJS - Vite - MaterialUI - Axios - SweetAlert
</Typography>
</CardContent>
        </Card>
      </a>

      <a href="link-al-proyecto-2" target="_blank" style={{textDecoration:"none"}}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Título del Proyecto 2
            </Typography>
            <Typography variant="body2" component="p">
              Descripción del Proyecto 2
            </Typography>
          </CardContent>
        </Card>
      </a>

      <a href="link-al-proyecto-2" target="_blank" style={{textDecoration:"none"}}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Título del Proyecto 2
            </Typography>
            <Typography variant="body2" component="p">
              Descripción del Proyecto 2
            </Typography>
          </CardContent>
        </Card>
      </a>

      <a href="link-al-proyecto-2" target="_blank" style={{textDecoration:"none"}}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Título del Proyecto 2
            </Typography>
            <Typography variant="body2" component="p">
              Descripción del Proyecto 2
            </Typography>
          </CardContent>
        </Card>
      </a>
    </div>
  );
};

export default Proyectos;