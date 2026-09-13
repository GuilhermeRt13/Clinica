import { AuthorityPillar, ClinicalResultCase, Specialist, TechnologyItem, TestimonialItem, Treatment } from '../types';

export const CLINIC_INFO = {
  name: 'Clínica Estética Médica Verona',
  brandName: 'Verona Estética & Salud',
  slogan: 'Especialistas en Rejuvenecimiento y Reparación de la Piel',
  concept: 'Donde la estética se trabaja con ciencia, seguridad y excelencia.',
  location: {
    address: 'Pasaje La Costa #3296',
    city: 'Iquique',
    region: 'Región de Tarapacá',
    country: 'Chile',
    reference: 'Sector Costa de Iquique, estacionamiento disponible',
    mapsQuery: 'https://maps.google.com/?q=Pasaje+La+Costa+3296+Iquique+Chile',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.123456789!2d-70.1345!3d-20.2456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9152140a8bfb972b%3A0x6b4991c0e3e!2sPasaje+La+Costa+3296%2C+Iquique%2C+Tarapac%C3%A1!5e0!3m2!1ses!2scl!4v1690000000000!5m2!1ses!2scl',
  },
  commercialLead: 'Dayana Vallejos M.',
  contacts: {
    whatsapp: '+56 9 6624 5031',
    whatsappRaw: '56966245031',
    phone: '(57) 276 3693',
    phoneTel: '+56572763693',
    email: 'info.clinicaverona@gmail.com',
    hours: 'Lunes a Viernes: 09:00 – 19:30 | Sábados: 09:30 – 14:00 (Previa cita)',
    instagram: 'https://instagram.com/clinicaverona',
  },
};

export const AUTHORITY_PILLARS: AuthorityPillar[] = [
  {
    id: 'ciencia',
    title: 'CIENCIA',
    description: 'Tratamientos basados en criterios médicos.',
    iconName: 'Atom',
  },
  {
    id: 'seguridad',
    title: 'SEGURIDAD',
    description: 'Protocolos orientados al cuidado y bienestar del paciente.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'precision',
    title: 'PRECISIÓN',
    description: 'Procedimientos personalizados para cada rostro y necesidad.',
    iconName: 'Compass',
  },
  {
    id: 'excelencia',
    title: 'EXCELENCIA',
    description: 'Experiencia premium en cada etapa.',
    iconName: 'Sparkles',
  },
];

export const TREATMENTS: Treatment[] = [
  {
    id: 'full-face',
    name: 'FULL FACE',
    subtitle: 'Toxina Botulínica • Dysport / Botox • Efecto Nefertiti',
    category: 'facial',
    productsOrTech: 'Dysport® / Botox® Allergan',
    tagline: 'Armonización y rejuvenecimiento facial integral con visión médica',
    shortDescription:
      'Tratamiento integral orientado a armonizar y rejuvenecer las proporciones faciales con precisión.',
    fullDescription:
      'El abordaje Full Face con toxina botulínica y técnicas avanzadas como el Efecto Nefertiti redefine suavemente los tercios superior, medio e inferior del rostro. A través de microdosis calculadas milimétricamente, se relaja la musculatura hiperdinámica, suavizando líneas de expresión, elevando la mirada y perfilando el reborde mandibular sin alterar la expresividad natural.',
    indications: [
      'Líneas de expresión en frente, entrecejo y patas de gallo',
      'Desdibujamiento del óvalo mandibular y cuello (Efecto Nefertiti)',
      'Asimetrías faciales dinámicas',
      'Rejuvenecimiento global no quirúrgico',
    ],
    keyBenefits: [
      'Aspecto descansado, armónico y luminoso',
      'Preservación absoluta de la naturalidad y gesticulación',
      'Prevención activa de arrugas profundas',
      'Sin periodo de reposo post-tratamiento',
    ],
    sessionTime: '45 minutos',
    recovery: 'Inmediata (sin incapacidad)',
    evaluationRequired: true,
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'armonizacion-labial',
    name: 'ARMONIZACIÓN LABIAL',
    subtitle: 'Harmonización y Bioplastia Labial • Ácido Hialurónico • Teosyal',
    category: 'lips',
    productsOrTech: 'Teosyal® PureSense / Ácido Hialurónico reticulado',
    tagline: 'Diseño anatómico, hidratación profunda y proporción áurea',
    shortDescription:
      'Diseño y definición de los labios respetando la armonía y naturalidad del rostro.',
    fullDescription:
      'La bioplastia y armonización labial en Clínica Verona se realiza bajo rigurosos criterios anatómicos. Empleando geles reológicos premium como Teosyal, adaptados al dinamismo y elasticidad del labio, buscamos corregir asimetrías, perfilar el arco de Cupido, reponer volumen perdido por el paso del tiempo o simplemente brindar hidratación profunda con sutileza editorial.',
    indications: [
      'Pérdida de turgencia y definición del reborde bermellón',
      'Asimetrías labiales congénitas o adquiridas',
      'Deshidratación labial crónica y arrugas periorales',
      'Búsqueda de volumen proporcional y balanceado',
    ],
    keyBenefits: [
      'Definición sutil sin aspecto sobrecorregido',
      'Textura suave e integración tisular imperceptible al tacto',
      'Resultados elegantes adaptados a la fisonomía de cada paciente',
      'Duración prolongada entre 9 y 14 meses',
    ],
    sessionTime: '40 minutos',
    recovery: 'Leve inflamación 24-48 hrs',
    evaluationRequired: true,
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'bioestimuladores',
    name: 'BIOESTIMULADORES DE COLÁGENO',
    subtitle: 'Sculptra® • Radiesse® • Reestructuración dérmica',
    category: 'bio',
    productsOrTech: 'Ácido Poli-L-Láctico (Sculptra®) / Hidroxiapatita de Calcio (Radiesse®)',
    tagline: 'Regeneración tisular profunda y firmeza progresiva celular',
    shortDescription:
      'Protocolos destinados a estimular la producción de colágeno y mejorar la calidad de la piel.',
    fullDescription:
      'A diferencia de los rellenos de soporte temporal, los bioestimuladores activan una cascada biológica natural de neocologénesis. Mediante vectores estratégicos, redensifican la dermis, restauran la elasticidad cutánea y atenúan la flacidez facial y corporal de manera progresiva y duradera, logrando que sea la propia biología celular la que regenere la juventud de la piel.',
    indications: [
      'Flacidez facial incipiente o moderada en mejillas y óvalo',
      'Pérdida de densidad dérmica y textura apagada',
      'Surcos y arrugas por disminución de colágeno tipo I y III',
      'Tratamiento de cuello, escote y manos',
    ],
    keyBenefits: [
      'Inducción demostrada de colágeno propio',
      'Reafirmación progresiva durante 6 meses con efecto hasta 24 meses',
      'Mejora global en grosor, tersura y luminosidad de la piel',
      'Acabado completamente natural sin aumento indeseado de volumen',
    ],
    sessionTime: '50 minutos',
    recovery: 'Retorno inmediato a actividades habituales',
    evaluationRequired: true,
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'correccion-rellenos',
    name: 'CORRECCIÓN DE RELLENOS',
    subtitle: 'Hialuronidasa Médica • Disolución enzimática de precisión',
    category: 'corrective',
    productsOrTech: 'Hialuronidasa pura de grado médico bajo guía anatómica',
    tagline: 'Seguridad clínica y reversión controlada ante indicaciones profesionales',
    shortDescription:
      'Corrección de rellenos de ácido hialurónico cuando existe indicación profesional.',
    fullDescription:
      'La seguridad del paciente es el principio inviolable de Clínica Verona. La hialuronidasa es una enzima que degrada y disuelve de forma segura y precisa depósitos previos de ácido hialurónico mal posicionado, sobrecorrecciones estéticas externas o complicaciones de volumen, devolviendo al tejido su anatomía basal antes de reiniciar un protocolo armónico.',
    indications: [
      'Sobrecorrección o migración de ácido hialurónico en labios u ojeras',
      'Efecto Tyndall (coloración azulada por infiltración superficial previa)',
      'Nódulos o asimetrías derivados de procedimientos anteriores',
      'Deseo del paciente de reestablecer su anatomía original',
    ],
    keyBenefits: [
      'Acción enzimática específica y controlada',
      'Evaluación exhaustiva previa con prueba de hipersensibilidad',
      'Restauración de planos anatómicos fisiológicos',
      'Acompañamiento médico continuo post-procedimiento',
    ],
    sessionTime: '30 minutos',
    recovery: '24-48 hrs de resolución gradual',
    evaluationRequired: true,
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'armonizacion-masculina',
    name: 'ARMONIZACIÓN MASCULINA',
    subtitle: 'Contorno Mandibular • Proyección del mentón • Ángulo goníaco',
    category: 'male',
    productsOrTech: 'Ácido Hialurónico de alta cohesividad / Bioestimulación',
    tagline: 'Definición mandibular y equilibrio facial respetando la anatomía masculina',
    shortDescription:
      'Planificación precisa para definir y equilibrar las estructuras faciales masculinas.',
    fullDescription:
      'El abordaje estético masculino requiere una comprensión rigurosa de las diferencias morfométricas del rostro de hombre. En Clínica Verona diseñamos ángulos mandibulares más definidos, proyectamos el mentón con vectores rectilíneos y realzamos la fuerza del tercio inferior, asegurando un porte sofisticado, sobrio y varonil sin rasgos artificiales.',
    indications: [
      'Mandíbula poco definida o retromicrognatia (mentón retraído)',
      'Pérdida de firmeza en el reborde cervicofacial',
      'Búsqueda de mayor proyección y estructura ósea estética',
      'Líneas de cansancio y envejecimiento facial en hombres',
    ],
    keyBenefits: [
      'Estructuración varonil que respeta la expresión y edad',
      'Líneas mandibulares limpias y contorno nítido',
      'Recuperación rápida sin estigmas de tratamiento estético',
      'Planificación individualizada paso a paso',
    ],
    sessionTime: '45 minutos',
    recovery: 'Inmediata (mínima inflamación 24 hrs)',
    evaluationRequired: true,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'laser-nd-yag',
    name: 'TECNOLOGÍA LÁSER ND:YAG',
    subtitle: 'Eliminación de tatuajes y manchas pigmentarias recalcitrantes',
    category: 'tech',
    productsOrTech: 'Láser Q-Switched Nd:YAG de alta potencia fotomecánica',
    tagline: 'Emisión de pulsos ultracortos para fragmentación selectiva del pigmento',
    shortDescription:
      'Tecnología láser orientada al tratamiento de determinadas pigmentaciones y tatuajes.',
    fullDescription:
      'El láser Nd:YAG opera mediante el principio de fototermólisis selectiva y efecto fotoacústico. Emite longitudes de onda dirigidas con precisión microscópica hacia la melanina anormal o las partículas de tinta de tatuajes, fragmentándolas en micropartículas que el sistema linfático elimina de forma natural sin lesionar la epidermis circundante ni dejar cicatrices.',
    indications: [
      'Eliminación de tatuajes monocromáticos y policromáticos',
      'Léntigos solares y manchas seniles superficiales y profundas',
      'Hiperpigmentaciones post-inflamatorias seleccionadas',
      'Rejuvenecimiento cutáneo no ablativo tipo tonificación láser',
    ],
    keyBenefits: [
      'Afinidad cromófora sin dañar el tejido cutáneo sano',
      'Disminución visible y progresiva de la carga pigmentaria',
      'Protocolos con intervalos médicos seguros de cicatrización',
      'Parámetros calibrados según el fototipo de piel de cada paciente',
    ],
    sessionTime: '30 a 60 minutos según área',
    recovery: 'Enrojecimiento leve 3-5 días con cuidados tópicos',
    evaluationRequired: true,
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'prysm-io',
    name: 'MEDICINA DERMATOFUNCIONAL',
    subtitle: 'Dispositivo PRYSM iO™ • Terapia avanzada de reactivación dérmica',
    category: 'tech',
    productsOrTech: 'Dispositivo PRYSM iO™ Dermatofuncional',
    tagline: 'Integración tecnológica al servicio de la microcirculación y reparación celular',
    shortDescription:
      'Tecnología aplicada dentro de protocolos de medicina dermatofuncional.',
    fullDescription:
      'El dispositivo PRYSM iO™ representa la vanguardia en aparatología dermatofuncional aplicada a la medicina estética. Utilizado para estimular la microcirculación tisular, optimizar el drenaje celular, potenciar la penetración de activos y acelerar los tiempos de recuperación en protocolos pre y post procedimientos médico-estéticos.',
    indications: [
      'Protocolos coadyuvantes en tratamientos de rejuvenecimiento facial',
      'Recuperación optimizada post-infiltraciones o bioestimuladores',
      'Estimulación dérmica y reactivación biológica del tejido cutáneo',
      'Manejo de edema y reactivación del flujo vascular local',
    ],
    keyBenefits: [
      'Tratamiento indoloro, confortable y no invasivo',
      'Sinergia inmediata que potencia la longevidad de otros procedimientos',
      'Sensación de frescura, relajación y descongestión cutánea',
      'Ideal como terapia complementaria periódica para la salud de la piel',
    ],
    sessionTime: '40 minutos',
    recovery: 'Inmediata (sin reposo ni cuidados especiales)',
    evaluationRequired: true,
    image:
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
  },
];

export const TECHNOLOGIES: TechnologyItem[] = [
  {
    id: 'laser-nd-yag',
    name: 'LÁSER Nd:YAG',
    badge: 'Precisión Fotomecánica',
    officialDescription:
      'Tecnología láser orientada al tratamiento de determinadas pigmentaciones y tatuajes mediante fototermólisis selectiva.',
    clinicalApplication:
      'Fragmentación fotoacústica de partículas pigmentarias y tatuajes sin daño térmico al tejido circundante.',
    scientificHighlights: [
      'Longitudes de onda selectivas (1064nm / 532nm)',
      'Emisión ultracorta en nanosegundos',
      'Preservación de la barrera cutánea',
      'Protocolos validados en literatura médica dermatológica',
    ],
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'prysm-io',
    name: 'PRYSM iO™',
    badge: 'Dermatofuncional Avanzado',
    officialDescription:
      'Dispositivo electro-biológico aplicado dentro de protocolos médicos dermatofuncionales para reactivación tisular.',
    clinicalApplication:
      'Estimulación microvascular, alivio de edema tisular y optimización celular en fases regenerativas y de bioestimulación.',
    scientificHighlights: [
      'Reactivación de la microcirculación capilar',
      'Protocolos sincronizados pre y post procedimiento',
      'Sin disrupción de la superficie epidérmica',
      'Tecnología médica de confort absoluto',
    ],
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'tecnologia-dermatofuncional',
    name: 'TECNOLOGÍA DERMATOFUNCIONAL',
    badge: 'Salud y Reparación Cutánea',
    officialDescription:
      'Conjunto de aparatología médica y protocolos clínicos dirigidos a la regeneración de la piel y el soporte tisular.',
    clinicalApplication:
      'Restauración de la matriz extracelular, aceleración de síntesis proteica dérmica y modulación inflamatoria controlada.',
    scientificHighlights: [
      'Enfoque holístico basado en fisiología tisular',
      'Sinergia con inductores de colágeno y toxina botulínica',
      'Medición de elasticidad y niveles de hidratación',
      'Protocolos individualizados con seguimiento fotográfico riguroso',
    ],
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
  },
];

export const SPECIALISTS: Specialist[] = [
  {
    name: 'Dayana Vallejos M.',
    role: 'Responsable Comercial & Coordinación de Protocolos Clínicos',
    specialty: 'Atención Médica Personalizada & Dirección de Experiencia',
    bio: 'Encargada de brindar una atención cercana, ética y transparente en Clínica Estética Médica Verona. Acompaña a cada paciente desde la evaluación inicial, coordinando los protocolos personalizados con rigor, calidez y excelencia profesional.',
    credentials: [
      'Gestión y Atención Clínica de Excelencia',
      'Planificación y Seguimiento Individualizado',
      'Supervisión de Calidad y Bioseguridad',
    ],
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Equipo Médico Verona',
    role: 'Staff Especializado en Medicina Estética & Dermatología',
    specialty: 'Rejuvenecimiento, Inyectables & Tecnología Láser',
    bio: 'Profesionales de la salud capacitados en anatomía facial de precisión y técnicas no quirúrgicas avanzadas. Cada intervención se realiza bajo normas sanitarias chilenas, priorizando siempre la salud, naturalidad y seguridad del paciente.',
    credentials: [
      'Capacitación continua en técnicas de armonización facial',
      'Aplicación certificada de bioestimuladores y toxina botulínica',
      'Manejo de aparatología médica de alta gama',
    ],
    image:
      'https://images.unsplash.com/photo-1594824813512-32a87754b2d5?auto=format&fit=crop&w=800&q=80',
  },
];

export const SERVICE_PROCESS = [
  {
    step: '01',
    title: 'Evaluación',
    subtitle: 'Diagnóstico Anatómico',
    description:
      'Análisis clínico y fotográfico exhaustivo de las proporciones faciales, calidad de la piel y expectativas individuales en un espacio de confianza.',
  },
  {
    step: '02',
    title: 'Planificación',
    subtitle: 'Protocolo Personalizado',
    description:
      'Diseño del plan médico a medida, seleccionando la técnica, producto certificado o tecnología más adecuada para tu caso particular.',
  },
  {
    step: '03',
    title: 'Tratamiento',
    subtitle: 'Ejecución con Precisión',
    description:
      'Realización del procedimiento bajo estrictos protocolos de bioseguridad, técnicas indoloras y productos originales de primer nivel mundial.',
  },
  {
    step: '04',
    title: 'Seguimiento',
    subtitle: 'Cuidado & Acompañamiento',
    description:
      'Control médico posterior para evaluar la evolución, asegurar resultados óptimos y brindar orientación continua para la salud de tu piel.',
  },
];

export const CLINICAL_CASES: ClinicalResultCase[] = [
  {
    id: 'caso-full-face-olheiras',
    procedure: 'Harmonización Full Face & Descanso de Mirada',
    title: 'Atenuación de ojeras, soporte malar y rejuvenecimiento peribucal',
    zone: 'Rostro Completo (Tercio Medio, Ojeras y Labios)',
    resultSummary:
      'Eliminación del aspecto de cansancio en la cuenca periorbitaria, restitución de volumen sutil en pómulos y labios definidos con hidratación profunda, logrando un semblante descansado, simétrico y luminoso.',
    clinicalObservation:
      'Infiltración anatómica en fosa malar y ojeras con ácido hialurónico resiliente de baja higroscopia para evitar edema, complementado con perfilado de bermellón labial y soporte del tercio inferior.',
    harmonizationPoints: [
      'Relleno de ojeras y atenuación del surco lagrimal',
      'Reposición y soporte de pómulos (Malar)',
      'Definición labial con hidratación natural',
      'Equilibrio global de proporciones y luminosidad facial',
    ],
    productUsed: 'Ácido Hialurónico Resiliente Teosyal Redensity II + RHA 3',
    sessionInfo: '1 sesión clínica (45 min) • Control y evolución a los 15-20 días',
    tag: 'Full Face • Ojeras & Labios',
    badge: 'Caso Clínico de Referencia #1',
    fileSlot: 'images (7).jfif',
    compositeImage: '/images/cases/caso-1.jfif',
    beforeImage:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85',
    afterImage:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'caso-perfil-mandibula',
    procedure: 'Perfiloplastia: Mentón & Contorno Mandibular',
    title: 'Proyección anterior del mentón y definición del ángulo goníaco en perfil',
    zone: 'Tercio Inferior en Perfil (Línea Mandibular & Mentón)',
    resultSummary:
      'Alineación y avance anterior del mentón retrognático, esculpido del ángulo de la mandíbula y separación nítida del reborde cervicofacial sin necesidad de intervención quirúrgica.',
    clinicalObservation:
      'Técnica supraperióstica de alta firmeza viscoelástica (G prime elevado) en sínfisis mentoniana y borde mandibular basilar. Proyección armónica en plano estético de Ricketts.',
    harmonizationPoints: [
      'Proyección y avance anterior del mentón',
      'Definición y marcaje del ángulo goníaco',
      'Estilización de la línea cervicomandibular',
      'Equilibrio de proporciones de perfil con la punta nasal',
    ],
    productUsed: 'Ácido Hialurónico Estructural de Alta Cohesividad',
    sessionInfo: '1 sesión de 35 min • Retorno inmediato a actividades habituales',
    tag: 'Perfiloplastia • Mentón',
    badge: 'Caso Clínico de Referencia #2',
    fileSlot: 'images (6).jfif',
    compositeImage: '/images/cases/caso-2.jfif',
    beforeImage:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=85',
    afterImage:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'caso-harmonizacao-labial',
    procedure: 'Armonización Labial & Hidratación Tisular',
    title: 'Definición del arco de cupido, turgencia natural y suavizado de microlíneas',
    zone: 'Tercio Inferior (Macro Bermellón Labial)',
    resultSummary:
      'Labios de aspecto turgente y saludable, contorno de cupido claramente delineado, hidratación dérmica profunda y desaparición de arrugas peribucales sin proyecciones exageradas.',
    clinicalObservation:
      'Técnica con microcánula atraumática y gel viscoelástico dinámico. Integración dérmica perfecta que acompaña el movimiento natural al hablar y sonreír.',
    harmonizationPoints: [
      'Esculpido y demarcación del arco de cupido',
      'Eversión anatómica sutil del labio superior',
      'Eliminación de líneas de deshidratación labial',
      'Proporción armónica 1:1.6 entre labio superior e inferior',
    ],
    productUsed: 'Ácido Hialurónico Elástico Dinámico Teosyal Kiss / RHA 2',
    sessionInfo: 'Sesión de 30 min • Resultado visible de inmediato',
    tag: 'Labios • Hidratación',
    badge: 'Caso Clínico de Referencia #3',
    fileSlot: 'images (5).jfif',
    compositeImage: '/images/cases/caso-3.jfif',
    beforeImage:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=85',
    afterImage:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'caso-lifting-maduro',
    procedure: 'Full Face Lifting & Rejuvenecimiento Avanzado',
    title: 'Soporte de vectores tensores, atenuación de surcos y reposición malar',
    zone: 'Tercio Medio e Inferior (Pómulos, Surcos y Comisuras)',
    resultSummary:
      'Rejuvenecimiento visible y descanso integral: reposición de las almohadillas grasas del malar, suavizado de surcos nasogenianos profundos y tensado de las comisuras con apariencia natural y serena.',
    clinicalObservation:
      'Protocolo combinado de inducción de colágeno y anclaje de ácido hialurónico reticulado en fosa piriforme y arco cigomático. Elevación tisular sin efecto de cara hinchada.',
    harmonizationPoints: [
      'Atenuación de surcos nasogenianos y líneas de marioneta',
      'Reposición volumétrica y soporte en pómulos (Malar)',
      'Compactación dérmica y vectorización de soporte',
      'Descanso fisonómico profundo conservando los rasgos propios',
    ],
    productUsed: 'Bioestimulador de Colágeno + Ácido Hialurónico Reticulado',
    sessionInfo: 'Protocolo clínico personalizado • Control a los 20 y 60 días',
    tag: 'Lifting • Rejuvenecimiento',
    badge: 'Caso Clínico de Referencia #4',
    fileSlot: 'images (4).jfif',
    compositeImage: '/images/cases/caso-4.jfif',
    beforeImage:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85',
    afterImage:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'caso-perfiloplastia-completa',
    procedure: 'Rinomodelación & Armonización Tridimensional 3D',
    title: 'Alineación del dorso nasal, proyección labial y contorno 3/4',
    zone: 'Perfil Nasal, Labios y Reborde Mandibular',
    resultSummary:
      'Perfil facial rectilíneo y estilizado: corrección estética del caballete o gibba nasal sin cirugía, punta nasal elevada y proyección labial y de mentón perfectamente balanceada.',
    clinicalObservation:
      'Microinyecciones de ácido hialurónico de alta densidad en dorso y espina nasal anterior para rectificación de perfil, sincronizado con perfilado labial y definición de ángulo mandibular.',
    harmonizationPoints: [
      'Rectificación del dorso nasal sin cirugía plástica',
      'Elevación y soporte de la punta nasal caída',
      'Proyección equilibrada de labios y mentón',
      'Definición nítida del reborde mandibular en vista 3/4',
    ],
    productUsed: 'Ácido Hialurónico de Alta Cohesividad y Resistencia',
    sessionInfo: 'Procedimiento ambulatorio de 25 min • Resultado inmediato',
    tag: 'Rinomodelación & Perfil',
    badge: 'Caso Clínico de Referencia #5',
    fileSlot: 'images (3).jfif',
    compositeImage: '/images/cases/caso-5.jfif',
    beforeImage:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    afterImage:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote:
      'La atención en Verona supera con creces lo que esperaba. Me explicaron cada detalle con base médica, sin promesas exageradas. El resultado de mi armonización labial es sumamente natural y delicado.',
    patientName: 'C. V. M.',
    procedure: 'Armonización Labial',
    city: 'Iquique',
  },
  {
    id: 't-2',
    quote:
      'Buscaba una clínica en Iquique donde realmente sintiera seguridad y respaldo médico. Con el tratamiento Full Face mi rostro se ve descansado y fresco, sin perder mi propia expresión.',
    patientName: 'M. F. A.',
    procedure: 'Full Face (Toxina Botulínica)',
    city: 'Iquique',
  },
  {
    id: 't-3',
    quote:
      'Excelente experiencia con los bioestimuladores de colágeno. La calidad de mi piel mejoró notablemente con las semanas y la atención de Dayana y el equipo fue impecable en cada sesión.',
    patientName: 'P. S. T.',
    procedure: 'Bioestimuladores de Colágeno',
    city: 'Alto Hospicio / Iquique',
  },
];

export const INSTAGRAM_FEED = [
  {
    id: 'ig-1',
    title: 'Precisión médica en cada procedimiento',
    category: 'Procedimiento',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ig-2',
    title: 'Espacios diseñados para el bienestar y la tranquilidad',
    category: 'La Clínica',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ig-3',
    title: 'Ciencia dérmica aplicada al rejuvenecimiento',
    category: 'Dermatología',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ig-4',
    title: 'Tecnología y aparatología médica certificada',
    category: 'Tecnología',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ig-5',
    title: 'Armonía estética con rigor y respeto anatómico',
    category: 'Resultados',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ig-6',
    title: 'Atención personalizada en el corazón de Iquique',
    category: 'Experiencia',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
];
