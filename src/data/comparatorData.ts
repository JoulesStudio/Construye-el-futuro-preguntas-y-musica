import type { ScenarioComparison } from '../types';

export const COMPARATOR_SCENARIOS: ScenarioComparison[] = [
  {
    "id": "centro",
    "name": "Centro comunitario",
    "context": "Un barrio quiere abrir un centro con biblioteca, talleres y un salón de usos múltiples. El terreno está en pendiente y el salón necesita espacio libre para cambiar de uso.",
    "civil": {
      "roleQuestion": "¿Qué debe soportar el edificio y cómo evitamos que se acumule agua alrededor?",
      "keyDecisions": [
        "Estudiar el suelo y comparar formas de cimentar el edificio.",
        "Calcular cómo responde la estructura al peso, al viento y a un sismo.",
        "Planear por dónde sale el agua de lluvia."
      ],
      "deliverables": [
        "Memoria de cálculo con los supuestos del análisis.",
        "Planos de cimentación, estructura y drenaje."
      ],
      "independent": "Evaluar y reforzar la cubierta de un salón existente."
    },
    "architecture": {
      "roleQuestion": "¿Cómo hacemos que el centro se sienta abierto y sea fácil de usar para el barrio?",
      "keyDecisions": [
        "Organizar los talleres, la biblioteca y los espacios de convivencia.",
        "Aprovechar la luz natural y orientar entradas y recorridos.",
        "Conectar el acceso con la calle para que distintas personas puedan llegar y moverse por el edificio."
      ],
      "deliverables": [
        "Plantas, cortes y modelos del espacio.",
        "Planos de recorridos, accesos y acabados."
      ],
      "independent": "Reorganizar los usos y el mobiliario de una biblioteca existente."
    },
    "teamwork": {
      "tradeOff": "Un salón sin columnas al centro permite más actividades. El equipo compara cómo distintas cubiertas afectarían la altura, el costo, los materiales y la iluminación del espacio.",
      "sharedFocus": [
        "Accesibilidad y salidas seguras.",
        "Materiales durables y de bajo mantenimiento.",
        "Coordinación de estructura, instalaciones y espacios."
      ]
    },
    "sector": "Equipamiento comunitario"
  },
  {
    "id": "estacion",
    "name": "Estación de transporte",
    "context": "Una estación conecta autobuses, bicicletas y recorridos peatonales. Necesita andenes que protejan de la lluvia y den espacio suficiente para moverse en horas de mayor demanda.",
    "civil": {
      "roleQuestion": "¿Cómo soportar la circulación de autobuses y mantener los andenes protegidos del agua?",
      "keyDecisions": [
        "Analizar los giros y las rutas de los autobuses.",
        "Estudiar cargas del pavimento y diseñar los apoyos de la cubierta.",
        "Evaluar pendientes y salidas para conducir la lluvia."
      ],
      "deliverables": [
        "Planos de circulación vehicular, pavimento y estructura.",
        "Planos de drenaje y memoria de cálculo."
      ],
      "independent": "Revisar y rehabilitar el pavimento del patio de autobuses."
    },
    "architecture": {
      "roleQuestion": "¿Cómo lograr que las personas encuentren su ruta y esperen con comodidad?",
      "keyDecisions": [
        "Organizar andenes, entradas y conexiones peatonales.",
        "Diseñar señalización, iluminación y zonas de espera.",
        "Ubicar el mobiliario y los servicios sin interrumpir los recorridos."
      ],
      "deliverables": [
        "Plantas de andenes y secciones de la cubierta.",
        "Esquemas de recorrido, mobiliario y señalización."
      ],
      "independent": "Rediseñar la distribución del vestíbulo y la señalización interior."
    },
    "teamwork": {
      "tradeOff": "Una cubierta más amplia protege de la lluvia. Los apoyos también deben dejar libre el paso y las líneas de visión. Ambos equipos estudian dónde colocarlos y cómo mantener la cubierta.",
      "sharedFocus": [
        "Accesos cómodos desde la banqueta hasta el autobús.",
        "Recorridos seguros y fáciles de entender.",
        "Materiales resistentes al uso frecuente y manejo de la lluvia."
      ]
    },
    "sector": "Movilidad"
  },
  {
    "id": "planta",
    "sector": "Industria",
    "name": "Planta de manufactura",
    "context": "Una planta amplía su línea de producción sin detener la operación. El equipo necesita soportar maquinaria nueva y separar el movimiento de personas, materiales y vehículos.",
    "civil": {
      "roleQuestion": "¿Cómo soporta el piso la maquinaria y qué cambios necesita para seguir operando?",
      "keyDecisions": [
        "Revisar cargas y vibraciones de los equipos.",
        "Diseñar apoyos, pisos industriales y recorridos para vehículos.",
        "Planear etapas de intervención con el equipo de operación."
      ],
      "deliverables": [
        "Planos del piso y de las bases de maquinaria.",
        "Memoria de cargas y plan de intervención."
      ],
      "independent": "Evaluar el piso y reparar una zona de carga que ya existe."
    },
    "architecture": {
      "roleQuestion": "¿Cómo organizar los espacios para que el personal circule y trabaje con seguridad?",
      "keyDecisions": [
        "Distribuir accesos, servicios y áreas de descanso.",
        "Separar las rutas peatonales de la circulación de carga.",
        "Revisar iluminación, orientación y visibilidad."
      ],
      "deliverables": [
        "Plantas de distribución y recorridos.",
        "Detalles de accesos y espacios para el personal."
      ],
      "independent": "Reorganizar oficinas y áreas de descanso dentro de una nave existente."
    },
    "teamwork": {
      "tradeOff": "Una ruta peatonal más directa cruza el acceso de montacargas. El equipo compara giros, visibilidad y barreras para mantener separados los recorridos.",
      "sharedFocus": [
        "Seguridad durante la operación.",
        "Accesos para mantenimiento.",
        "Cambios por etapas para limitar interrupciones."
      ]
    }
  },
  {
    "id": "eolico",
    "sector": "Energía",
    "name": "Parque eólico",
    "context": "Se instalarán turbinas en una sierra. Además de bases y caminos de montaje, el parque requiere un edificio de control para personal que trabaja por turnos.",
    "civil": {
      "roleQuestion": "¿Cómo sostener las turbinas y llevar las piezas pesadas hasta sus plataformas?",
      "keyDecisions": [
        "Estudiar el suelo y las cargas que transmite cada torre.",
        "Diseñar plataformas y caminos de montaje.",
        "Conducir el agua para limitar erosión junto a los caminos."
      ],
      "deliverables": [
        "Planos de cimentaciones, plataformas y caminos.",
        "Memorias geotécnicas y de cálculo."
      ],
      "independent": "Inspeccionar y reforzar el camino que usa el equipo de mantenimiento."
    },
    "architecture": {
      "roleQuestion": "¿Cómo facilitar la operación diaria desde el edificio de control?",
      "keyDecisions": [
        "Ubicar puestos de operación, áreas de descanso y servicios.",
        "Organizar accesos para personal y visitantes.",
        "Diseñar espacios protegidos del clima local."
      ],
      "deliverables": [
        "Plantas y cortes del edificio de control.",
        "Esquema de accesos y recorridos."
      ],
      "independent": "Adaptar los espacios de trabajo de un edificio de control existente."
    },
    "teamwork": {
      "tradeOff": "Ubicar el edificio cerca de las turbinas acorta algunos recorridos, pero puede interferir con maniobras de equipos pesados. El equipo coordina la ubicación con Operación y las especialidades eléctricas.",
      "sharedFocus": [
        "Separar personal de maniobras de montaje.",
        "Accesos durante todo el año.",
        "Uso del terreno y mantenimiento."
      ]
    }
  },
  {
    "id": "puerto",
    "sector": "Costa y logística",
    "name": "Terminal portuaria",
    "context": "Un puerto reorganiza su patio de carga y el acceso de trabajadores. El terreno está expuesto al oleaje y hay que mantener operativas las entradas durante la obra.",
    "civil": {
      "roleQuestion": "¿Qué necesitan el muelle, el patio y sus accesos para operar bajo cargas y exposición al mar?",
      "keyDecisions": [
        "Revisar cargas, corrosión y condiciones del borde del muelle.",
        "Dimensionar el pavimento del patio y sus zonas de giro.",
        "Resolver escurrimientos y etapas de intervención."
      ],
      "deliverables": [
        "Planos del patio, pavimento y drenaje.",
        "Evaluación del muelle y secuencia de obra."
      ],
      "independent": "Inspeccionar daños en el borde del muelle y planear su reparación."
    },
    "architecture": {
      "roleQuestion": "¿Cómo diseñar el acceso y los espacios del personal cerca de una operación de carga?",
      "keyDecisions": [
        "Organizar recepción, control de acceso y servicios al personal.",
        "Diseñar recorridos protegidos y legibles.",
        "Elegir acabados que resistan el ambiente marino."
      ],
      "deliverables": [
        "Plantas del acceso y los edificios de servicio.",
        "Detalles de recorridos, señalización y materiales."
      ],
      "independent": "Remodelar un edificio administrativo dentro de la terminal."
    },
    "teamwork": {
      "tradeOff": "Acercar los servicios al muelle reduce caminatas, pero ocupa espacio de maniobra. Los equipos coordinan la distribución del patio con las rutas peatonales y las zonas de seguridad.",
      "sharedFocus": [
        "Cruces entre personas y vehículos.",
        "Durabilidad en ambiente costero.",
        "Continuidad del servicio."
      ]
    }
  },
  {
    "id": "agua",
    "sector": "Agua y comunidades",
    "name": "Red de agua rural",
    "context": "Una comunidad serrana amplía su red de agua y construye un espacio para operación, capacitación y atención a usuarios.",
    "civil": {
      "roleQuestion": "¿Cómo llevar agua a las viviendas con la presión necesaria y mantener la red en servicio?",
      "keyDecisions": [
        "Medir niveles y estimar la demanda.",
        "Dimensionar tuberías y definir el sitio del tanque.",
        "Planear válvulas de aislamiento y acceso para reparaciones."
      ],
      "deliverables": [
        "Planos de la red y sus perfiles de nivel.",
        "Modelo hidráulico y plano de válvulas."
      ],
      "independent": "Diagnosticar pérdidas de presión y reparar un tramo de tubería."
    },
    "architecture": {
      "roleQuestion": "¿Cómo hacer útil el espacio de atención para vecinos y personal de operación?",
      "keyDecisions": [
        "Distribuir atención, capacitación y almacén.",
        "Diseñar accesos que funcionen para distintos usuarios.",
        "Aprovechar iluminación y ventilación según el sitio."
      ],
      "deliverables": [
        "Plantas y cortes del espacio de atención.",
        "Esquemas de accesibilidad y uso."
      ],
      "independent": "Adaptar un local comunitario para atención y capacitación."
    },
    "teamwork": {
      "tradeOff": "El lugar más alto beneficia la distribución del agua, pero no siempre es el más accesible para la comunidad. Se pueden separar tanque y área de atención, y coordinar recorridos de operación.",
      "sharedFocus": [
        "Ubicación y acceso a las instalaciones.",
        "Mantenimiento con recursos locales.",
        "Necesidades de la comunidad usuaria."
      ]
    }
  }
];
