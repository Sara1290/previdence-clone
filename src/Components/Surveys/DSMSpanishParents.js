import React from 'react';
import * as Survey from "survey-react";
import NavBarTwo from '../NavBarTwo'
import "survey-react/modern.css";


const DSMSpanishParents = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: '01257da1-b411-4f0e-bba9-cfc42d5d3209',
    surveyPostId: 'f73dc12e-3aa0-4716-b2a7-f5d90cff3abb', 
    
    locale: "es",
 title: {
  default: "Ogden School District DSM-5 Age 11–17",
  es: "Autoevaluación transversal del Nivel 1 del DSM-5: Niños de 6 a 17 años"
 },
 pages: [
  {
   name: "Student Info",
   elements: [
    {
     type: "radiogroup",
     name: "Gender",
     title: {
      default: "Student gender",
      es: "Género del estudiante"
     },
     hideNumber: true,
     choices: [
      {
       value: "item1",
       text: {
        default: "Male",
        es: "Masculino"
       }
      },
      {
       value: "item2",
       text: {
        default: "Female",
        es: "Mujer"
       }
      },
      {
       value: "item3",
       text: {
        default: "Non-Binary",
        es: "No binario"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "Grade",
     title: {
      default: "Student grade",
      es: "Grado del estudiante"
     },
     hideNumber: true,
     choices: [
      {
       value: "item1",
       text: {
        default: "1st grade",
        es: "1er grado"
       }
      },
      {
       value: "item2",
       text: {
        default: "2nd grade",
        es: "2do grado"
       }
      },
      {
       value: "item3",
       text: {
        default: "3rd grade",
        es: "3er grado"
       }
      },
      {
       value: "item4",
       text: {
        default: "4th grade",
        es: "4to grado"
       }
      },
      {
       value: "item5",
       text: {
        default: "5th grade",
        es: "5to grado"
       }
      },
      {
       value: "item6",
       text: {
        default: "6th grade",
        es: "6to grado"
       }
      },
      {
       value: "item7",
       text: {
        default: "7th grade",
        es: "7to grado"
       }
      },
      {
       value: "item8",
       text: {
        default: "8th grade",
        es: "8to grado"
       }
      },
      {
       value: "item9",
       text: {
        default: "9th grade",
        es: "9to grado"
       }
      },
      {
       value: "item10",
       text: {
        default: "10th grade",
        es: "10to grado"
       }
      },
      {
       value: "item11",
       text: {
        default: "11th grade",
        es: "11to grado"
       }
      },
      {
       value: "item12",
       text: {
        default: "12th grade",
        es: "12to grado"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "Race",
     title: {
      default: "Student race",
      es: "Nacionalidad estudiantil"
     },
     hideNumber: true,
     choices: [
      {
       value: "item1",
       text: {
        default: "African American",
        es: "Afroamericano"
       }
      },
      {
       value: "item2",
       text: {
        default: "American Indian or Alaska Native",
        es: "India americana o nativa de Alaska"
       }
      },
      {
       value: "item3",
       text: {
        default: "Asian",
        es: "Asiático"
       }
      },
      {
       value: "item4",
       text: {
        default: "Caucasian",
        es: "Caucásico"
       }
      },
      {
       value: "item5",
       text: {
        default: "Hispanic/ Latinx",
        es: "Hispano / Latinx"
       }
      },
      {
       value: "item6",
       text: {
        default: "Mixed race",
        es: "Raza mixta"
       }
      },
      {
       value: "item7",
       text: {
        default: "Native Hawaiian or Pacific Islander",
        es: "Nativo hawaiano o isleño del Pacífico"
       }
      }
     ]
    }
   ],
   title: {
    default: "Student Info",
    es: "Información del estudiante"
   }
  },
  {
   name: "DSM-5 Self-Rated Level 1 Cross-Cutting Symptom Measure—Child Age 11–17",
   elements: [
    {
     type: "panel",
     name: "Somatic Symptoms",
     elements: [
      {
       type: "radiogroup",
       name: "I-1",
       title: {
        default: "Complained of stomachaches, headaches, or other aches and pains? ",
        es: "Se ha quejado de dolores de estómago, dolores de cabeza u otros dolores y \nmolestias?"
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "I-2",
       title: {
        default: "Said he/she was worried about his/her health or about getting sick? ",
        es: "Dijo estar preocupado por su salud o por enfermarse?"
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      }
     ],
     title: {
      default: "During the past TWO (2) WEEKS, how much (or how often) has your child…",
      es: "Durante las últimas DOS (2) SEMANAS, ¿cuánto (o con qué frecuencia)..."
     },
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Sleep Problems",
     elements: [
      {
       type: "radiogroup",
       name: "II-1",
       title: {
        default: "Had problems sleeping—that is, trouble falling asleep, staying asleep, or waking up too early",
        es: "Ha tenido problemas para dormir?; es decir, problemas para conciliar el sueño, para quedarse dormido o por despertarse demasiado temprano."
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Inattention",
     elements: [
      {
       type: "radiogroup",
       name: "III-1Ninguno",
       title: {
        default: "Had problems paying attention when he/she was in class or doing his/her homework or reading a book or playing a game?",
        es: "Ha tenido problemas para prestar atención en clase, haciendo sus tareas, leyendo un libro o jugando un juego?"
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Depression",
     elements: [
      {
       type: "radiogroup",
       name: "IV-1",
       title: {
        default: "Had less fun doing things than he/she used to?",
        es: "Se divirtió menos haciendo las cosas que acostumbraba hacer?"
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "IV-2",
       title: {
        default: "Seemed sad or depressed for several hours?",
        es: "Se sintió triste o deprimido durante varias horas?"
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Anger & Irritability",
     elements: [
      {
       type: "radiogroup",
       name: "V&VI-1",
       title: {
        default: "Seemed more irritated or easily annoyed than usual? ",
        es: "Se sintió más irritado o fácilmente molesto que lo habitual?"
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "V&VI-2Felt angry or lost your temper",
       title: {
        default: "Seemed angry or lost his/her temper?",
        es: "Pareció enojado o perdió la paciencia?"
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Mania",
     elements: [
      {
       type: "radiogroup",
       name: "VII-1",
       title: {
        default: "Started lots more projects than usual or did more risky things than usual?",
        es: "Comenzó muchos más proyectos que lo habitual o hizo más cosas riesgosas que lo habitual?"
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "VII-2",
       title: {
        default: "Slept less than usual for him/her, but still had lots of energy?",
        es: "Durmió menos que lo habitual, pero aún tenía mucha energía?"
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Anxiety",
     elements: [
      {
       type: "radiogroup",
       name: "VIII-1",
       title: {
        default: "Said he/she felt nervous, anxious, or scared?",
        es: "Dijo que se sentía nervioso, ansioso o asustado?"
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "VIII-2",
       title: {
        default: "Not been able to stop worrying?",
        es: "No ha podido dejar de preocuparse?"
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "VIII-3",
       title: {
        default: "Said he/she couldn’t do things he/she wanted to or should have done,\nbecause they made him/her feel nervous? ",
        es: "Dijo que no podía hacer las cosas que quería o debía hacer, porque lo ponían nervioso?"
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Psychosis",
     elements: [
      {
       type: "radiogroup",
       name: "IX-1",
       title: {
        default: "Said that he/she heard voices—when there was no one there—speaking about him/her or telling him/her what to do or saying bad things to him/her?",
        es: "Dijo que escuchaba voces, cuando no había nadie, hablando de él o diciéndole qué hacer o diciéndole cosas malas?"
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "IX-2",
       title: {
        default: "Said that he/she had a vision when he/she was completely awake—that is, \nsaw something or someone that no one else could see?",
        es: "Dijo que tenía una visión cuando estaba completamente despierto’; es decir, vio algo o a alguien que nadie más podía ver."
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Repetitive Thoughts  & Behaviors",
     elements: [
      {
       type: "radiogroup",
       name: "X-1",
       title: {
        default: "Said that he/she had thoughts that kept coming into his/her mind that he/she would do something bad or that something bad would happen to him/her or to someone else?",
        es: "Dijo que tenía ideas insistentes de hacer algo malo o que algo malo le pasaría a él o a otra persona?"
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "X-2Ninguno",
       title: {
        default: "Said he/she felt the need to check on certain things over and over again, like whether a door was locked or whether the stove was turned off?",
        es: "Dijo que sintió la necesidad de verificar ciertas cosas una y otra vez?, por ejemplo, si una puerta estaba cerrada o si la estufa estaba apagada."
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "X-3",
       title: {
        default: "Seemed to worry a lot about things he/she touched being dirty or having germs or being poisoned?",
        es: "Pareció preocuparse de que las cosas que tocó estuvieran sucias o tuvieran gérmenes o estuvieran envenenadas?"
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "X-4",
       title: {
        default: "Said that he/she had to do things in a certain way, like counting or saying special things out loud, in order to keep something bad from happening? ",
        es: "Dijo que tenía que hacer las cosas de cierta manera, como contar o decir cosas especiales en voz alta, para evitar que algo malo pase?"
       },
       isRequired: true,
       choices: [
        {
         value: "0",
         text: {
          default: "None",
          es: "Ninguno"
         }
        },
        {
         value: "1",
         text: {
          default: "Slight",
          es: "Ligero"
         }
        },
        {
         value: "2",
         text: {
          default: "Mild",
          es: "Leve"
         }
        },
        {
         value: "3",
         text: {
          default: "Moderate",
          es: "Moderado"
         }
        },
        {
         value: "4",
         text: {
          default: "Severe",
          es: "Muy  fuerte"
         }
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Substance Use",
     elements: [
      {
       type: "radiogroup",
       name: "XI-1",
       title: {
        default: "Had an alcoholic beverage (beer, wine, liquor, etc.)?",
        es: "Ha tomado una bebida alcohólica (cerveza, vino, licor, etc.)?"
       },
       isRequired: true,
       choices: [
        {
         value: "1",
         text: {
          default: "Yes",
          es: "sí"
         }
        },
        {
         value: "0",
         text: "No"
        },
        {
         value: "2",
         text: {
          default: "Don't Know",
          es: "No lo sé"
         }
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "XI-2",
       title: {
        default: "Smoked a cigarette, a cigar, or pipe, or used snuff or chewing tobacco?",
        es: "Ha fumado un cigarrillo, un puro o una pipa, o has usado tabaco de aspirar o de mascar?\n"
       },
       isRequired: true,
       choices: [
        {
         value: "1",
         text: {
          default: "Yes",
          es: "sí"
         }
        },
        {
         value: "0",
         text: "No"
        },
        {
         value: "2",
         text: {
          default: "Don't Know",
          es: "No lo sé"
         }
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "XI-3",
       title: {
        default: "Used drugs like marijuana, cocaine or crack, club drugs (like Ecstasy),  hallucinogens (like LSD), heroin, inhalants or solvents (like glue), or  methamphetamine (like speed)?",
        es: "Has usado drogas como marihuana, cocaína o crack, drogas de club (como el éxtasis), alucinógenos (como LSD), heroína, inhalantes o disolventes (como pegamento) o metanfetamina (como el “speed”)?"
       },
       isRequired: true,
       choices: [
        {
         value: "1",
         text: {
          default: "Yes",
          es: "sí"
         }
        },
        {
         value: "0",
         text: "No"
        },
        {
         value: "2",
         text: {
          default: "Don't Know",
          es: "No lo sé"
         }
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "XI-4",
       title: {
        default: "Used any medicine without a doctor’s prescription to get high or change  the way you feel (e.g., painkillers [like Vicodin], stimulants [like Ritalin or  Adderall], sedatives or tranquilizers [like sleeping pills or Valium], or  steroids)?",
        es: "Ha usado algún medicamento sin receta médica (por ejemplo, medicamentos para el dolor [como Vicodin], estimulantes [como Ritalin o Adderall], sedantes o tranquilizantes [como pastillas para dormir o Valium], o esteroides)?"
       },
       isRequired: true,
       choices: [
        {
         value: "1",
         text: {
          default: "Yes",
          es: "sí"
         }
        },
        {
         value: "0",
         text: "No"
        },
        {
         value: "2",
         text: {
          default: "Don't Know",
          es: "No lo sé"
         }
        }
       ],
       colCount: 5
      }
     ],
     title: {
      default: "In the past TWO (2) WEEKS, has your child …",
      es: "En las últimas DOS (2) SEMANAS, ¿su niño... "
     },
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Suicidal Ideation/  Suicide Attempts",
     elements: [
      {
       type: "radiogroup",
       name: "XII-1",
       title: {
        default: "In the past TWO (2) WEEKS, has he/she talked about wanting to kill himself/herself or about wanting to commit suicide?",
        es: "¿él ha hablado de querer quitarse la vida o sobre querer suicidarse?"
       },
       isRequired: true,
       choices: [
        {
         value: "1",
         text: {
          default: "Yes",
          es: "sí"
         }
        },
        {
         value: "0",
         text: "No"
        },
        {
         value: "2",
         text: {
          default: "Don't Know",
          es: "No lo sé"
         }
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "XII-2",
       title: {
        default: "Has he/she EVER tried to kill himself/herself?",
        es: "ALGUNA VEZ ha intentado quitarse la vida?"
       },
       isRequired: true,
       choices: [
        {
         value: "1",
         text: {
          default: "Yes",
          es: "sí"
         }
        },
        {
         value: "0",
         text: "No"
        },
        {
         value: "2",
         text: {
          default: "Don't Know",
          es: "No lo sé"
         }
        }
       ],
       colCount: 5
      }
     ],
     title: {
      es: "En las últimas DOS (2) SEMANAS"
     },
     showQuestionNumbers: "off"
    }
   ],
   title: {
    default: "DSM-5 Self-Rated Level 1 Cross-Cutting Symptom Measure—Child Age 11–17",
    es: "Autoevaluación transversal del Nivel 1 del DSM-5: Niños de 11 a 17 años"
   }
  }
 ],
 showPageTitles: false

  }
  const survey = new Survey.Model(json);
  
  // survey.onComplete.add(function (sender) { 
  //   document.textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
  
  // });


  survey
    .onComplete
    .add(function (sender) {
        var panelI = sender.getAllPanels()[0];
        var panelII = sender.getAllPanels()[1];
        var panelIII = sender.getAllPanels()[2];
        var panelIV = sender.getAllPanels()[3];
        var panelVandVI = sender.getAllPanels()[4];
        var panelVII = sender.getAllPanels()[5];
        var panelVIII = sender.getAllPanels()[6];
        var panelIX = sender.getAllPanels()[7];
        var panelX = sender.getAllPanels()[8];
        var panelXI = sender.getAllPanels()[9];
        var panelXII = sender.getAllPanels()[10];
        var sum = function(w, x, y, z) {
            return Number(w) + Number(x) + Number(y) + Number(z);
        };
        var panelOne = sum(panelI.questionsValue[0].value, panelI.questionsValue[1].value, 0, 0);
        var panelTwo = sum(panelII.questionsValue[0].value, 0, 0, 0);
        var panelThree = sum(panelIII.questionsValue[0].value, 0, 0, 0);
        var panelFour = sum(panelIV.questionsValue[0].value, panelIV.questionsValue[1].value, 0, 0);
        var panelFiveAndSix = sum(panelVandVI.questionsValue[0].value, panelVandVI.questionsValue[1].value, 0, 0);
        var panelSeven = sum(panelVII.questionsValue[0].value, panelVII.questionsValue[1].value, 0, 0);
        var panelEight = sum(panelVIII.questionsValue[0].value, panelVIII.questionsValue[1].value, panelVIII.questionsValue[2].value, 0);
        var panelNine = sum(panelIX.questionsValue[0].value, panelIX.questionsValue[1].value, 0, 0);
        var panelTen = sum(panelX.questionsValue[0].value, panelX.questionsValue[1].value, panelX.questionsValue[2].value, panelX.questionsValue[3].value);
        var panelEleven = sum(panelXI.questionsValue[0].value, panelXI.questionsValue[1].value, panelXI.questionsValue[2].value, panelXI.questionsValue[3].value);
        var panelTwelve = sum(panelXII.questionsValue[0].value, panelXII.questionsValue[1].value, 0, 0);
        document
            .querySelector('#surveyResult')
            .innerHTML = `<!DOCTYPE html><style>
            body {
              color: #666;
              font: 14px/24px "Open Sans", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", Sans-Serif;
              -webkit-print-color-adjust: exact;
            }
            table {
              border-collapse: separate;
              border-spacing: 0;
              width: 100%;
            }
            th,
            td {
              padding: 6px 15px;
            }
            th {
              background: #42444e;
              color: #fff;
              text-align: left;
            }
            tr:first-child th:first-child {
              border-top-left-radius: 6px;
            }
            tr:first-child th:last-child {
              border-top-right-radius: 6px;
            }
            td {
              border-right: 1.5px solid black;
              border-bottom: 1.5px solid black;
            }
            td:first-child {
              border-left: 1.5px solid black;
            }
            tr:nth-child(even) td {
              background: #eaeaed;
            }
            tr:last-child td:first-child {
              border-bottom-left-radius: 6px;
            }
            tr:last-child td:last-child {
              border-bottom-right-radius: 6px;
            }

            @media print {
              header {
                display: none;
              }
              #printPageButton {
                display: none;
              }
              #surveyElement {
                display: none;
              }
              #surveyResult { 
                width: 80%;
                margin-left: 5vw;
                }
                #ui-to-top {
                  display: none;
                }

</style>
<div>
<button id="printPageButton" onClick="window.print()">Print Results
</button>
<svg xmlns="http://www.w3.org/2000/svg" id="printPageButton" onClick="window.print()" width="32" height="32" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
  <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
  <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
</svg>
</div>
<table class="demo">

	<thead>
	<tr>
		<th>Domains</th>

		<th>Score</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>${panelI.name}</td>

		<td style="${(panelOne < 3) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelOne} - Síntomas somáticos</td>
	</tr>
	<tr>
		<td>${panelII.name}</td>

		<td style="${(panelTwo < 2) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelTwo} -  Problemas para dormir</td>
	</tr>
	<tr>
		<td>${panelIII.name}</td>
		<td style="${(panelThree < 1) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelThree} - Inatención</td>
	</tr>
	<tr>
		<td>${panelIV.name}</td>
		<td style="${(panelFour < 3) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelFour} - Depresión</td>
	</tr>
	<tr>
		<td>${panelVandVI.name}</td>
		<td style="${(panelFiveAndSix < 3) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelFiveAndSix} - Ira e irritabilidad</td>
	</tr>
	<tr>
		<td>${panelVII.name}</td>
		<td style="${(panelSeven < 3) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelSeven} - Manía</td>
	</tr>
	<tr>
		<td>${panelVIII.name}</td>
		<td style="${(panelEight < 4) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelEight} - Ansiedad</td>
	</tr>
	<tr>
		<td>${panelIX.name}</td>
		<td style="${(panelNine < 1) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelNine} - Psicosis</td>
	</tr>
	<tr>
		<td>${panelX.name}</td>
		<td style="${(panelTen < 5) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelTen} - Pensamientos y comportamientos repetitivos</td>
	</tr>
	<tr>
		<td>${panelXI.name}</td>
		<td style="${(panelEleven < 1) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelEleven} - Uso de sustancias</td>
	</tr>
	<tr>
		<td>${panelXII.name}</td>
		<td style="${(panelTwelve < 1) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelTwelve} - Ideas suicidas / intentos de suicidio</td>
	</tr>
	<tbody>
</table>
</html>`
    });

// ReactDOM.render(<Survey.Survey model={survey} />, document.getElementById("surveyElement"));;




return (
  <div>
    <NavBarTwo />
      <div className="survey" id="surveyResult">
      <Survey.Survey
          model={survey}
          />
      </div>
  </div>
);

}
export default DSMSpanishParents;