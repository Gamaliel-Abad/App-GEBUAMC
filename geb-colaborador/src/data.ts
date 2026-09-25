export interface Tarea {
  area: "Multimedia" | "Exposición Bíblica" | "Alabanza";
  rol: string;
  detalle?: string;
  instrucciones?: string;
}

export interface SemanaData {
  semana: number;
  tareas: Tarea[];
}

export interface Colaborador {
  nombre: string;
  semanas: SemanaData[];
}

const INSTRuccionesMultimedia: Record<string, string> = {
  "Post Recreativo":
    "Crear un video dinámico en el que se involucre a los jóvenes del GEBUAMC. Se recomienda utilizar formatos como entrevistas, preguntas y respuestas, dinámicas tipo ping-pong, preguntas bíblicas o preguntas abiertas relacionadas con el grupo. La intención es fomentar la interacción y mostrar de manera creativa la vida del grupo. Todas las ideas son bienvenidas; se busca principalmente creatividad y participación. Tipo: Opción libre.",
  "Post Pre-reunión":
    "Post promocional de la reunión y del tema que se impartirá durante esa semana. Debe incluir claramente: Fecha, Hora, Tema y Aula. Se recomienda que el post se publique el martes de la semana correspondiente y que posteriormente se promocione nuevamente mediante historias de Instagram los miércoles y viernes. Tipo: Debe apegarse al prototipo establecido, con el propósito de mantener una referencia visual uniforme en las publicaciones del GEBUAMC.",
  Reunión:
    "Coordinar y dirigir la reunión semanal del GEBUAMC. Asegurar que todos los elementos (alabanza, exposición, multimedia) se desarrollen en orden y dentro del tiempo establecido.",
  "Post Tema":
    "Post especial destinado a presentar o desarrollar un tema particular relacionado con el contenido estudiado. Debe pasar por revisión teológica y contar con rigor bíblico y exegético. El contenido debe ser claro, cristocéntrico y estar de acuerdo con la Declaración de Fe del GEBUAMC. Se recomienda publicarlo durante la semana correspondiente al tema. Tipo: Diseño libre, respetando la paleta de colores y la identidad visual del GEBUAMC.",
  "Post Versículo":
    "Publicar un versículo bíblico relacionado con el tema de la semana. Se recomienda que sea publicado el lunes de la semana correspondiente, como una introducción al contenido que se estudiará durante esa semana. Tipo: Debe realizarse utilizando el prototipo específico disponible en la cuenta de Canva del GEBUAMC. En caso de ser necesario, solicitar acceso a los líderes.",
  "Post Resumen":
    "Elaborar un pequeño resumen, presentado a manera de notas, sobre lo estudiado durante la reunión. Se recomienda publicarlo el miércoles de la semana siguiente a la reunión correspondiente, dejando algunos días para preparar y revisar adecuadamente el contenido. Tipo: Debe realizarse utilizando el prototipo específico disponible en la cuenta de Canva del GEBUAMC.",
  "Post Social":
    "Compartir fotografías o un video breve de lo ocurrido durante la reunión, con el propósito de mostrar parte de la vida y convivencia del GEBUAMC. Es importante realizar esta tarea con discreción, procurando no distraer a los participantes ni interrumpir la reunión por la toma de fotografías o videos. Se recomienda publicar este contenido el jueves previo a la siguiente reunión, aunque puede publicarse antes si se considera conveniente. Tipo: Diseño libre, siempre que respete la identidad visual y los lineamientos establecidos para las imágenes del GEBUAMC.",
};

const INSTRUCCIONES_EXPOSICION =
  "Deberán enviar dos archivos: 1) El documento con todo el trabajo previo. 2) El bosquejo de su exposición. Ambos deberán enviarse a más tardar el miércoles de la semana en la que les corresponda compartir. Los miércoles, por vía Meet, tendremos un espacio de una hora para las exposiciones. Cada persona tendrá aproximadamente 15 minutos para compartir su exposición, y posteriormente tendremos un espacio para dar retroalimentación. Lo ideal es que puedan compartir el mismo mensaje en las dos reuniones. Por eso, el día que les corresponda participar deberán tener disponibilidad dentro del horario de 1:00 a 3:00 p.m., ya que tendremos dos sesiones: 1:00–2:00 p.m. y 2:00–3:00 p.m.";

const INSTRUCCIONES_ALABANZA_DIRIGE =
  "Quien dirija el tiempo de alabanza deberá escoger dos cantos de la selección de 16 cantos para su participación. En caso de que el expositor de esa semana o quien dirija la reunión no considere un canto especial para el cierre, podrá escogerse un tercer canto, el cual también deberá formar parte de los 16 cantos seleccionados. Procuren introducir los cantos con una breve lectura bíblica o una pequeña reflexión relacionada con el canto. No es necesario extenderse demasiado: el tiempo de alabanza es limitado. No buscamos añadir una predicación, sino tener un breve momento de reflexión y, principalmente, cantar juntos como jóvenes.";

const INSTRUCCIONES_ALABANZA_TOCA =
  "Tocar y cantar durante el tiempo de alabanza. De acuerdo con el rol propuesto para cada participación, quienes puedan y no tengan inconveniente, les pedimos llevar su guitarra. En caso de no poder hacerlo, les agradeceremos avisar con anticipación para poder organizaros. Contaremos con un cancionero con los acordes de los 16 cantos, por lo que las notas no deberían representar un problema. Les recomendamos escuchar previamente los cantos y procurar que haya variedad en la selección a lo largo de las diferentes participaciones.";

const INSTRUCCIONES_ALABANZA_INSTRUMENTO =
  "Llevar instrumento musical (guitarra u otro) para acompañar el tiempo de alabanza. En caso de no poder hacerlo, avisar con anticipación para organizar el equipo.";

export const colaboradores: Colaborador[] = [
  {
    nombre: "Gamaliel",
    semanas: [
      {
        semana: 1,
        tareas: [
          {
            area: "Multimedia",
            rol: "Reunión",
            instrucciones: INSTRuccionesMultimedia["Reunión"],
          },
          {
            area: "Exposición Bíblica",
            rol: "Expositor",
            detalle: "El siervo que no perdonó (Mateo 18:21-35)",
            instrucciones: INSTRUCCIONES_EXPOSICION,
          },
        ],
      },
      {
        semana: 2,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Pre-reunión",
            instrucciones: INSTRuccionesMultimedia["Post Pre-reunión"],
          },
          {
            area: "Exposición Bíblica",
            rol: "Expositor",
            detalle: "El trigo y la cizaña (Mateo 13:24-30, 36-43)",
            instrucciones: INSTRUCCIONES_EXPOSICION,
          },
          {
            area: "Alabanza",
            rol: "Dirige",
            instrucciones: INSTRUCCIONES_ALABANZA_DIRIGE,
          },
          {
            area: "Alabanza",
            rol: "Toca / Canta",
            instrucciones: INSTRUCCIONES_ALABANZA_TOCA,
          },
          {
            area: "Alabanza",
            rol: "Lleva instrumento",
            instrucciones: INSTRUCCIONES_ALABANZA_INSTRUMENTO,
          },
        ],
      },
      {
        semana: 5,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Resumen",
            instrucciones: INSTRuccionesMultimedia["Post Resumen"],
          },
          {
            area: "Alabanza",
            rol: "Dirige",
            instrucciones: INSTRUCCIONES_ALABANZA_DIRIGE,
          },
          {
            area: "Alabanza",
            rol: "Toca / Canta",
            instrucciones: INSTRUCCIONES_ALABANZA_TOCA,
          },
          {
            area: "Alabanza",
            rol: "Lleva instrumento",
            instrucciones: INSTRUCCIONES_ALABANZA_INSTRUMENTO,
          },
        ],
      },
      {
        semana: 6,
        tareas: [
          {
            area: "Multimedia",
            rol: "Reunión",
            instrucciones: INSTRuccionesMultimedia["Reunión"],
          },
          {
            area: "Multimedia",
            rol: "Post Resumen",
            instrucciones: INSTRuccionesMultimedia["Post Resumen"],
          },
          {
            area: "Exposición Bíblica",
            rol: "Expositor",
            detalle: "El banquete de bodas (Mateo 22:1-14)",
            instrucciones: INSTRUCCIONES_EXPOSICION,
          },
        ],
      },
      {
        semana: 7,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Recreativo",
            instrucciones: INSTRuccionesMultimedia["Post Recreativo"],
          },
        ],
      },
      {
        semana: 8,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Social",
            instrucciones: INSTRuccionesMultimedia["Post Social"],
          },
          {
            area: "Alabanza",
            rol: "Dirige",
            instrucciones: INSTRUCCIONES_ALABANZA_DIRIGE,
          },
          {
            area: "Alabanza",
            rol: "Toca / Canta",
            instrucciones: INSTRUCCIONES_ALABANZA_TOCA,
          },
          {
            area: "Alabanza",
            rol: "Lleva instrumento",
            instrucciones: INSTRUCCIONES_ALABANZA_INSTRUMENTO,
          },
        ],
      },
    ],
  },
  {
    nombre: "Vane",
    semanas: [
      {
        semana: 1,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Recreativo",
            instrucciones: INSTRuccionesMultimedia["Post Recreativo"],
          },
          {
            area: "Multimedia",
            rol: "Post Tema",
            instrucciones: INSTRuccionesMultimedia["Post Tema"],
          },
        ],
      },
      {
        semana: 2,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Versículo",
            instrucciones: INSTRuccionesMultimedia["Post Versículo"],
          },
        ],
      },
      {
        semana: 3,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Recreativo",
            instrucciones: INSTRuccionesMultimedia["Post Recreativo"],
          },
          {
            area: "Multimedia",
            rol: "Post Social",
            instrucciones: INSTRuccionesMultimedia["Post Social"],
          },
          {
            area: "Exposición Bíblica",
            rol: "Expositora",
            detalle: "La oveja perdida (Lucas 15:1-7)",
            instrucciones: INSTRUCCIONES_EXPOSICION,
          },
        ],
      },
      {
        semana: 4,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Social",
            instrucciones: INSTRuccionesMultimedia["Post Social"],
          },
        ],
      },
      {
        semana: 5,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Pre-reunión",
            instrucciones: INSTRuccionesMultimedia["Post Pre-reunión"],
          },
        ],
      },
      {
        semana: 6,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Recreativo",
            instrucciones: INSTRuccionesMultimedia["Post Recreativo"],
          },
        ],
      },
      {
        semana: 7,
        tareas: [
          {
            area: "Exposición Bíblica",
            rol: "Expositora",
            detalle: "El fariseo y el publicano (Lucas 18:9-14)",
            instrucciones: INSTRUCCIONES_EXPOSICION,
          },
        ],
      },
      {
        semana: 8,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Social",
            instrucciones: INSTRuccionesMultimedia["Post Social"],
          },
        ],
      },
      {
        semana: 9,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Tema",
            instrucciones: INSTRuccionesMultimedia["Post Tema"],
          },
        ],
      },
    ],
  },
  {
    nombre: "Angel",
    semanas: [
      {
        semana: 1,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Social",
            instrucciones: INSTRuccionesMultimedia["Post Social"],
          },
        ],
      },
      {
        semana: 3,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Pre-reunión",
            instrucciones: INSTRuccionesMultimedia["Post Pre-reunión"],
          },
          {
            area: "Multimedia",
            rol: "Post Social",
            instrucciones: INSTRuccionesMultimedia["Post Social"],
          },
          {
            area: "Alabanza",
            rol: "Dirige",
            instrucciones: INSTRUCCIONES_ALABANZA_DIRIGE,
          },
          {
            area: "Alabanza",
            rol: "Toca / Canta",
            instrucciones: INSTRUCCIONES_ALABANZA_TOCA,
          },
        ],
      },
      {
        semana: 4,
        tareas: [
          {
            area: "Alabanza",
            rol: "Dirige",
            instrucciones: INSTRUCCIONES_ALABANZA_DIRIGE,
          },
          {
            area: "Alabanza",
            rol: "Toca / Canta",
            instrucciones: INSTRUCCIONES_ALABANZA_TOCA,
          },
          {
            area: "Alabanza",
            rol: "Lleva instrumento",
            instrucciones: INSTRUCCIONES_ALABANZA_INSTRUMENTO,
          },
        ],
      },
      {
        semana: 6,
        tareas: [
          {
            area: "Alabanza",
            rol: "Dirige",
            instrucciones: INSTRUCCIONES_ALABANZA_DIRIGE,
          },
          {
            area: "Alabanza",
            rol: "Toca / Canta",
            instrucciones: INSTRUCCIONES_ALABANZA_TOCA,
          },
        ],
      },
      {
        semana: 7,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Resumen",
            instrucciones: INSTRuccionesMultimedia["Post Resumen"],
          },
        ],
      },
      {
        semana: 8,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Recreativo",
            instrucciones: INSTRuccionesMultimedia["Post Recreativo"],
          },
          {
            area: "Multimedia",
            rol: "Post Resumen",
            instrucciones: INSTRuccionesMultimedia["Post Resumen"],
          },
          {
            area: "Exposición Bíblica",
            rol: "Expositor",
            detalle: "Los labradores malvados (Marcos 12:1-12)",
            instrucciones: INSTRUCCIONES_EXPOSICION,
          },
        ],
      },
      {
        semana: 9,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Recreativo",
            instrucciones: INSTRuccionesMultimedia["Post Recreativo"],
          },
          {
            area: "Multimedia",
            rol: "Post Social",
            instrucciones: INSTRuccionesMultimedia["Post Social"],
          },
          {
            area: "Alabanza",
            rol: "Dirige",
            instrucciones: INSTRUCCIONES_ALABANZA_DIRIGE,
          },
          {
            area: "Alabanza",
            rol: "Toca / Canta",
            instrucciones: INSTRUCCIONES_ALABANZA_TOCA,
          },
        ],
      },
    ],
  },
  {
    nombre: "Brian",
    semanas: [
      {
        semana: 3,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Versículo",
            instrucciones: INSTRuccionesMultimedia["Post Versículo"],
          },
          {
            area: "Alabanza",
            rol: "Dirige",
            instrucciones: INSTRUCCIONES_ALABANZA_DIRIGE,
          },
          {
            area: "Alabanza",
            rol: "Lleva instrumento",
            instrucciones: INSTRUCCIONES_ALABANZA_INSTRUMENTO,
          },
        ],
      },
      {
        semana: 4,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Pre-reunión",
            instrucciones: INSTRuccionesMultimedia["Post Pre-reunión"],
          },
        ],
      },
      {
        semana: 5,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Social",
            instrucciones: INSTRuccionesMultimedia["Post Social"],
          },
        ],
      },
      {
        semana: 6,
        tareas: [
          {
            area: "Alabanza",
            rol: "Dirige",
            instrucciones: INSTRUCCIONES_ALABANZA_DIRIGE,
          },
          {
            area: "Alabanza",
            rol: "Lleva instrumento",
            instrucciones: INSTRUCCIONES_ALABANZA_INSTRUMENTO,
          },
        ],
      },
      {
        semana: 8,
        tareas: [
          {
            area: "Multimedia",
            rol: "Reunión",
            instrucciones: INSTRuccionesMultimedia["Reunión"],
          },
        ],
      },
      {
        semana: 9,
        tareas: [
          {
            area: "Alabanza",
            rol: "Dirige",
            instrucciones: INSTRUCCIONES_ALABANZA_DIRIGE,
          },
          {
            area: "Alabanza",
            rol: "Lleva instrumento",
            instrucciones: INSTRUCCIONES_ALABANZA_INSTRUMENTO,
          },
        ],
      },
    ],
  },
  {
    nombre: "Acosta",
    semanas: [
      {
        semana: 2,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Social",
            instrucciones: INSTRuccionesMultimedia["Post Social"],
          },
        ],
      },
      {
        semana: 4,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Recreativo",
            instrucciones: INSTRuccionesMultimedia["Post Recreativo"],
          },
          {
            area: "Exposición Bíblica",
            rol: "Expositor",
            detalle: "La higuera estéril (Lucas 13:6-9)",
            instrucciones: INSTRUCCIONES_EXPOSICION,
          },
        ],
      },
      {
        semana: 6,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Social",
            instrucciones: INSTRuccionesMultimedia["Post Social"],
          },
        ],
      },
      {
        semana: 7,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Pre-reunión",
            instrucciones: INSTRuccionesMultimedia["Post Pre-reunión"],
          },
        ],
      },
      {
        semana: 8,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Pre-reunión",
            instrucciones: INSTRuccionesMultimedia["Post Pre-reunión"],
          },
        ],
      },
      {
        semana: 9,
        tareas: [
          {
            area: "Exposición Bíblica",
            rol: "Expositor",
            detalle: "Los dos cimientos (Mateo 7:24-27)",
            instrucciones: INSTRUCCIONES_EXPOSICION,
          },
        ],
      },
    ],
  },
  {
    nombre: "Keydi",
    semanas: [
      {
        semana: 2,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Recreativo",
            instrucciones: INSTRuccionesMultimedia["Post Recreativo"],
          },
        ],
      },
      {
        semana: 4,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Versículo",
            instrucciones: INSTRuccionesMultimedia["Post Versículo"],
          },
        ],
      },
      {
        semana: 5,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Versículo",
            instrucciones: INSTRuccionesMultimedia["Post Versículo"],
          },
        ],
      },
      {
        semana: 6,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Pre-reunión",
            instrucciones: INSTRuccionesMultimedia["Post Pre-reunión"],
          },
        ],
      },
      {
        semana: 7,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Social",
            instrucciones: INSTRuccionesMultimedia["Post Social"],
          },
        ],
      },
    ],
  },
  {
    nombre: "Ruego",
    semanas: [
      {
        semana: 3,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Resumen",
            instrucciones: INSTRuccionesMultimedia["Post Resumen"],
          },
        ],
      },
      {
        semana: 4,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Tema",
            instrucciones: INSTRuccionesMultimedia["Post Tema"],
          },
        ],
      },
      {
        semana: 5,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Recreativo",
            instrucciones: INSTRuccionesMultimedia["Post Recreativo"],
          },
        ],
      },
      {
        semana: 6,
        tareas: [
          {
            area: "Multimedia",
            rol: "Post Social",
            instrucciones: INSTRuccionesMultimedia["Post Social"],
          },
        ],
      },
    ],
  },
  {
    nombre: "Guss",
    semanas: [
      {
        semana: 5,
        tareas: [
          {
            area: "Exposición Bíblica",
            rol: "Expositor",
            detalle: "Terminar la construcción (Lucas 14:25-33)",
            instrucciones: INSTRUCCIONES_EXPOSICION,
          },
        ],
      },
    ],
  },
  {
    nombre: "Fernando",
    semanas: [
      {
        semana: 3,
        tareas: [
          {
            area: "Alabanza",
            rol: "Toca / Canta",
            instrucciones: INSTRUCCIONES_ALABANZA_TOCA,
          },
        ],
      },
      {
        semana: 6,
        tareas: [
          {
            area: "Alabanza",
            rol: "Toca / Canta",
            instrucciones: INSTRUCCIONES_ALABANZA_TOCA,
          },
        ],
      },
      {
        semana: 9,
        tareas: [
          {
            area: "Alabanza",
            rol: "Toca / Canta",
            instrucciones: INSTRUCCIONES_ALABANZA_TOCA,
          },
        ],
      },
    ],
  },
];
